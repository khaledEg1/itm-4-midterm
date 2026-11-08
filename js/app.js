const { info, cv, nlp, mob, iot, db, ai } = window.SUBJECTS;

/* ============ EDIT HERE ============ */

/* Exam schedule (المستوى الرابع - ITM). Row: {date:"YYYY-MM-DD", subject, place, tab:"tab id"}. Egypt time. */
const EXAM_TIME = "1:45 – 2:45 م";
const EXAMS = [
  {date:"2026-11-07", subject:"الرؤية بالحاسب",                  place:"مدرج ج", tab:"cv"},
  {date:"2026-11-08", subject:"معالجة اللغات الطبيعية",          place:"مدرج ب", tab:"nlp"},
  {date:"2026-11-09", subject:"تطبيقات الموبايل",                place:"مدرج ب", tab:"mob"},
  {date:"2026-11-10", subject:"انترنت الأشياء",                  place:"مدرج ب", tab:"iot"},
  {date:"2026-11-11", subject:"نظم حفظ واسترجاع البيانات",       place:"مدرج ب", tab:"db"},
  {date:"2026-11-12", subject:"برمجة الذكاء الاصطناعي",          place:"مدرج ب", tab:"ai"},
];

const li = a => "<ul>" + a.map(x => "<li>" + x + "</li>").join("") + "</ul>";

/* Each subject: done = page ready (true => "مكتمل" glowing label). req = what's required. exam = exam format. html = summary (only when done). */
const TABS = [info, cv, nlp, mob, iot, db, ai];
/* ============ END EDIT ============ */



const $ = s => document.querySelector(s);
const seen = (() => { try { return JSON.parse(localStorage.getItem("seenTabs") || "[]"); } catch (e) { return []; } })();
const updSeen = (() => { try { return JSON.parse(localStorage.getItem("updSeen") || "[]"); } catch (e) { return []; } })();
const saveUpd = () => { try { localStorage.setItem("updSeen", JSON.stringify(updSeen)); } catch (e) {} };
const UPD = {nlp: 1, mob: 1}; const UNREV = {iot: 1};
const saveSeen = () => { try { localStorage.setItem("seenTabs", JSON.stringify(seen)); } catch (e) {} };
const cairoToday = () => new Intl.DateTimeFormat("en-CA", {timeZone:"Africa/Cairo"}).format(new Date());

