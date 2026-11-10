(() => {
const li = items => "<ul>" + items.map(item => "<li>" + item + "</li>").join("") + "</ul>";

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS.cv = {id:"cv", title:"الرؤية بالحاسب", done:true,
  req: li(["الملفين النظري: <span class='en'>Computer Vision (1).pdf</span> و <span class='en'>compter vision lec 2.pdf</span>",
           "مسألتين من أصل 3 مسائل أخدناهم"]),
  html: `<div class="cvroot">
<div class="subnav" role="tablist">
 <button data-sub="cv-s1" aria-selected="true">Lecture 1: Computer Vision</button>
 <button data-sub="cv-s2" aria-selected="false">Lecture 2: Image</button>
 <button data-sub="cv-s3" aria-selected="false">Problem 3: Confusion Matrix</button>
 <button data-sub="cv-p2" aria-selected="false">Problem 2: Lab 1 &amp; 2 <span class="revtag">لم يُراجع بالكامل</span></button>
 <button data-sub="cv-p1" aria-selected="false">Problem 1: Sheet 1 <span class="revtag">لم يُراجع بالكامل</span></button>
</div>

<div class="sp" id="cv-s1">
 <div class="call"><b>Computer Vision</b> is a branch of AI that helps computers understand visual data such as images and videos. It makes decisions like humans, using computer science, mathematics, and electrical engineering.</div>
 <section class="block"><h3>How Does Computer Vision Work? (Steps)</h3>

 <ol class="flow"><li id="cv-st1"><span class="n">1</span><div class="stp"><div class="tx"><h5>Image Acquisition</h5><p>Capturing images or videos using sensors or cameras.</p></div><img class="phimg" src="assets/images/vision-step-01.jpg" alt="A man capturing a photo with a DSLR camera"></div></li><li id="cv-st2"><span class="n">2</span><div class="stp"><div class="tx"><h5>Preprocessing</h5><p>Preparing the raw image data for analysis.</p><div class="tags"><span>Noise Reduction</span><span>Normalization</span><span>Image Scaling</span><span>Data Augmentation</span></div></div><img class="phimg" src="assets/images/vision-step-02.jpg" alt="A street photo on a monitor, noisy on the left and cleaned on the right"></div></li><li id="cv-st3"><span class="n">3</span><div class="stp"><div class="tx"><h5>Image Segmentation</h5><p>The process of partitioning an image into multiple segments or regions to simplify its analysis.</p><div class="tags"><span>Thresholding</span><span>Edge Detection</span><span>Region-Based Segmentation</span><span>Semantic Segmentation</span></div></div><img class="phimg" src="assets/images/vision-step-03.jpg" alt="A city street split into colored segments: purple road, blue cars, green trees, orange buildings"></div></li><li id="cv-st4"><span class="n">4</span><div class="stp"><div class="tx"><h5>Feature Extraction</h5><p>Identifying and extracting relevant features from the image that can be used for analysis or classification.</p><div class="tags"><span>Keypoint Detection</span><span>Descriptors</span><span>Deep Learning Features</span></div></div><img class="phimg" src="assets/images/vision-step-04.jpg" alt="Keypoints and lines marked on a man's face"></div></li><li id="cv-st5"><span class="n">5</span><div class="stp"><div class="tx"><h5>Object Detection</h5><p>Identifying and locating objects in the image.</p><div class="tags"><span>Classical Methods</span><span>Deep Learning Methods</span></div></div><img class="phimg" src="assets/images/vision-step-05.jpg" alt="Cars and a bus located with yellow and green bounding boxes in a street"></div></li><li id="cv-st6"><span class="n">6</span><div class="stp"><div class="tx"><h5>Object Recognition and Classification</h5><p>Recognize and classify them into predefined categories.</p><div class="tags"><span>Classification Algorithms</span><span>Transfer Learning</span></div></div><img class="phimg" src="assets/images/vision-step-06.jpg" alt="A hand holding a smartphone that recognizes a dog in its camera view"></div></li><li id="cv-st7"><span class="n">7</span><div class="stp"><div class="tx"><h5>Post-Processing</h5><p>Improving the previous results to increase accuracy and usability.</p><div class="tags"><span>Non-Maximum Suppression</span><span>Result Aggregation</span><span>Refinement</span></div></div><img class="phimg" src="assets/images/vision-step-07.jpg" alt="A man from behind reviewing detection boxes and charts on two monitors"></div></li><li id="cv-st8"><span class="n">8</span><div class="stp"><div class="tx"><h5>Visualization and Interpretation</h5><p>Understanding the performance and making decisions based on the visual data.</p><div class="tags"><span>Overlaying Results</span><span>Metrics and Evaluation</span><span>User Interface</span></div></div><img class="phimg" src="assets/images/vision-step-08.jpg" alt="A man looking at a big dashboard with an annotated street image and charts"></div></li></ol></section>
 <section class="block"><h3>Applications of Computer Vision</h3><div class="apps"><div class="app"><img src="assets/images/vision-application-01.jpg" alt="Offshore oil and natural gas platform, titled Oil and natural gas inside the image"></div><div class="app"><img src="assets/images/vision-application-02.jpg" alt="Two businessmen in a job interview, titled Hiring process inside the image"></div><div class="app"><img src="assets/images/vision-application-03.jpg" alt="CCTV camera on a wall, titled Video surveillance inside the image"></div><div class="app"><img src="assets/images/vision-application-04.jpg" alt="Construction site with workers in yellow helmets, titled Construction inside the image"></div><div class="app"><img src="assets/images/vision-application-05.jpg" alt="Medical imaging scanner, titled Healthcare inside the image"></div><div class="app"><img src="assets/images/vision-application-06.jpg" alt="Drone over farm fields, titled Agriculture inside the image"></div><div class="app"><img src="assets/images/vision-application-07.jpg" alt="Soldier operating a drone, titled Military inside the image"></div><div class="app"><img src="assets/images/vision-application-08.jpg" alt="Robotic arms on a factory line, titled Industry inside the image"></div><div class="app"><img src="assets/images/vision-application-09.jpg" alt="Self-driving car with LiDAR, titled Automotive inside the image"></div><div class="app"><img src="assets/images/vision-application-10.jpg" alt="A man speaking on a video call on a monitor, titled Automated Lip Reading inside the image"></div></div></section>


<div class="botnav" aria-label="التنقل بين الأجزاء">
 <span></span>
 <button data-sub="cv-s2">التالي: Lecture 2: Image ›</button>
</div>
</div>

<div class="sp" id="cv-s2" hidden>
 <div class="call"><b>Image</b>: a 2D representation of the 3D world, captured by a sensor.</div>
 <section class="block"><h3>Types of Images</h3>
 <div class="cards">
  <div class="card"><h5>1. Grayscale Images</h5><svg class="fg big" viewBox="0 0 180 180" role="img" aria-label="Grayscale pixel values"><rect x="0" y="0" width="30" height="30" fill="rgb(12,12,12)"/><text x="15" y="19" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">12</text><rect x="30" y="0" width="30" height="30" fill="rgb(40,40,40)"/><text x="45" y="19" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">40</text><rect x="60" y="0" width="30" height="30" fill="rgb(70,70,70)"/><text x="75" y="19" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">70</text><rect x="90" y="0" width="30" height="30" fill="rgb(100,100,100)"/><text x="105" y="19" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">100</text><rect x="120" y="0" width="30" height="30" fill="rgb(130,130,130)"/><text x="135" y="19" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">130</text><rect x="150" y="0" width="30" height="30" fill="rgb(160,160,160)"/><text x="165" y="19" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">160</text><rect x="0" y="30" width="30" height="30" fill="rgb(35,35,35)"/><text x="15" y="49" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">35</text><rect x="30" y="30" width="30" height="30" fill="rgb(66,66,66)"/><text x="45" y="49" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">66</text><rect x="60" y="30" width="30" height="30" fill="rgb(98,98,98)"/><text x="75" y="49" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">98</text><rect x="90" y="30" width="30" height="30" fill="rgb(130,130,130)"/><text x="105" y="49" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">130</text><rect x="120" y="30" width="30" height="30" fill="rgb(160,160,160)"/><text x="135" y="49" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">160</text><rect x="150" y="30" width="30" height="30" fill="rgb(190,190,190)"/><text x="165" y="49" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">190</text><rect x="0" y="60" width="30" height="30" fill="rgb(60,60,60)"/><text x="15" y="79" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">60</text><rect x="30" y="60" width="30" height="30" fill="rgb(92,92,92)"/><text x="45" y="79" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">92</text><rect x="60" y="60" width="30" height="30" fill="rgb(124,124,124)"/><text x="75" y="79" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">124</text><rect x="90" y="60" width="30" height="30" fill="rgb(156,156,156)"/><text x="105" y="79" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">156</text><rect x="120" y="60" width="30" height="30" fill="rgb(188,188,188)"/><text x="135" y="79" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">188</text><rect x="150" y="60" width="30" height="30" fill="rgb(215,215,215)"/><text x="165" y="79" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">215</text><rect x="0" y="90" width="30" height="30" fill="rgb(88,88,88)"/><text x="15" y="109" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">88</text><rect x="30" y="90" width="30" height="30" fill="rgb(120,120,120)"/><text x="45" y="109" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">120</text><rect x="60" y="90" width="30" height="30" fill="rgb(152,152,152)"/><text x="75" y="109" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">152</text><rect x="90" y="90" width="30" height="30" fill="rgb(184,184,184)"/><text x="105" y="109" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">184</text><rect x="120" y="90" width="30" height="30" fill="rgb(214,214,214)"/><text x="135" y="109" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">214</text><rect x="150" y="90" width="30" height="30" fill="rgb(240,240,240)"/><text x="165" y="109" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">240</text><rect x="0" y="120" width="30" height="30" fill="rgb(116,116,116)"/><text x="15" y="139" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#fff">116</text><rect x="30" y="120" width="30" height="30" fill="rgb(148,148,148)"/><text x="45" y="139" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">148</text><rect x="60" y="120" width="30" height="30" fill="rgb(180,180,180)"/><text x="75" y="139" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">180</text><rect x="90" y="120" width="30" height="30" fill="rgb(212,212,212)"/><text x="105" y="139" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">212</text><rect x="120" y="120" width="30" height="30" fill="rgb(240,240,240)"/><text x="135" y="139" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">240</text><rect x="150" y="120" width="30" height="30" fill="rgb(255,255,255)"/><text x="165" y="139" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">255</text><rect x="0" y="150" width="30" height="30" fill="rgb(144,144,144)"/><text x="15" y="169" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">144</text><rect x="30" y="150" width="30" height="30" fill="rgb(176,176,176)"/><text x="45" y="169" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">176</text><rect x="60" y="150" width="30" height="30" fill="rgb(208,208,208)"/><text x="75" y="169" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">208</text><rect x="90" y="150" width="30" height="30" fill="rgb(238,238,238)"/><text x="105" y="169" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">238</text><rect x="120" y="150" width="30" height="30" fill="rgb(255,255,255)"/><text x="135" y="169" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">255</text><rect x="150" y="150" width="30" height="30" fill="rgb(255,255,255)"/><text x="165" y="169" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#000">255</text></svg><div class="bar g"></div><div class="ends"><span>0</span><span>255</span></div><p>Each pixel is represented by an 8-bit (1-byte) ranging from 0 to 255.</p></div>
 </div>
 <h4>2. Color Images</h4>
 <div class="cards">
  <div class="card"><h5>RGB (Red, Green, Blue)</h5><svg class="fg" viewBox="0 0 160 140" role="img" aria-label="RGB additive mixing"><rect width="160" height="140" fill="#000"/><g style="isolation:isolate"><circle cx="62" cy="52" r="38" fill="#f00" style="mix-blend-mode:screen"/><circle cx="98" cy="52" r="38" fill="#0f0" style="mix-blend-mode:screen"/><circle cx="80" cy="86" r="38" fill="#00f" style="mix-blend-mode:screen"/></g></svg><p>Uses additive color mixing by combining red, green, and blue with different intensities.</p></div>
  <div class="card"><h5>CMY (Cyan, Magenta, Yellow)</h5><svg class="fg" viewBox="0 0 160 140" role="img" aria-label="CMY subtractive mixing"><rect width="160" height="140" fill="#fff"/><g style="isolation:isolate"><circle cx="62" cy="52" r="38" fill="#0ff" style="mix-blend-mode:multiply"/><circle cx="98" cy="52" r="38" fill="#f0f" style="mix-blend-mode:multiply"/><circle cx="80" cy="86" r="38" fill="#ff0" style="mix-blend-mode:multiply"/></g></svg><p>Uses subtractive color mixing. Used in color printing.</p></div>
  <div class="card"><h5>HSV (Hue, Saturation, Value)</h5><div class="hsvrow"><div class="wheel" role="img" aria-label="Hue wheel"></div><div class="bars"><div>Saturation</div><div class="bar" style="background:linear-gradient(90deg,#808080,#f00)"></div><div>Value</div><div class="bar" style="background:linear-gradient(90deg,#000,#f00)"></div></div></div><p>Similar to how humans perceive colors.</p><ul><li><b>Hue</b>: Type of color (orange, cyan, blue).</li><li><b>Saturation</b>: Color purity.</li><li><b>Value</b>: Brightness.</li></ul></div>
 </div></section>
 <section class="block"><h3>Digital Image Processing</h3>
 <p>The use of computer algorithms and mathematical models to process and analyze digital images. Steps:</p>
 <div class="dgrid"><div class="dstep"><svg class="ill" viewBox="0 0 140 80" role="img" aria-hidden="true"><rect width="140" height="80" rx="8" fill="#0B1F3A"/><rect x="10" y="28" width="40" height="28" rx="5" fill="#2a4777"/><rect x="20" y="23" width="14" height="7" rx="2" fill="#2a4777"/><circle cx="30" cy="42" r="9" fill="#0B1F3A" stroke="#00C2D8" stroke-width="3"/><path d="M58 40h16m-6-6l6 6-6 6" stroke="#9fb4d3" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(84 20) scale(0.5)"><use href="#sc"/></g></svg><div class="tx2"><h5><span class="n2">1</span>Image Acquisition</h5><p>Capturing or importing an image into a computer.</p></div></div><div class="dstep"><svg class="ill" viewBox="0 0 140 80" role="img" aria-hidden="true"><rect width="140" height="80" rx="8" fill="#0B1F3A"/><g transform="translate(6 20) scale(0.5)"><use href="#sc"/><rect width="100" height="78" fill="#9fb4d3" opacity=".6"/></g><path d="M58 40h16m-6-6l6 6-6 6" stroke="#9fb4d3" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(84 20) scale(0.5)"><use href="#sc"/></g></svg><div class="tx2"><h5><span class="n2">2</span>Image Enhancement</h5><p>Improving image quality by increasing contrast and reducing noise.</p></div></div><div class="dstep"><svg class="ill" viewBox="0 0 140 80" role="img" aria-hidden="true"><rect width="140" height="80" rx="8" fill="#0B1F3A"/><g filter="url(#bl)"><g transform="translate(6 20) scale(0.5)"><use href="#sc"/><rect x="23" y="41" width="2" height="2" fill="#000" opacity=".75"/><rect x="90" y="36" width="2" height="2" fill="#fff" opacity=".75"/><rect x="59" y="69" width="2" height="2" fill="#000" opacity=".75"/><rect x="25" y="18" width="2" height="2" fill="#000" opacity=".75"/><rect x="53" y="42" width="2" height="2" fill="#000" opacity=".75"/><rect x="63" y="11" width="2" height="2" fill="#fff" opacity=".75"/><rect x="85" y="40" width="2" height="2" fill="#fff" opacity=".75"/><rect x="66" y="5" width="2" height="2" fill="#fff" opacity=".75"/><rect x="30" y="2" width="2" height="2" fill="#000" opacity=".75"/><rect x="46" y="55" width="2" height="2" fill="#000" opacity=".75"/><rect x="70" y="70" width="2" height="2" fill="#000" opacity=".75"/><rect x="71" y="44" width="2" height="2" fill="#fff" opacity=".75"/><rect x="86" y="7" width="2" height="2" fill="#fff" opacity=".75"/><rect x="48" y="20" width="2" height="2" fill="#000" opacity=".75"/><rect x="76" y="65" width="2" height="2" fill="#000" opacity=".75"/><rect x="50" y="29" width="2" height="2" fill="#000" opacity=".75"/><rect x="52" y="31" width="2" height="2" fill="#fff" opacity=".75"/><rect x="89" y="52" width="2" height="2" fill="#fff" opacity=".75"/><rect x="84" y="75" width="2" height="2" fill="#fff" opacity=".75"/><rect x="68" y="25" width="2" height="2" fill="#fff" opacity=".75"/><rect x="70" y="16" width="2" height="2" fill="#000" opacity=".75"/><rect x="28" y="5" width="2" height="2" fill="#000" opacity=".75"/><rect x="9" y="61" width="2" height="2" fill="#000" opacity=".75"/><rect x="88" y="2" width="2" height="2" fill="#000" opacity=".75"/><rect x="75" y="66" width="2" height="2" fill="#fff" opacity=".75"/><rect x="59" y="58" width="2" height="2" fill="#000" opacity=".75"/><rect x="70" y="25" width="2" height="2" fill="#000" opacity=".75"/><rect x="50" y="76" width="2" height="2" fill="#000" opacity=".75"/><rect x="1" y="8" width="2" height="2" fill="#fff" opacity=".75"/><rect x="93" y="74" width="2" height="2" fill="#000" opacity=".75"/><rect x="60" y="12" width="2" height="2" fill="#fff" opacity=".75"/><rect x="96" y="26" width="2" height="2" fill="#000" opacity=".75"/><rect x="94" y="68" width="2" height="2" fill="#000" opacity=".75"/><rect x="37" y="66" width="2" height="2" fill="#000" opacity=".75"/><rect x="63" y="45" width="2" height="2" fill="#fff" opacity=".75"/><rect x="61" y="71" width="2" height="2" fill="#000" opacity=".75"/><rect x="42" y="55" width="2" height="2" fill="#fff" opacity=".75"/><rect x="92" y="33" width="2" height="2" fill="#000" opacity=".75"/><rect x="51" y="42" width="2" height="2" fill="#fff" opacity=".75"/><rect x="77" y="75" width="2" height="2" fill="#000" opacity=".75"/><rect x="2" y="47" width="2" height="2" fill="#fff" opacity=".75"/><rect x="6" y="48" width="2" height="2" fill="#000" opacity=".75"/><rect x="35" y="70" width="2" height="2" fill="#000" opacity=".75"/><rect x="72" y="2" width="2" height="2" fill="#fff" opacity=".75"/><rect x="94" y="2" width="2" height="2" fill="#000" opacity=".75"/><rect x="25" y="35" width="2" height="2" fill="#000" opacity=".75"/><rect x="17" y="14" width="2" height="2" fill="#000" opacity=".75"/><rect x="83" y="20" width="2" height="2" fill="#000" opacity=".75"/><rect x="10" y="62" width="2" height="2" fill="#fff" opacity=".75"/><rect x="30" y="17" width="2" height="2" fill="#000" opacity=".75"/><rect x="23" y="14" width="2" height="2" fill="#000" opacity=".75"/><rect x="64" y="7" width="2" height="2" fill="#000" opacity=".75"/><rect x="93" y="51" width="2" height="2" fill="#fff" opacity=".75"/><rect x="43" y="65" width="2" height="2" fill="#fff" opacity=".75"/><rect x="8" y="56" width="2" height="2" fill="#fff" opacity=".75"/><rect x="87" y="34" width="2" height="2" fill="#fff" opacity=".75"/><rect x="77" y="3" width="2" height="2" fill="#fff" opacity=".75"/><rect x="31" y="64" width="2" height="2" fill="#fff" opacity=".75"/><rect x="85" y="26" width="2" height="2" fill="#fff" opacity=".75"/><rect x="79" y="26" width="2" height="2" fill="#fff" opacity=".75"/></g></g><path d="M58 40h16m-6-6l6 6-6 6" stroke="#9fb4d3" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(84 20) scale(0.5)"><use href="#sc"/></g></svg><div class="tx2"><h5><span class="n2">3</span>Image Restoration</h5><p>Removing image problems such as blurring, noise, and distortion.</p></div></div><div class="dstep"><svg class="ill" viewBox="0 0 140 80" role="img" aria-hidden="true"><rect width="140" height="80" rx="8" fill="#0B1F3A"/><g transform="translate(20 1) scale(1)"><use href="#sc"/><rect width="100" height="50" fill="#a855f7" opacity=".5"/><rect y="50" width="100" height="28" fill="#22C55E" opacity=".5"/><circle cx="30" cy="52" r="14" fill="#FFC400" opacity=".75"/><rect x="58" y="38" width="30" height="26" fill="#00C2D8" opacity=".75"/><path d="M0 50h100" stroke="#fff" stroke-width="1"/></g></svg><div class="tx2"><h5><span class="n2">4</span>Image Segmentation</h5><p>Dividing an image into regions, each representing an object or feature.</p></div></div><div class="dstep"><svg class="ill" viewBox="0 0 140 80" role="img" aria-hidden="true"><rect width="140" height="80" rx="8" fill="#0B1F3A"/><g transform="translate(6 20) scale(0.5)"><use href="#sc"/></g><path d="M58 40h16m-6-6l6 6-6 6" stroke="#9fb4d3" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="85" y="26" font-family="monospace" font-size="8" fill="#00C2D8">12  40  70</text><text x="85" y="37" font-family="monospace" font-size="8" fill="#00C2D8">35  66  98</text><text x="85" y="48" font-family="monospace" font-size="8" fill="#00C2D8">60  92 124</text><text x="85" y="59" font-family="monospace" font-size="8" fill="#00C2D8">88 120 152</text><path d="M80 18v46m0-46h4m-4 46h4M136 18v46m0-46h-4m4 46h-4" stroke="#9fb4d3" stroke-width="1.5" fill="none"/></svg><div class="tx2"><h5><span class="n2">5</span>Image Representation and Description</h5><p>Representing the image in a computer-readable form and describing its features.</p></div></div><div class="dstep"><svg class="ill" viewBox="0 0 140 80" role="img" aria-hidden="true"><rect width="140" height="80" rx="8" fill="#0B1F3A"/><g transform="translate(20 1) scale(1)"><use href="#sc"/><circle cx="30" cy="50" r="18" fill="none" stroke="#FFC400" stroke-width="3"/><path d="M43 63l14 12" stroke="#FFC400" stroke-width="4" stroke-linecap="round"/><rect x="60" y="36" width="32" height="30" fill="none" stroke="#FFC400" stroke-width="2.5"/><rect x="60" y="26" width="20" height="10" fill="#FFC400"/><text x="63" y="34" font-size="8" font-weight="700" fill="#0B1F3A" font-family="sans-serif">box</text></g></svg><div class="tx2"><h5><span class="n2">6</span>Image Analysis</h5><p>Extracting information from images, such as recognizing objects and detecting patterns.</p></div></div><div class="dstep"><svg class="ill" viewBox="0 0 140 80" role="img" aria-hidden="true"><rect width="140" height="80" rx="8" fill="#0B1F3A"/><g transform="translate(6 16) scale(0.6)"><use href="#sc"/></g><path d="M70 40h16m-6-6l6 6-6 6" stroke="#9fb4d3" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(96 28) scale(0.3)"><use href="#sc"/></g><text x="96" y="62" font-size="8" fill="#9fb4d3" font-family="sans-serif">smaller</text><path d="M126 10l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#FFC400"/></svg><div class="tx2"><h5><span class="n2">7</span>Image Synthesis, Compression</h5><p>Creating new images or reducing image size to save storage space.</p></div></div><div class="dstep"><div class="ph"><div class="tags"><span>Medical imaging</span><span>Remote sensing</span><span>Computer vision</span><span>Multimedia</span></div></div><div class="tx2"><h5><span class="n2">8</span>Applications</h5><p>Used in medical imaging, remote sensing, computer vision, and multimedia.</p></div></div></div></section>
 <section class="block"><h3>Key Terms</h3>
 <div class="cards c4">
  <div class="card"><h5>Pixel</h5><p>The smallest part of a digital image. Each pixel contains information about color, brightness, and position.</p></div>
  <div class="card"><h5>Resolution</h5><div class="fig"><figure><svg class="fg" viewBox="0 0 90 90" role="img" aria-hidden="true"><rect width="90" height="90" rx="8" fill="#0B1F3A"/><path d="M22.5 11.2h11.2v11.2h-11.2zM33.8 11.2h11.2v11.2h-11.2zM45.0 11.2h11.2v11.2h-11.2zM56.2 11.2h11.2v11.2h-11.2zM11.2 22.5h11.2v11.2h-11.2zM22.5 22.5h11.2v11.2h-11.2zM33.8 22.5h11.2v11.2h-11.2zM45.0 22.5h11.2v11.2h-11.2zM56.2 22.5h11.2v11.2h-11.2zM67.5 22.5h11.2v11.2h-11.2zM11.2 33.8h11.2v11.2h-11.2zM22.5 33.8h11.2v11.2h-11.2zM33.8 33.8h11.2v11.2h-11.2zM45.0 33.8h11.2v11.2h-11.2zM56.2 33.8h11.2v11.2h-11.2zM67.5 33.8h11.2v11.2h-11.2zM11.2 45.0h11.2v11.2h-11.2zM22.5 45.0h11.2v11.2h-11.2zM33.8 45.0h11.2v11.2h-11.2zM45.0 45.0h11.2v11.2h-11.2zM56.2 45.0h11.2v11.2h-11.2zM67.5 45.0h11.2v11.2h-11.2zM11.2 56.2h11.2v11.2h-11.2zM22.5 56.2h11.2v11.2h-11.2zM33.8 56.2h11.2v11.2h-11.2zM45.0 56.2h11.2v11.2h-11.2zM56.2 56.2h11.2v11.2h-11.2zM67.5 56.2h11.2v11.2h-11.2zM22.5 67.5h11.2v11.2h-11.2zM33.8 67.5h11.2v11.2h-11.2zM45.0 67.5h11.2v11.2h-11.2zM56.2 67.5h11.2v11.2h-11.2z" fill="#00C2D8"/></svg>low resolution</figure><figure><svg class="fg" viewBox="0 0 90 90" role="img" aria-hidden="true"><rect width="90" height="90" rx="8" fill="#0B1F3A"/><path d="M27.0 9.0h4.5v4.5h-4.5zM31.5 9.0h4.5v4.5h-4.5zM36.0 9.0h4.5v4.5h-4.5zM40.5 9.0h4.5v4.5h-4.5zM45.0 9.0h4.5v4.5h-4.5zM49.5 9.0h4.5v4.5h-4.5zM54.0 9.0h4.5v4.5h-4.5zM58.5 9.0h4.5v4.5h-4.5zM22.5 13.5h4.5v4.5h-4.5zM27.0 13.5h4.5v4.5h-4.5zM31.5 13.5h4.5v4.5h-4.5zM36.0 13.5h4.5v4.5h-4.5zM40.5 13.5h4.5v4.5h-4.5zM45.0 13.5h4.5v4.5h-4.5zM49.5 13.5h4.5v4.5h-4.5zM54.0 13.5h4.5v4.5h-4.5zM58.5 13.5h4.5v4.5h-4.5zM63.0 13.5h4.5v4.5h-4.5zM18.0 18.0h4.5v4.5h-4.5zM22.5 18.0h4.5v4.5h-4.5zM27.0 18.0h4.5v4.5h-4.5zM31.5 18.0h4.5v4.5h-4.5zM36.0 18.0h4.5v4.5h-4.5zM40.5 18.0h4.5v4.5h-4.5zM45.0 18.0h4.5v4.5h-4.5zM49.5 18.0h4.5v4.5h-4.5zM54.0 18.0h4.5v4.5h-4.5zM58.5 18.0h4.5v4.5h-4.5zM63.0 18.0h4.5v4.5h-4.5zM67.5 18.0h4.5v4.5h-4.5zM13.5 22.5h4.5v4.5h-4.5zM18.0 22.5h4.5v4.5h-4.5zM22.5 22.5h4.5v4.5h-4.5zM27.0 22.5h4.5v4.5h-4.5zM31.5 22.5h4.5v4.5h-4.5zM36.0 22.5h4.5v4.5h-4.5zM40.5 22.5h4.5v4.5h-4.5zM45.0 22.5h4.5v4.5h-4.5zM49.5 22.5h4.5v4.5h-4.5zM54.0 22.5h4.5v4.5h-4.5zM58.5 22.5h4.5v4.5h-4.5zM63.0 22.5h4.5v4.5h-4.5zM67.5 22.5h4.5v4.5h-4.5zM72.0 22.5h4.5v4.5h-4.5zM9.0 27.0h4.5v4.5h-4.5zM13.5 27.0h4.5v4.5h-4.5zM18.0 27.0h4.5v4.5h-4.5zM22.5 27.0h4.5v4.5h-4.5zM27.0 27.0h4.5v4.5h-4.5zM31.5 27.0h4.5v4.5h-4.5zM36.0 27.0h4.5v4.5h-4.5zM40.5 27.0h4.5v4.5h-4.5zM45.0 27.0h4.5v4.5h-4.5zM49.5 27.0h4.5v4.5h-4.5zM54.0 27.0h4.5v4.5h-4.5zM58.5 27.0h4.5v4.5h-4.5zM63.0 27.0h4.5v4.5h-4.5zM67.5 27.0h4.5v4.5h-4.5zM72.0 27.0h4.5v4.5h-4.5zM76.5 27.0h4.5v4.5h-4.5zM9.0 31.5h4.5v4.5h-4.5zM13.5 31.5h4.5v4.5h-4.5zM18.0 31.5h4.5v4.5h-4.5zM22.5 31.5h4.5v4.5h-4.5zM27.0 31.5h4.5v4.5h-4.5zM31.5 31.5h4.5v4.5h-4.5zM36.0 31.5h4.5v4.5h-4.5zM40.5 31.5h4.5v4.5h-4.5zM45.0 31.5h4.5v4.5h-4.5zM49.5 31.5h4.5v4.5h-4.5zM54.0 31.5h4.5v4.5h-4.5zM58.5 31.5h4.5v4.5h-4.5zM63.0 31.5h4.5v4.5h-4.5zM67.5 31.5h4.5v4.5h-4.5zM72.0 31.5h4.5v4.5h-4.5zM76.5 31.5h4.5v4.5h-4.5zM9.0 36.0h4.5v4.5h-4.5zM13.5 36.0h4.5v4.5h-4.5zM18.0 36.0h4.5v4.5h-4.5zM22.5 36.0h4.5v4.5h-4.5zM27.0 36.0h4.5v4.5h-4.5zM31.5 36.0h4.5v4.5h-4.5zM36.0 36.0h4.5v4.5h-4.5zM40.5 36.0h4.5v4.5h-4.5zM45.0 36.0h4.5v4.5h-4.5zM49.5 36.0h4.5v4.5h-4.5zM54.0 36.0h4.5v4.5h-4.5zM58.5 36.0h4.5v4.5h-4.5zM63.0 36.0h4.5v4.5h-4.5zM67.5 36.0h4.5v4.5h-4.5zM72.0 36.0h4.5v4.5h-4.5zM76.5 36.0h4.5v4.5h-4.5zM9.0 40.5h4.5v4.5h-4.5zM13.5 40.5h4.5v4.5h-4.5zM18.0 40.5h4.5v4.5h-4.5zM22.5 40.5h4.5v4.5h-4.5zM27.0 40.5h4.5v4.5h-4.5zM31.5 40.5h4.5v4.5h-4.5zM36.0 40.5h4.5v4.5h-4.5zM40.5 40.5h4.5v4.5h-4.5zM45.0 40.5h4.5v4.5h-4.5zM49.5 40.5h4.5v4.5h-4.5zM54.0 40.5h4.5v4.5h-4.5zM58.5 40.5h4.5v4.5h-4.5zM63.0 40.5h4.5v4.5h-4.5zM67.5 40.5h4.5v4.5h-4.5zM72.0 40.5h4.5v4.5h-4.5zM76.5 40.5h4.5v4.5h-4.5zM9.0 45.0h4.5v4.5h-4.5zM13.5 45.0h4.5v4.5h-4.5zM18.0 45.0h4.5v4.5h-4.5zM22.5 45.0h4.5v4.5h-4.5zM27.0 45.0h4.5v4.5h-4.5zM31.5 45.0h4.5v4.5h-4.5zM36.0 45.0h4.5v4.5h-4.5zM40.5 45.0h4.5v4.5h-4.5zM45.0 45.0h4.5v4.5h-4.5zM49.5 45.0h4.5v4.5h-4.5zM54.0 45.0h4.5v4.5h-4.5zM58.5 45.0h4.5v4.5h-4.5zM63.0 45.0h4.5v4.5h-4.5zM67.5 45.0h4.5v4.5h-4.5zM72.0 45.0h4.5v4.5h-4.5zM76.5 45.0h4.5v4.5h-4.5zM9.0 49.5h4.5v4.5h-4.5zM13.5 49.5h4.5v4.5h-4.5zM18.0 49.5h4.5v4.5h-4.5zM22.5 49.5h4.5v4.5h-4.5zM27.0 49.5h4.5v4.5h-4.5zM31.5 49.5h4.5v4.5h-4.5zM36.0 49.5h4.5v4.5h-4.5zM40.5 49.5h4.5v4.5h-4.5zM45.0 49.5h4.5v4.5h-4.5zM49.5 49.5h4.5v4.5h-4.5zM54.0 49.5h4.5v4.5h-4.5zM58.5 49.5h4.5v4.5h-4.5zM63.0 49.5h4.5v4.5h-4.5zM67.5 49.5h4.5v4.5h-4.5zM72.0 49.5h4.5v4.5h-4.5zM76.5 49.5h4.5v4.5h-4.5zM9.0 54.0h4.5v4.5h-4.5zM13.5 54.0h4.5v4.5h-4.5zM18.0 54.0h4.5v4.5h-4.5zM22.5 54.0h4.5v4.5h-4.5zM27.0 54.0h4.5v4.5h-4.5zM31.5 54.0h4.5v4.5h-4.5zM36.0 54.0h4.5v4.5h-4.5zM40.5 54.0h4.5v4.5h-4.5zM45.0 54.0h4.5v4.5h-4.5zM49.5 54.0h4.5v4.5h-4.5zM54.0 54.0h4.5v4.5h-4.5zM58.5 54.0h4.5v4.5h-4.5zM63.0 54.0h4.5v4.5h-4.5zM67.5 54.0h4.5v4.5h-4.5zM72.0 54.0h4.5v4.5h-4.5zM76.5 54.0h4.5v4.5h-4.5zM9.0 58.5h4.5v4.5h-4.5zM13.5 58.5h4.5v4.5h-4.5zM18.0 58.5h4.5v4.5h-4.5zM22.5 58.5h4.5v4.5h-4.5zM27.0 58.5h4.5v4.5h-4.5zM31.5 58.5h4.5v4.5h-4.5zM36.0 58.5h4.5v4.5h-4.5zM40.5 58.5h4.5v4.5h-4.5zM45.0 58.5h4.5v4.5h-4.5zM49.5 58.5h4.5v4.5h-4.5zM54.0 58.5h4.5v4.5h-4.5zM58.5 58.5h4.5v4.5h-4.5zM63.0 58.5h4.5v4.5h-4.5zM67.5 58.5h4.5v4.5h-4.5zM72.0 58.5h4.5v4.5h-4.5zM76.5 58.5h4.5v4.5h-4.5zM13.5 63.0h4.5v4.5h-4.5zM18.0 63.0h4.5v4.5h-4.5zM22.5 63.0h4.5v4.5h-4.5zM27.0 63.0h4.5v4.5h-4.5zM31.5 63.0h4.5v4.5h-4.5zM36.0 63.0h4.5v4.5h-4.5zM40.5 63.0h4.5v4.5h-4.5zM45.0 63.0h4.5v4.5h-4.5zM49.5 63.0h4.5v4.5h-4.5zM54.0 63.0h4.5v4.5h-4.5zM58.5 63.0h4.5v4.5h-4.5zM63.0 63.0h4.5v4.5h-4.5zM67.5 63.0h4.5v4.5h-4.5zM72.0 63.0h4.5v4.5h-4.5zM18.0 67.5h4.5v4.5h-4.5zM22.5 67.5h4.5v4.5h-4.5zM27.0 67.5h4.5v4.5h-4.5zM31.5 67.5h4.5v4.5h-4.5zM36.0 67.5h4.5v4.5h-4.5zM40.5 67.5h4.5v4.5h-4.5zM45.0 67.5h4.5v4.5h-4.5zM49.5 67.5h4.5v4.5h-4.5zM54.0 67.5h4.5v4.5h-4.5zM58.5 67.5h4.5v4.5h-4.5zM63.0 67.5h4.5v4.5h-4.5zM67.5 67.5h4.5v4.5h-4.5zM22.5 72.0h4.5v4.5h-4.5zM27.0 72.0h4.5v4.5h-4.5zM31.5 72.0h4.5v4.5h-4.5zM36.0 72.0h4.5v4.5h-4.5zM40.5 72.0h4.5v4.5h-4.5zM45.0 72.0h4.5v4.5h-4.5zM49.5 72.0h4.5v4.5h-4.5zM54.0 72.0h4.5v4.5h-4.5zM58.5 72.0h4.5v4.5h-4.5zM63.0 72.0h4.5v4.5h-4.5zM27.0 76.5h4.5v4.5h-4.5zM31.5 76.5h4.5v4.5h-4.5zM36.0 76.5h4.5v4.5h-4.5zM40.5 76.5h4.5v4.5h-4.5zM45.0 76.5h4.5v4.5h-4.5zM49.5 76.5h4.5v4.5h-4.5zM54.0 76.5h4.5v4.5h-4.5zM58.5 76.5h4.5v4.5h-4.5z" fill="#00C2D8"/></svg>high resolution</figure></div><p>The number of pixels in a digital image, measured by width × height. Higher resolution provides more image detail.</p></div>
  <div class="card"><h5>Pixel Density</h5><p>The number of pixels per inch (PPI) on a screen. Higher pixel density makes images sharper and clearer.</p></div>
  <div class="card"><h5>Color Depth (Bit Depth)</h5><div class="shades"><span><i style="background:rgb(0,0,0)"></i><i style="background:rgb(255,255,255)"></i></span>1-bit: 2 shades</div><div class="shades"><span><i style="background:rgb(0,0,0)"></i><i style="background:rgb(85,85,85)"></i><i style="background:rgb(170,170,170)"></i><i style="background:rgb(255,255,255)"></i></span>2-bit: 4 shades</div><div class="shades"><span><i style="background:rgb(0,0,0)"></i><i style="background:rgb(36,36,36)"></i><i style="background:rgb(73,73,73)"></i><i style="background:rgb(109,109,109)"></i><i style="background:rgb(146,146,146)"></i><i style="background:rgb(182,182,182)"></i><i style="background:rgb(219,219,219)"></i><i style="background:rgb(255,255,255)"></i></span>3-bit: 8 shades</div><p>The number of bits used to represent the color of one pixel. It determines the number of colors an image can display.</p></div>
 </div>
 <h4>Raster vs Vector graphics</h4>
 <div class="tw"><table class="cmp"><tr><th>Raster graphics</th><th>Vector graphics</th></tr><tr><td><div class="fig"><figure><svg class="fg" viewBox="0 0 90 90" role="img" aria-hidden="true"><rect width="90" height="90" rx="8" fill="#0B1F3A"/><path d="M30.0 7.5h7.5v7.5h-7.5zM37.5 7.5h7.5v7.5h-7.5zM45.0 7.5h7.5v7.5h-7.5zM52.5 7.5h7.5v7.5h-7.5zM15.0 15.0h7.5v7.5h-7.5zM22.5 15.0h7.5v7.5h-7.5zM30.0 15.0h7.5v7.5h-7.5zM37.5 15.0h7.5v7.5h-7.5zM45.0 15.0h7.5v7.5h-7.5zM52.5 15.0h7.5v7.5h-7.5zM60.0 15.0h7.5v7.5h-7.5zM67.5 15.0h7.5v7.5h-7.5zM15.0 22.5h7.5v7.5h-7.5zM22.5 22.5h7.5v7.5h-7.5zM30.0 22.5h7.5v7.5h-7.5zM37.5 22.5h7.5v7.5h-7.5zM45.0 22.5h7.5v7.5h-7.5zM52.5 22.5h7.5v7.5h-7.5zM60.0 22.5h7.5v7.5h-7.5zM67.5 22.5h7.5v7.5h-7.5zM7.5 30.0h7.5v7.5h-7.5zM15.0 30.0h7.5v7.5h-7.5zM22.5 30.0h7.5v7.5h-7.5zM30.0 30.0h7.5v7.5h-7.5zM37.5 30.0h7.5v7.5h-7.5zM45.0 30.0h7.5v7.5h-7.5zM52.5 30.0h7.5v7.5h-7.5zM60.0 30.0h7.5v7.5h-7.5zM67.5 30.0h7.5v7.5h-7.5zM75.0 30.0h7.5v7.5h-7.5zM7.5 37.5h7.5v7.5h-7.5zM15.0 37.5h7.5v7.5h-7.5zM22.5 37.5h7.5v7.5h-7.5zM30.0 37.5h7.5v7.5h-7.5zM37.5 37.5h7.5v7.5h-7.5zM45.0 37.5h7.5v7.5h-7.5zM52.5 37.5h7.5v7.5h-7.5zM60.0 37.5h7.5v7.5h-7.5zM67.5 37.5h7.5v7.5h-7.5zM75.0 37.5h7.5v7.5h-7.5zM7.5 45.0h7.5v7.5h-7.5zM15.0 45.0h7.5v7.5h-7.5zM22.5 45.0h7.5v7.5h-7.5zM30.0 45.0h7.5v7.5h-7.5zM37.5 45.0h7.5v7.5h-7.5zM45.0 45.0h7.5v7.5h-7.5zM52.5 45.0h7.5v7.5h-7.5zM60.0 45.0h7.5v7.5h-7.5zM67.5 45.0h7.5v7.5h-7.5zM75.0 45.0h7.5v7.5h-7.5zM7.5 52.5h7.5v7.5h-7.5zM15.0 52.5h7.5v7.5h-7.5zM22.5 52.5h7.5v7.5h-7.5zM30.0 52.5h7.5v7.5h-7.5zM37.5 52.5h7.5v7.5h-7.5zM45.0 52.5h7.5v7.5h-7.5zM52.5 52.5h7.5v7.5h-7.5zM60.0 52.5h7.5v7.5h-7.5zM67.5 52.5h7.5v7.5h-7.5zM75.0 52.5h7.5v7.5h-7.5zM15.0 60.0h7.5v7.5h-7.5zM22.5 60.0h7.5v7.5h-7.5zM30.0 60.0h7.5v7.5h-7.5zM37.5 60.0h7.5v7.5h-7.5zM45.0 60.0h7.5v7.5h-7.5zM52.5 60.0h7.5v7.5h-7.5zM60.0 60.0h7.5v7.5h-7.5zM67.5 60.0h7.5v7.5h-7.5zM15.0 67.5h7.5v7.5h-7.5zM22.5 67.5h7.5v7.5h-7.5zM30.0 67.5h7.5v7.5h-7.5zM37.5 67.5h7.5v7.5h-7.5zM45.0 67.5h7.5v7.5h-7.5zM52.5 67.5h7.5v7.5h-7.5zM60.0 67.5h7.5v7.5h-7.5zM67.5 67.5h7.5v7.5h-7.5zM30.0 75.0h7.5v7.5h-7.5zM37.5 75.0h7.5v7.5h-7.5zM45.0 75.0h7.5v7.5h-7.5zM52.5 75.0h7.5v7.5h-7.5z" fill="#00C2D8"/></svg>enlarged</figure></div>Made of pixels, quality decreases when enlarged.</td><td><div class="fig"><figure><svg class="fg" viewBox="0 0 90 90" role="img" aria-hidden="true"><rect width="90" height="90" rx="8" fill="#0B1F3A"/><circle cx="45.0" cy="45.0" r="37.8" fill="#00C2D8"/></svg>enlarged</figure></div>Use mathematical equations to create shapes; can be enlarged without losing quality.</td></tr></table></div>
 </section>


<div class="botnav" aria-label="التنقل بين الأجزاء">
 <button data-sub="cv-s1">‹ السابق: Lecture 1: Computer Vision</button>
 <button data-sub="cv-s3">التالي: Problem 3: Confusion Matrix ›</button>
</div>
</div>

<div class="sp" id="cv-p1" hidden>
 <div class="call">In this problem, a point <b>P(x, y)</b> goes through a sequence of <b>geometric transformations</b>. The transformations are applied <b>one by one, in the given order</b>: the output of each step is the input of the next step.</div>
 <section class="block"><h3>Important formulas: Geometric transformations of a point</h3>
  <div class="fcs">
   <div class="fcard"><h5>Translation</h5><div class="eq">(x′, y′) = (x + Δx, y + Δy)</div><ul><li>Δx, Δy = the shift added to the coordinates.</li></ul></div>
   <div class="fcard"><h5>Scaling</h5><div class="eq">(x′, y′) = (x·S, y·S)</div><ul><li>S = the scale factor: S &gt; 1 enlarges, S &lt; 1 shrinks.</li></ul></div>
   <div class="fcard"><h5>Rotation by θ</h5><div class="eq sm">x′ = x·cosθ − y·sinθ</div><div class="eq sm">y′ = x·sinθ + y·cosθ</div><ul><li>Rotation around the origin (0, 0), counter-clockwise.</li></ul></div>
   <div class="fcard"><h5>Reflection across the x-axis</h5><div class="eq">(x, y) → (x, −y)</div><ul><li>The sign of y flips; x stays the same.</li></ul></div>
   <div class="fcard"><h5>Reflection across the y-axis</h5><div class="eq">(x, y) → (−x, y)</div><ul><li>The sign of x flips; y stays the same.</li></ul></div>
  </div>
  <div class="call">⚠ <b>Order matters:</b> applying the same transformations in a different order gives a different final point, so always follow the order given in the question.</div>
 </section>
 <section class="block"><h3>Solved Example 1: P(3, 5)</h3>
  <p><b>Question:</b> A point P(3, 5) undergoes the following operations in order: 1) Translation (Δx = 50, Δy = 30), 2) Scaling by factor 1.2, 3) Reflection across the x-axis. Find the final point P′.</p>
  <h4>Step 1: Translation (Δx = 50, Δy = 30)</h4>
  <div class="fm">(3 + 50, 5 + 30) = (53, 35)</div>
  <h4>Step 2: Scaling by 1.2</h4>
  <div class="fm">(53 × 1.2, 35 × 1.2) = (63.6, 42)</div>
  <h4>Step 3: Reflection across the x-axis</h4>
  <div class="fm">(63.6, 42) → (63.6, −42)</div>
  <div class="tiles">
   <div class="tile"><span>Start P</span><strong>(3, 5)</strong></div>
   <div class="tile"><span>After translation</span><strong>(53, 35)</strong></div>
   <div class="tile"><span>After scaling</span><strong>(63.6, 42)</strong></div>
   <div class="tile"><span>Final P′ (after reflection)</span><strong>(63.6, −42)</strong></div>
  </div>
  <div class="call ans"><b>Final answer:</b> <span class="res">P′ = (63.6, −42)</span>. The reflection across the x-axis flipped the point below the x-axis, so y became negative while x stayed the same.</div>
 </section>
 <section class="block"><h3>Solved Example 2: P(5, 7)</h3>
  <p><b>Question:</b> A point P(5, 7) undergoes the following operations in order: 1) Translation (Δx = 50, Δy = 30), 2) Rotation by 45°, 3) Scaling by factor 1.2, 4) Reflection across the y-axis. Find the final point P′.</p>
  <h4>Step 1: Translation (Δx = 50, Δy = 30)</h4>
  <div class="fm">(5 + 50, 7 + 30) = (55, 37)</div>
  <h4>Step 2: Rotation by 45°</h4>
  <div class="fm">x′ = x·cos45° − y·sin45° = (55 − 37) × 0.7071 = 12.73
y′ = x·sin45° + y·cos45° = (55 + 37) × 0.7071 = 65.05</div>
  <p>Note: cos45° = sin45° ≈ 0.7071, so here x′ = (x − y) × cos45° and y′ = (x + y) × cos45°.</p>
  <h4>Step 3: Scaling by 1.2</h4>
  <div class="fm">(12.73 × 1.2, 65.05 × 1.2) = (15.27, 78.06)</div>
  <h4>Step 4: Reflection across the y-axis</h4>
  <div class="fm">(15.27, 78.06) → (−15.27, 78.06)</div>
  <div class="tiles">
   <div class="tile"><span>Start P</span><strong>(5, 7)</strong></div>
   <div class="tile"><span>After translation</span><strong>(55, 37)</strong></div>
   <div class="tile"><span>After rotation 45°</span><strong>(12.73, 65.05)</strong></div>
   <div class="tile"><span>After scaling</span><strong>(15.27, 78.06)</strong></div>
   <div class="tile"><span>Final P′ (after reflection)</span><strong>(−15.27, 78.06)</strong></div>
  </div>
  <div class="call ans"><b>Final answer:</b> <span class="res">P′ ≈ (−15.27, 78.06)</span>. The last step, reflection across the y-axis, flipped the sign of x only.</div>
 </section>


<div class="botnav" aria-label="التنقل بين الأجزاء">
 <button data-sub="cv-p2">‹ السابق: Problem 2: Lab 1 &amp; 2</button>
 <span></span>
</div>
</div>

<div class="sp" id="cv-p2" hidden>
 <div class="call">In this problem (Lab 1 &amp; 2 — Chapter 3), an image is handled as <b>numbers in matrices</b>: every operation on the image is a mathematical operation on its matrix. The part taken here goes up to <b>Image Enhancement</b>.</div>
 <section class="block"><h3>Important formulas: Images as matrices</h3>
  <div class="tw"><table class="d fit">
   <colgroup><col style="width:25%"><col style="width:37%"><col style="width:38%"></colgroup>
   <tr><th>Image type</th><th>Representation</th><th>Pixel values</th></tr>
   <tr><td>Grayscale</td><td>2D matrix (height × width)</td><td>One value per pixel: 0 = black … 255 = white</td></tr>
   <tr><td>Color (RGB)</td><td>3D tensor (height × width × 3)</td><td>Three values per pixel: Red, Green and Blue channels</td></tr>
  </table></div>
  <div class="fcs">
   <div class="fcard"><h5>Matrix multiplication</h5><div class="eq sm">cᵢⱼ = (row i of A) · (column j of B)</div><ul><li>Each element of C is the dot product of a row of A and a column of B.</li><li>A (m×n) can multiply B (n×p) only; the result is (m×p).</li></ul></div>
   <div class="fcard"><h5>Transpose</h5><div class="eq sm">Rows become columns: aᵢⱼ → aⱼᵢ</div><ul><li>An (m×n) matrix becomes (n×m) after transposing.</li></ul></div>
   <div class="fcard"><h5>Inverse of a 2×2 matrix</h5><div class="eq">A⁻¹ = [[1|ad − bc]] × <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>d</i><i>−b</i><i>−c</i><i>a</i></span></div><ul><li>For A = <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>a</i><i>b</i><i>c</i><i>d</i></span>; the value (ad − bc) is the <i>determinant</i>.</li><li>The inverse exists only if the determinant ≠ 0.</li><li>Check: A × A⁻¹ = I (the identity matrix).</li></ul></div>
   <div class="fcard"><h5>Brightness &amp; contrast</h5><div class="eq">g(i, j) = α · f(i, j) + β</div><ul><li>α = contrast (scaling): α &gt; 1 increases the contrast.</li><li>β = brightness (shift): β &gt; 0 makes the image brighter.</li></ul></div>
   <div class="fcard"><h5>Negative image</h5><div class="eq">g(x, y) = 255 − f(x, y)</div><ul><li>Every pixel is replaced by (255 − its value): dark becomes bright and bright becomes dark.</li></ul></div>
   <div class="fcard"><h5>Mean filter (noise reduction)</h5><div class="eq sm">New center = (sum of the 3×3 patch) ÷ 9</div><ul><li>The center pixel is replaced by the average of itself and its 8 neighbours, which smooths out noise.</li></ul></div>
  </div>
 </section>
 <section class="block"><h3>Solved Example 1: Matrix multiplication</h3>
  <p><b>Question:</b> Given A = <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>2</i><i>1</i><i>1</i><i>2</i></span> and B = <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>3</i><i>0</i><i>1</i><i>2</i></span>, find C = A × B.</p>
  <h4>Step 1: Multiply each row of A by each column of B</h4>
  <div class="fm">c₁₁ = 2×3 + 1×1 = 7
c₁₂ = 2×0 + 1×2 = 2
c₂₁ = 1×3 + 2×1 = 5
c₂₂ = 1×0 + 2×2 = 4</div>
  <div class="tiles">
   <div class="tile"><span>c₁₁ = 2×3 + 1×1</span><strong>7</strong></div>
   <div class="tile"><span>c₁₂ = 2×0 + 1×2</span><strong>2</strong></div>
   <div class="tile"><span>c₂₁ = 1×3 + 2×1</span><strong>5</strong></div>
   <div class="tile"><span>c₂₂ = 1×0 + 2×2</span><strong>4</strong></div>
  </div>
  <div class="call ans"><b>Final answer:</b> <span class="res">C = <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>7</i><i>2</i><i>5</i><i>4</i></span></span>. Matrix multiplication is <b>not</b> element-by-element: each element combines a full row with a full column.</div>
 </section>
 <section class="block"><h3>Solved Example 2: Transpose and inverse</h3>
  <p><b>Question (a):</b> Find the transpose of A = <span class="mx" style="grid-template-columns:repeat(3,auto)"><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i></span>.</p>
  <h4>Step 1: Turn the rows into columns</h4>
  <div class="fm">A is 2×3 (2 rows, 3 columns)
Aᵀ = <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>1</i><i>4</i><i>2</i><i>5</i><i>3</i><i>6</i></span>  →  3×2</div>
  <p><b>Question (b):</b> Find the inverse of A = <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>4</i><i>7</i><i>2</i><i>6</i></span>.</p>
  <h4>Step 2: Calculate the determinant</h4>
  <div class="fm">det = ad − bc = (4 × 6) − (7 × 2) = 24 − 14 = 10</div>
  <h4>Step 3: Apply the inverse formula</h4>
  <div class="fm">A⁻¹ = (1/10) × <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>6</i><i>−7</i><i>−2</i><i>4</i></span> = <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>0.6</i><i>−0.7</i><i>−0.2</i><i>0.4</i></span></div>
  <h4>Step 4: Verify — A × A⁻¹ must equal I</h4>
  <div class="fm"><span class="mx" style="grid-template-columns:repeat(2,auto)"><i>4</i><i>7</i><i>2</i><i>6</i></span> × <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>0.6</i><i>−0.7</i><i>−0.2</i><i>0.4</i></span> = <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>1</i><i>0</i><i>0</i><i>1</i></span> = I ✓</div>
  <div class="tiles">
   <div class="tile"><span>Transpose Aᵀ</span><div class="eq sm"><span class="mx sm" style="grid-template-columns:repeat(2,auto)"><i>1</i><i>4</i><i>2</i><i>5</i><i>3</i><i>6</i></span></div><strong>3×2</strong></div>
   <div class="tile"><span>Determinant</span><strong>10</strong></div>
   <div class="tile"><span>Inverse A⁻¹</span><div class="eq sm"><span class="mx sm" style="grid-template-columns:repeat(2,auto)"><i>0.6</i><i>−0.7</i><i>−0.2</i><i>0.4</i></span></div><strong>A × A⁻¹ = I ✓</strong></div>
  </div>
  <div class="call ans"><b>Final answer:</b> <span class="res">Aᵀ = <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>1</i><i>4</i><i>2</i><i>5</i><i>3</i><i>6</i></span> and A⁻¹ = <span class="mx" style="grid-template-columns:repeat(2,auto)"><i>0.6</i><i>−0.7</i><i>−0.2</i><i>0.4</i></span></span>. Always verify an inverse by multiplying it back: the result must be the identity matrix.</div>
 </section>
 <section class="block"><h3>Solved Example 3: Brightness and contrast</h3>
  <p><b>Question:</b> Using g(i, j) = α · f(i, j) + β, apply contrast α = 1.5 and brightness β = 50 to the pixel f = 100. What is the new pixel value?</p>
  <h4>Step 1: Substitute in the formula</h4>
  <div class="fm">g = 1.5 × 100 + 50 = 150 + 50 = 200</div>
  <div class="tiles">
   <div class="tile"><span>Original pixel f</span><strong>100</strong></div>
   <div class="tile"><span>After ×1.5 contrast</span><strong>150</strong></div>
   <div class="tile"><span>After +50 brightness → g</span><strong>200</strong></div>
  </div>
  <div class="call"><b>Interpretation:</b> the pixel became much brighter (100 → 200): α stretched its value, then β shifted it up. Pixel values are always kept inside the range 0–255.</div>
 </section>
 <section class="block"><h3>Solved Example 4: Sharpening filter</h3>
  <p><b>Question:</b> Apply the sharpening kernel <span class="mx" style="grid-template-columns:repeat(3,auto)"><i>0</i><i>−1</i><i>0</i><i>−1</i><i>5</i><i>−1</i><i>0</i><i>−1</i><i>0</i></span> to the patch <span class="mx" style="grid-template-columns:repeat(3,auto)"><i>10</i><i>20</i><i>30</i><i>40</i><i>50</i><i>60</i><i>70</i><i>80</i><i>90</i></span>. Find the new center value.</p>
  <h4>Step 1: Multiply each kernel value by the pixel under it, then add them all</h4>
  <div class="fm">0×10 + (−1)×20 + 0×30 + (−1)×40 + 5×50 + (−1)×60 + 0×70 + (−1)×80 + 0×90
= 0 − 20 + 0 − 40 + 250 − 60 + 0 − 80 + 0 = 50</div>
  <div class="tiles">
   <div class="tile"><span>Center ×5</span><strong>250</strong></div>
   <div class="tile"><span>Neighbours ×(−1)</span><strong>−200</strong></div>
   <div class="tile"><span>New center value</span><strong>50</strong></div>
  </div>
  <div class="call"><b>Interpretation:</b> the kernel multiplies the center by 5 and subtracts its direct neighbours, which increases the difference between the center and its surroundings — this is what makes edges look sharper.</div>
 </section>
 <section class="block"><h3>Solved Example 5: Negative image</h3>
  <p><b>Question:</b> A pixel has the value f = 120. What is its value in the negative image?</p>
  <h4>Step 1: Apply g = 255 − f</h4>
  <div class="fm">g = 255 − 120 = 135</div>
  <div class="tiles">
   <div class="tile"><span>Original f</span><strong>120</strong></div>
   <div class="tile"><span>Negative g = 255 − 120</span><strong>135</strong></div>
  </div>
  <div class="call"><b>Interpretation:</b> values below the middle become values above it and vice versa, so dark areas turn bright and bright areas turn dark.</div>
 </section>
 <section class="block"><h3>Practice: Noise reduction (mean filter)</h3>
  <p><b>Question:</b> Apply a 3×3 mean filter to the patch <span class="mx" style="grid-template-columns:repeat(3,auto)"><i>10</i><i>20</i><i>30</i><i>40</i><i>50</i><i>60</i><i>70</i><i>80</i><i>90</i></span>. Find the new center value.</p>
  <h4>Step 1: Add all 9 values and divide by 9</h4>
  <div class="fm">Sum = 10 + 20 + 30 + 40 + 50 + 60 + 70 + 80 + 90 = 450
New center = 450 ÷ 9 = 50</div>
  <div class="tiles">
   <div class="tile"><span>Sum of the 3×3 patch</span><strong>450</strong></div>
   <div class="tile"><span>New center = 450 ÷ 9</span><strong>50</strong></div>
  </div>
  <div class="call"><b>Interpretation:</b> replacing the center by the average of its neighbourhood smooths sudden changes in pixel values, which is how the mean filter reduces noise (at the cost of some sharpness).</div>
 </section>


<div class="botnav" aria-label="التنقل بين الأجزاء">
 <button data-sub="cv-s3">‹ السابق: Problem 3: Confusion Matrix</button>
 <button data-sub="cv-p1">التالي: Problem 1: Sheet 1 ›</button>
</div>
</div>

<div class="sp" id="cv-s3" hidden>
<div class="call">A <b>confusion matrix</b> is a table used to evaluate a classification model by comparing the actual classes with the predicted classes.</div>
 <section class="block"><h3>Important formulas: Binary classification</h3>
 <p>For binary classification, the four possible outcomes are:</p>
 <div class="tw"><table class="d"><tr><th>Actual \\ Predicted</th><th>Positive</th><th>Negative</th></tr><tr><th>Positive</th><td class="ok">TP</td><td class="bad">FN</td></tr><tr><th>Negative</th><td class="fpc">FP</td><td class="ok">TN</td></tr></table></div>
 <ul>
  <li><b class="tp">TP (True Positive)</b>: The model predicts Positive, and the actual class is Positive.</li>
  <li><b class="tn">TN (True Negative)</b>: The model predicts Negative, and the actual class is Negative.</li>
  <li><b class="fp">FP (False Positive)</b>: The model predicts Positive, but the actual class is Negative.</li>
  <li><b class="fn">FN (False Negative)</b>: The model predicts Negative, but the actual class is Positive.</li>
 </ul>
 <h4>Performance metrics formulas</h4>
 <div class="fcs">
  <div class="fcard"><h5>1. Accuracy</h5><div class="eq">Accuracy = [[<b class="tp">TP</b> + <b class="tn">TN</b>|<b class="tp">TP</b> + <b class="tn">TN</b> + <b class="fp">FP</b> + <b class="fn">FN</b>]]</div><p>Measures the proportion of all predictions that are correct.</p></div>
  <div class="fcard"><h5>2. Precision</h5><div class="eq">Precision = [[<b class="tp">TP</b>|<b class="tp">TP</b> + <b class="fp">FP</b>]]</div><p>Measures how many of the predicted positive cases are actually positive.</p></div>
  <div class="fcard"><h5>3. Recall (Sensitivity)</h5><div class="eq">Recall = [[<b class="tp">TP</b>|<b class="tp">TP</b> + <b class="fn">FN</b>]]</div><p>Measures how many of the actual positive cases the model correctly identifies.</p></div>
  <div class="fcard"><h5>4. F1-score</h5><div class="eq">F1 = 2 × [[Precision × Recall|Precision + Recall]]</div><p>Uses the precision and recall.</p></div>
  <div class="fcard"><h5>5. Specificity</h5><div class="eq">Specificity = [[<b class="tn">TN</b>|<b class="tn">TN</b> + <b class="fp">FP</b>]]</div><p>Measures how well the model identifies actual negative cases.</p></div>
  <div class="fcard"><h5>6. Error Rate</h5><div class="eq">Error Rate = [[<b class="fp">FP</b> + <b class="fn">FN</b>|N]] = 1 − Accuracy</div><p>Here, N is the total number of evaluated samples.</p></div>
 </div></section>

 <section class="block"><h3>Solved Example 1: Binary confusion matrix</h3>
 <p><b>Question:</b> A model predicts whether 100 patients have a disease. The results are shown below. Calculate all the performance metrics.</p>
 <div class="tw"><table class="d"><tr><th>Actual \\ Predicted</th><th>Predicted: Positive</th><th>Predicted: Negative</th></tr><tr><th>Positive</th><td class="ok">40 (TP)</td><td class="bad">10 (FN)</td></tr><tr><th>Negative</th><td class="fpc">5 (FP)</td><td class="ok">45 (TN)</td></tr></table></div>
 <p>Total samples = 40 + 10 + 5 + 45 = 100.</p>
 <h4>Step 1: Identify TP, TN, FP, and FN</h4>
 <p>TP = 40, TN = 45, FP = 5, FN = 10, Total (N) = 100</p>
 <div class="tiles">
  <div class="tile"><span>Step 2: Accuracy</span><div class="eq sm">[[40 + 45|100]] = [[85|100]]</div><strong>85%</strong></div>
  <div class="tile"><span>Step 3: Precision</span><div class="eq sm">[[40|40 + 5]] = [[40|45]]</div><strong>88.89%</strong></div>
  <div class="tile"><span>Step 4: Recall</span><div class="eq sm">[[40|40 + 10]] = [[40|50]]</div><strong>80%</strong></div>
  <div class="tile"><span>Step 5: F1-score</span><div class="eq sm">2 × [[0.8889 × 0.80|0.8889 + 0.80]]</div><strong>84.21%</strong></div>
  <div class="tile"><span>Step 6: Specificity</span><div class="eq sm">[[45|45 + 5]]</div><strong>90%</strong></div>
  <div class="tile"><span>Step 7: Error Rate</span><div class="eq sm">[[5 + 10|100]]</div><strong>15%</strong></div>
 </div>
 <div class="call"><b>Interpretation:</b> The model correctly classifies 85% of all patients. Its precision is higher than its recall, meaning that its positive predictions are relatively reliable, but it misses 20% of the patients who actually have the disease.</div>
 </section>

 <section class="block"><h3>Solved Example 2: Multiclass confusion matrix</h3>
 <p><b>Question:</b> A machine learning model classifies 120 images into three classes: Cat, Dog, and Bird. Calculate the accuracy, precision, recall, and F1-score for each class.</p>
 <p>The diagonal values (40, 30, 24) represent correct predictions. Off-diagonal values represent classification errors.</p>
 <h4>Step 1: Calculate overall accuracy</h4>
 <p>For a multiclass confusion matrix, add the diagonal values and divide by the total number of samples.</p>
 <div class="tiles"><div class="tile"><span>Accuracy</span><div class="eq sm">[[40 + 30 + 24|120]] = [[94|120]]</div><strong>78.33%</strong></div><div class="tile"><span>Error Rate</span><div class="eq sm">[[120 − 94|120]] × 100</div><strong>21.67%</strong></div></div>
 <p>The model correctly classifies 94 out of 120 images.</p>
 <h4>Step 2: Calculate metrics for each class</h4>
 <p>For multiclass classification, calculate each class's metrics by treating that class as Positive and all other classes as Negative. This is called the <b>one-vs-rest</b> approach.</p>
 <div class="pick" id="cvpick"><span class="picklab">👆 Click a class:</span><button data-k="0">Cat</button><button data-k="1">Dog</button><button data-k="2">Bird</button></div>
 <div class="tw"><table class="d" id="cvm"></table></div>
 <div class="key"><span class="k tp">TP</span><span class="k fn">FN (rest of the row)</span><span class="k fp">FP (rest of the column)</span><span class="k tn">TN (everything else)</span></div>
 <div id="cvd"></div>

 <h4>Step 5: Summarize the multiclass results</h4>
 <div class="tw"><table class="d"><tr><th>Metric</th><th>Cat</th><th>Dog</th><th>Bird</th></tr><tr><th>Precision</th><td>88.89%</td><td>76.92%</td><td>66.67%</td></tr><tr><th>Recall</th><td>80.00%</td><td>75.00%</td><td>80.00%</td></tr><tr><th>F1-score</th><td>84.21%</td><td>75.95%</td><td>72.73%</td></tr><tr><th>Specificity</th><td>92.86%</td><td>88.75%</td><td>86.67%</td></tr></table></div>
 <p>Overall accuracy is 78.33%, and overall error rate is 21.67%.</p>
 <h4>Step 6: Calculate macro-average metrics</h4>
 <p>The macro average is the ordinary average of the three class-specific scores. Each class receives equal weight.</p>
 <div class="fcard"><h5>Macro average</h5><div class="eq">Macro = [[Σ Mᵢ|K]]</div><p>Here, Mᵢ is the metric for class i, such as its precision, recall, or F1-score.</p></div>
 <div class="tiles">
  <div class="tile"><span>Macro-Precision</span><div class="eq sm">[[88.89 + 76.92 + 66.67|3]]</div><strong>77.49%</strong></div>
  <div class="tile"><span>Macro-Recall</span><div class="eq sm">[[80 + 75 + 80|3]]</div><strong>78.33%</strong></div>
  <div class="tile"><span>Macro-F1</span><div class="eq sm">[[84.21 + 75.95 + 72.73|3]]</div><strong>77.63%</strong></div>
 </div>
 <p>These averages are useful when you want to evaluate the model's performance across all classes equally, regardless of how many samples each class contains.</p>
 <div class="fcard"><h5>Weighted average</h5><div class="eq">Weighted = [[Σ nᵢ × Mᵢ|N]]</div>
  <ul><li>nᵢ = number of actual samples in class i, called <i>support</i>.</li><li>N = total number of samples.</li><li>Mᵢ = the metric for class i.</li></ul></div>
 </section>


<div class="botnav" aria-label="التنقل بين الأجزاء">
 <button data-sub="cv-s2">‹ السابق: Lecture 2: Image</button>
 <button data-sub="cv-p2">التالي: Problem 2: Lab 1 &amp; 2 ›</button>
</div>
</div>
</div>
`};

})();
