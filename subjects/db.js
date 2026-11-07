(() => {
const li = items => "<ul>" + items.map(item => "<li>" + item + "</li>").join("") + "</ul>";

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS.db = {id:"db", title:"نظم حفظ واسترجاع البيانات", done:false,
  req: li(["<span class='en'>Module 1</span>","<span class='en'>Module 2</span>","ملف PDF الأسئلة"]),
  exam: li(["10 أسئلة <span class='en'>MCQ</span>","سؤالين مقالي (<span class='en'>Essay</span>)"])};

})();