function renderSched() {
  const box = $("#sched"); if (!box) return;
  if (!EXAMS.length) { box.innerHTML = '<div class="empty">الجدول هيتضاف هنا قريبًا</div>'; return; }
  const t = cairoToday();
  const rows = [...EXAMS].sort((a, b) => a.date.localeCompare(b.date)).map(e => {
    const cls = e.date < t ? "done" : e.date === t ? "today" : "";
    const st = e.date < t ? '<span class="st">خلصت ✓</span>' : e.date === t ? '<span class="st t">النهارده</span>' : '<span class="st u">لسه</span>';
    const d = new Date(e.date + "T12:00:00").toLocaleDateString("ar-EG", {weekday:"long", day:"numeric", month:"long"});
    const subj = e.tab ? `<a href="#${e.tab}" data-tab="${e.tab}">${e.subject}</a>` : e.subject;
    return `<tr class="${cls}"><td class="dt">${d}</td><td>${subj}</td><td class="dn">${e.place || ""}</td><td>${st}</td></tr>`;
  }).join("");
  box.innerHTML = `<div class="tw"><table class="sched"><thead><tr><th>اليوم</th><th>المادة</th><th>المكان</th><th>الحالة</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

function panelHTML(t) {
  if (t.id === "info") return `<h2>${t.title}</h2><p class="sub">ابدأ من هنا</p>${t.html}`;
  let h = `<h2>${t.title}</h2><p class="sub">${t.done ? "الصفحة مكتملة" : "الصفحة لسه تحت التجهيز"}</p>`;
  h += `<section class="block"><h3>المطلوب في الميد تيرم</h3>${t.req}`;
  if (t.exam) h += `<h4>شكل الامتحان</h4>${t.exam}`;
  h += `</section>`;
  h += t.done ? FR(t.html) : `<div class="wip">الملخص مش جاهز لسه، هيتضاف أثناء الميد تيرم</div>`;
  return h;
}

function build() {
  const tabs = $("#tabs"), main = $("#main");
  TABS.forEach(t => {
    const b = document.createElement("button");
    b.className = "tab"; b.role = "tab"; b.id = "tab-" + t.id; b.setAttribute("aria-controls", "p-" + t.id);
    const ex = EXAMS.find(e => e.tab === t.id); const todayStr = new Intl.DateTimeFormat("en-CA", {timeZone:"Africa/Cairo"}).format(new Date()); const passed = !!ex && ex.date < todayStr; const isUpd = t.done && !!UPD[t.id] && !updSeen.includes(t.id);
    const isUnrev = t.done && !!UNREV[t.id];
    const glow = t.done && t.id !== "info" && (isUpd || !seen.includes(t.id)) && !passed;
    b.innerHTML = t.title + (t.id === "info" ? "" : ` <span class="badge ${isUnrev ? "warn" : isUpd ? "upd" : t.done ? "ok" : "no"}${glow ? " glow" : ""}">${isUnrev ? "غير مراجع" : isUpd ? "اتحدث" : t.done ? "مكتمل" : "غير مكتمل"}</span>`);
    b.onclick = () => show(t.id);
    tabs.appendChild(b);
    const p = document.createElement("div");
    p.className = "panel"; p.id = "p-" + t.id; p.role = "tabpanel"; p.hidden = true; p.innerHTML = panelHTML(t);
    main.appendChild(p);
  });
  renderSched();
  const ANN_ID = "iot"; /* the subject most recently completed in full — bump to the next subject id when another subject is completed */
   let forceInfo = false;
   try { if (localStorage.getItem("annForced") !== ANN_ID) { localStorage.setItem("annForced", ANN_ID); forceInfo = true; } } catch (e) {}
   show(forceInfo ? "info" : (location.hash.slice(1) && TABS.some(t => t.id === location.hash.slice(1)) ? location.hash.slice(1) : "info"));
}

function show(id) {
  TABS.forEach(t => {
    const sel = t.id === id;
    $("#p-" + t.id).hidden = !sel;
    const b = $("#tab-" + t.id); b.setAttribute("aria-selected", sel);
    if (sel) {
      $("#cur").textContent = t.title;
      const g = b.querySelector(".glow");
      if (g) { g.classList.remove("glow"); if (!seen.includes(id)) { seen.push(id); saveSeen(); } }
      if (UPD[id] && !updSeen.includes(id)) { updSeen.push(id); saveUpd(); const bd = b.querySelector(".badge.upd"); if (bd) { bd.classList.remove("upd", "glow"); bd.classList.add("ok"); bd.textContent = "مكتمل"; } }
    }
  });
  closeMenu(); updateDot();
  history.replaceState(null, "", "#" + id);
  window.scrollTo({top:0});
}
const FR = h => h.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '<span class="fr"><span>$1</span><span>$2</span></span>');
const CV_M = [[40,5,5],[3,30,7],[2,4,24]], CV_N = ["Cat","Dog","Bird"];
function cvPick(k) {
  const n = 3, N = 120, row = CV_M[k], tp = row[k], rs = row.reduce((a,b)=>a+b), cs = CV_M.reduce((a,r)=>a+r[k],0);
  const fn = rs - tp, fp = cs - tp, tn = N - tp - fn - fp, P = tp/(tp+fp), R = tp/(tp+fn), F = 2*P*R/(P+R), Sp = tn/(tn+fp);
  const pct = x => (Math.round(x*10000)/100) + "%";
  const sum = (arr) => arr.join(" + "), nk = CV_N[k], others = CV_N.filter((_,j)=>j!==k).join(" or ");
  const rowOthers = row.filter((_,j)=>j!==k), colOthers = CV_M.filter((_,i)=>i!==k).map(r=>r[k]);
  let h = "<tr><th>Actual \\ Predicted</th>" + CV_N.map(x=>"<th>"+x+"</th>").join("") + '<th class="tot">Total</th></tr>';
  CV_M.forEach((r,i) => { h += "<tr><th>"+CV_N[i]+"</th>" + r.map((v,j)=>'<td class="'+(i===k&&j===k?"tp":i===k?"fn":j===k?"fp":"tn")+'">'+v+"</td>").join("") + '<td class="tot">'+r.reduce((a,b)=>a+b)+"</td></tr>"; });
  h += '<tr><th class="tot">Total</th>' + [0,1,2].map(j=>'<td class="tot">'+CV_M.reduce((a,r)=>a+r[j],0)+"</td>").join("") + '<td class="tot">120</td></tr>';
  $("#cvm").innerHTML = h;
  document.querySelectorAll("#cvpick button").forEach(b => b.setAttribute("aria-pressed", +b.dataset.k === k));
  $("#cvd").innerHTML = FR(`<div class="tiles">
   <div class="tile"><span>TP: actual ${nk} predicted as ${nk}</span><strong>${tp}</strong></div>
   <div class="tile"><span>FN: actual ${nk} predicted as ${others}</span><div class="eq sm">${sum(rowOthers)}</div><strong>${fn}</strong></div>
   <div class="tile"><span>FP: actual ${others} predicted as ${nk}</span><div class="eq sm">${sum(colOthers)}</div><strong>${fp}</strong></div>
   <div class="tile"><span>TN: all the rest</span><div class="eq sm">120 − ${tp} − ${fn} − ${fp}</div><strong>${tn}</strong></div></div>
   <div class="tiles">
   <div class="tile"><span>Precision</span><div class="eq sm">[[${tp}|${tp} + ${fp}]]</div><strong>${pct(P)}</strong></div>
   <div class="tile"><span>Recall</span><div class="eq sm">[[${tp}|${tp} + ${fn}]]</div><strong>${pct(R)}</strong></div>
   <div class="tile"><span>F1-score</span><div class="eq sm">2 × [[${P.toFixed(4)} × ${R.toFixed(2)}|${P.toFixed(4)} + ${R.toFixed(2)}]]</div><strong>${pct(F)}</strong></div>
   <div class="tile"><span>Specificity</span><div class="eq sm">[[${tn}|${tn} + ${fp}]]</div><strong>${pct(Sp)}</strong></div></div>`);
}
document.addEventListener("click", e => {
  const k = e.target.closest("[data-k]"); if (k) cvPick(+k.dataset.k);
  const b = e.target.closest("[data-sub]"); if (!b) return;
  const root = b.closest(".cvroot");
  root.querySelectorAll("[data-sub]").forEach(x => x.setAttribute("aria-selected", x.dataset.sub === b.dataset.sub));
  root.querySelectorAll(".sp").forEach(x => x.hidden = x.id !== b.dataset.sub);
  if (b.closest(".botnav")) root.scrollIntoView({behavior:"smooth", block:"start"});
});
function closeMenu() { $("#nav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", "false"); }
function updateDot() { $("#dot").hidden = !TABS.some(t => t.done && t.id !== "info" && !seen.includes(t.id)); }
$("#menuBtn").onclick = () => { const o = $("#nav").classList.toggle("open"); $("#menuBtn").setAttribute("aria-expanded", o); };
document.addEventListener("click", e => { const a = e.target.closest("[data-tab]"); if (a) { e.preventDefault(); show(a.dataset.tab); } });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
document.addEventListener("click", e => { if (!e.target.closest("#nav")) closeMenu(); });
build();
cvPick(0);
