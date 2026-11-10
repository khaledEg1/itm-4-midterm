(() => {
const li = items => "<ul>" + items.map(item => "<li>" + item + "</li>").join("") + "</ul>";

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS.ai = {id:"ai", title:"برمجة الذكاء الاصطناعي", done:false,
  req: li(["<span class='en'>Chapter 1</span>: مطلوب لحد <span class='en'>Model-Based Reflex Agent</span> شامل الموديل ده","<span class='en'>Chapter 6</span>"]),
  exam: "<ol><li><span class='en'>MCQ</span></li><li><span class='en'>Chapter 6 Question</span>: السؤال المحدد الموجود في الشابتر السادس</li><li><span class='en'>Algorithm</span>: هييجي <span class='en'>Algorithm</span> لموديل واحد من الـ <span class='en'>Two Models</span> المطلوبين</li><li>سؤال تعريفات نظرية، زي: <span class='en'>Define AI</span> / <span class='en'>What is an Agent?</span></li></ol>"};

})();
