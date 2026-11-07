(() => {
const li = items => "<ul>" + items.map(item => "<li>" + item + "</li>").join("") + "</ul>";

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS.nlp = {id:"nlp", title:"معالجة اللغات الطبيعية", done:true,
  req: li(["التلات ملفات النظري","<span class='en'>Zipf's Law</span>", "<span class='en'>Maximum Likelihood Estimation (MLE)</span>", "<span class='en'>Laplace (Add-1) Smoothing</span>"]),
  html: `<div class=\"cvroot\">
 <div class=\"subnav\" role=\"tablist\">
  <button data-sub=\"nlp-t1\" aria-selected=\"true\">Part 1: Natural Language</button>
  <button data-sub=\"nlp-t2\" aria-selected=\"false\">Part 2: What is NLP?</button>
  <button data-sub=\"nlp-t3\" aria-selected=\"false\">Part 3: Data Acquisition, Challenges &amp; Text Cleaning</button>
  <button data-sub=\"nlp-zipf\" aria-selected=\"false\">Part 4: Zipf's Law</button>
  <button data-sub=\"nlp-mle\" aria-selected=\"false\">Part 5: MLE &amp; Laplace Smoothing</button>
 </div>

 <div class=\"sp\" id=\"nlp-t1\">
<div class=\"call\"><b>Natural Language</b> is the ordinary language that humans use to communicate.<br>It develops <b>naturally</b> within societies, and is used in <b>speaking, writing, reading, and listening</b>.</div>
<section class=\"block\"><h3>Natural Language — Key Characteristics</h3>
<div class=\"cards\">
<div class=\"card\"><h5>Flexible and Expressive</h5><p>Easy to use in different situations.</p></div>
<div class=\"card\"><h5>Context-dependent</h5><p>Meaning depends on the situation and surrounding words.</p></div>
<div class=\"card\"><h5>Ambiguous</h5><p>A sentence may have multiple meanings.</p></div>
<div class=\"card\"><h5>Productivity</h5><p>Humans can create and understand new sentences.</p></div>
<div class=\"card\"><h5>Variability</h5><p>The same idea can be expressed in different ways.</p></div>
<div class=\"card\"><h5>Evolution</h5><p>Continuously changes over time.</p></div>
<div class=\"card\"><h5>Rich</h5><p>Contains grammar, idioms, and emotions.</p></div>
</div>
</section>
<section class=\"block\"><h3>Formal Language</h3>
<div class=\"call\"><b>Formal languages</b> are <b>artificially designed</b> languages with <b>strict syntactic and semantic rules</b>.<br>They are used to represent information in a <b>precise and unambiguous</b> manner,<br>and are used in <b>Computer Science, Mathematics, and Logic</b> for accurate <b>human-to-machine</b> communication.</div>
<h4>Key Characteristics</h4>
<ul>
<li><b>Strict / well-defined</b> grammar rules</li>
<li><b>Unambiguous</b> interpretation</li>
<li>Designed for <b>precision</b></li>
<li><b>Limited tolerance</b> for errors</li>
<li><b>Deterministic</b> structure and meaning</li>
</ul>
</section>
<section class=\"block\"><h3>Natural vs Formal Languages</h3>
<div class=\"tw\"><table class=\"cmp\">
<tr><th>Feature</th><th>Natural Languages</th><th>Formal Languages</th></tr>
<tr><td>Definition</td><td>Develops naturally among humans for communication.</td><td>Artificially designed languages with strict rules and syntax.</td></tr>
<tr><td>Examples</td><td>English, Arabic, French</td><td>Python, Java, and C++, Mathematical notation</td></tr>
<tr><td>Purpose</td><td>Human-to-human communication</td><td>Human-to-machine communication</td></tr>
<tr><td>Rules</td><td>Grammar rules exist, but exceptions and ambiguities are common.</td><td>Rules are precise, strict, and unambiguous.</td></tr>
<tr><td>Ambiguity</td><td>High; meanings often depend on context.</td><td>Low; each statement has a specific meaning.</td></tr>
<tr><td>Evolution</td><td>Changes over time with culture and society.</td><td>Changes only when it is modified by designers.</td></tr>
<tr><td>Error Tolerance</td><td>Humans can often understand messages despite grammatical mistakes.</td><td>Small errors can make the statement invalid.</td></tr>
</table></div>
</section>
<div class=\"botnav\"><span></span><button data-sub=\"nlp-t2\">Part 2: What is NLP? :التالي ›</button></div>
 </div>

 <div class=\"sp\" id=\"nlp-t2\" hidden>
<div class=\"call\"><b>Natural Language Processing (NLP)</b> is a subfield of <b>AI, computer science, and computational linguistics</b> that enables computers to <b>understand, interpret, manipulate, and generate</b> human language in text and speech forms.</div>
<div class=\"call\">It converts <b>unstructured</b> human language into <b>structured mathematical representations</b> that algorithms can learn from and act upon.</div>
<section class=\"block\"><h3>What did early NLP systems rely on?</h3>
<ul>
<li><b>Handcrafted linguistic rules</b></li>
<li><b>Dictionary lookups</b></li>
<li><b>Formal grammars</b></li>
</ul>
</section>
<section class=\"block\"><h3>NLP Tasks</h3>
<div class=\"cards\">
<div class=\"card\"><h5>Text Classification</h5><p>Assigning predefined labels to text, such as spam or topic categories.</p></div>
<div class=\"card\"><h5>Sentiment Analysis</h5><p>Detecting whether text expresses positive, negative, or neutral emotions.</p></div>
<div class=\"card\"><h5>Machine Translation</h5><p>Automatically converting text from one language to another.</p></div>
<div class=\"card\"><h5>Named Entity Recognition (NER)</h5><p>Identifying names of people, places, dates, etc., in text.</p></div>
<div class=\"card\"><h5>Text Summarization</h5><p>Generating a shorter version of a document while keeping its key meanings.</p></div>
<div class=\"card\"><h5>Question Answering Systems</h5><p>Systems that read text and return exact answers to queries.</p></div>
</div>
</section>
<section class=\"block\"><h3>Real-Life Applications</h3>
<ul>
<li>Voice assistants like Alexa, Google Assistant</li>
<li>Chatbots in customer support</li>
<li>Email spam filtering</li>
<li>Auto-correct and predictive typing</li>
<li>Language translation tools</li>
<li>Social media sentiment tracking</li>
<li>Document search and recommendation systems</li>
</ul>
</section>
<section class=\"block\"><h3>The NLP Pipeline</h3>
<div class=\"dg\"><svg viewBox=\"0 0 960 300\" width=\"100%\" role=\"img\" aria-label=\"The NLP pipeline steps\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><g>
<rect x=\"10\" y=\"18\" width=\"220\" height=\"84\" rx=\"16\" fill=\"#12314f\" stroke=\"#2e6ea8\" stroke-width=\"1.6\"/>
<rect x=\"14\" y=\"28\" width=\"10\" height=\"64\" rx=\"4\" fill=\"#1d4a73\"/>
<circle cx=\"40\" cy=\"42\" r=\"12.5\" fill=\"#37d5ea\"/>
<text x=\"40\" y=\"47.5\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#0b1e33\">1</text>
<text x=\"128\" y=\"68\" text-anchor=\"middle\" font-size=\"16.5\" font-weight=\"700\" fill=\"#eaf4ff\">Data Acquisition</text>
</g><g>
<rect x=\"250\" y=\"18\" width=\"220\" height=\"84\" rx=\"16\" fill=\"#12314f\" stroke=\"#2e6ea8\" stroke-width=\"1.6\"/>
<rect x=\"254\" y=\"28\" width=\"10\" height=\"64\" rx=\"4\" fill=\"#1d4a73\"/>
<circle cx=\"280\" cy=\"42\" r=\"12.5\" fill=\"#37d5ea\"/>
<text x=\"280\" y=\"47.5\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#0b1e33\">2</text>
<text x=\"368\" y=\"68\" text-anchor=\"middle\" font-size=\"16.5\" font-weight=\"700\" fill=\"#eaf4ff\">Text Cleaning</text>
</g><g>
<rect x=\"490\" y=\"18\" width=\"220\" height=\"84\" rx=\"16\" fill=\"#12314f\" stroke=\"#2e6ea8\" stroke-width=\"1.6\"/>
<rect x=\"494\" y=\"28\" width=\"10\" height=\"64\" rx=\"4\" fill=\"#1d4a73\"/>
<circle cx=\"520\" cy=\"42\" r=\"12.5\" fill=\"#37d5ea\"/>
<text x=\"520\" y=\"47.5\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#0b1e33\">3</text>
<text x=\"608\" y=\"68\" text-anchor=\"middle\" font-size=\"16.5\" font-weight=\"700\" fill=\"#eaf4ff\">Text Preprocessing</text>
</g><g>
<rect x=\"730\" y=\"18\" width=\"220\" height=\"84\" rx=\"16\" fill=\"#12314f\" stroke=\"#2e6ea8\" stroke-width=\"1.6\"/>
<rect x=\"734\" y=\"28\" width=\"10\" height=\"64\" rx=\"4\" fill=\"#1d4a73\"/>
<circle cx=\"760\" cy=\"42\" r=\"12.5\" fill=\"#37d5ea\"/>
<text x=\"760\" y=\"47.5\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#0b1e33\">4</text>
<text x=\"848\" y=\"68\" text-anchor=\"middle\" font-size=\"16.5\" font-weight=\"700\" fill=\"#eaf4ff\">Feature Engineering</text>
</g><rect x=\"230\" y=\"55.5\" width=\"11\" height=\"9\" fill=\"#2e6ea8\"/><path d=\"M 239 52 L 250 60 L 239 68 Z\" fill=\"#37d5ea\"/><rect x=\"470\" y=\"55.5\" width=\"11\" height=\"9\" fill=\"#2e6ea8\"/><path d=\"M 479 52 L 490 60 L 479 68 Z\" fill=\"#37d5ea\"/><rect x=\"710\" y=\"55.5\" width=\"11\" height=\"9\" fill=\"#2e6ea8\"/><path d=\"M 719 52 L 730 60 L 719 68 Z\" fill=\"#37d5ea\"/><rect x=\"835.5\" y=\"102\" width=\"9\" height=\"96\" fill=\"#2e6ea8\"/><path d=\"M 832 187 L 840 198 L 848 187 Z\" fill=\"#37d5ea\"/><g>
<rect x=\"730\" y=\"198\" width=\"220\" height=\"84\" rx=\"16\" fill=\"#12314f\" stroke=\"#2e6ea8\" stroke-width=\"1.6\"/>
<rect x=\"936\" y=\"208\" width=\"10\" height=\"64\" rx=\"4\" fill=\"#1d4a73\"/>
<circle cx=\"760\" cy=\"222\" r=\"12.5\" fill=\"#37d5ea\"/>
<text x=\"760\" y=\"227.5\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#0b1e33\">5</text>
<text x=\"848\" y=\"248\" text-anchor=\"middle\" font-size=\"16.5\" font-weight=\"700\" fill=\"#eaf4ff\">Model Building</text>
</g><g>
<rect x=\"370\" y=\"198\" width=\"220\" height=\"84\" rx=\"16\" fill=\"#12314f\" stroke=\"#2e6ea8\" stroke-width=\"1.6\"/>
<rect x=\"576\" y=\"208\" width=\"10\" height=\"64\" rx=\"4\" fill=\"#1d4a73\"/>
<circle cx=\"400\" cy=\"222\" r=\"12.5\" fill=\"#37d5ea\"/>
<text x=\"400\" y=\"227.5\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#0b1e33\">6</text>
<text x=\"488\" y=\"248\" text-anchor=\"middle\" font-size=\"16.5\" font-weight=\"700\" fill=\"#eaf4ff\">Evaluation</text>
</g><g>
<rect x=\"10\" y=\"198\" width=\"220\" height=\"84\" rx=\"16\" fill=\"#12314f\" stroke=\"#2e6ea8\" stroke-width=\"1.6\"/>
<rect x=\"216\" y=\"208\" width=\"10\" height=\"64\" rx=\"4\" fill=\"#1d4a73\"/>
<circle cx=\"40\" cy=\"222\" r=\"12.5\" fill=\"#37d5ea\"/>
<text x=\"40\" y=\"227.5\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#0b1e33\">7</text>
<text x=\"128\" y=\"248\" text-anchor=\"middle\" font-size=\"16.5\" font-weight=\"700\" fill=\"#eaf4ff\">Deployment</text>
</g><rect x=\"599\" y=\"235.5\" width=\"131\" height=\"9\" fill=\"#2e6ea8\"/><path d=\"M 601 232 L 590 240 L 601 248 Z\" fill=\"#37d5ea\"/><rect x=\"239\" y=\"235.5\" width=\"131\" height=\"9\" fill=\"#2e6ea8\"/><path d=\"M 241 232 L 230 240 L 241 248 Z\" fill=\"#37d5ea\"/></svg><div class=\"dgcap\">Figure: the NLP pipeline — from acquiring the data to deploying the model (Part 2)</div></div>
<p>Part 3 goes through the first steps of this pipeline in detail: acquiring the data, the challenges that come with it, and cleaning it.</p>
</section>
<div class=\"botnav\"><button data-sub=\"nlp-t1\">‹ السابق: Part 1: Natural Language</button><button data-sub=\"nlp-t3\">Part 3: Data Acquisition &amp; Challenges :التالي ›</button></div>
 </div>

 <div class=\"sp\" id=\"nlp-t3\" hidden>
<div class=\"call\"><b>Data Acquisition:</b> to build a model, we need relevant data.<br>If it is not available locally or in a database, we must <b>collect it</b>.</div>
<section class=\"block\"><h3>Ways of Collecting Data</h3>
<h4>1. Public Dataset</h4>
<p>Search for publicly available data related to the problem.</p>
<h4>2. Web Scraping</h4>
<p>Automatically extract data from websites, using Python libraries such as <b>BeautifulSoup</b>, <b>Scrapy</b>, and <b>Selenium</b>.</p>
<h4>3. Image to Text (OCR)</h4>
<p>Extract text from images using <b>OCR (optical character recognition)</b> tools.<br>In Python, OCR converts the text in images into editable and searchable digital text using the <b>pytesseract</b> library.</p>
<p><b>Improve OCR accuracy</b> using image preprocessing: convert the image to <b>grayscale</b>, increase <b>contrast</b>, and apply <b>thresholding</b> to create a black-and-white image.</p>
<h4>4. PDF to Text</h4>
<p>Extract text from PDF files using one of two Python libraries:</p>
<ul>
<li><b>PyPDF:</b> supports the PDF format. (PDF stands for Portable Document Format.)</li>
<li><b>PyMuPDF:</b> supports PDF, XPS, CBR, and CBZ formats.</li>
</ul>
<p>Steps to extract the text from a PDF:</p>
<div class=\"fm\">1. Importing the library → 2. Opening the document → 3. Extracting text</div>
<h4>5. Data Augmentation</h4>
<p>Generate additional data using techniques such as <b>synonym replacement</b>, <b>back translation</b>, <b>bigram flipping</b>, or <b>adding noise</b>.<br>This helps models perform better, especially when the original dataset is small.</p>
</section>
<section class=\"block\"><h3>Data Challenges in NLP</h3>
<h4>1. Data Sparsity</h4>
<p>Occurs when words or word combinations appear <b>rarely</b> in a dataset, which makes it difficult for models to learn reliable patterns.</p>
<h4>2. Class Imbalance</h4>
<p>Occurs when some classes have more data than others, which causes models to favor the <b>majority class</b>.<br>Example: 95% Not Spam and 5% Spam.</p>
<p><b>Solution:</b> oversampling, undersampling, or SMOTE.</p>
<h4>3. Noise in Data</h4>
<p>Irrelevant, incorrect, or inconsistent information in the dataset, which reduces model performance and prediction accuracy.</p>
</section>
<section class=\"block\"><h3>Text Cleaning</h3>
<p>The next step of the pipeline: it removes unwanted elements such as <b>HTML tags</b>, <b>spelling mistakes</b>, and <b>special characters</b>, and removes <b>duplicate records</b>, to make the data clean and ready for the NLP process.</p>
</section>
<section class=\"block\"><h3>Exercise: Sentiment Dataset</h3>
<p>Given data with <b>Positive reviews = 900</b> and <b>Negative reviews = 100</b>:</p>
<div class=\"qa\"><div class=\"qq\"><span class=\"qn\">1</span> What data challenge is illustrated?</div><div class=\"qa-a\"><span class=\"alab\">Answer:</span> Class Imbalance.</div></div>
<div class=\"qa\"><div class=\"qq\"><span class=\"qn\">2</span> Why might model accuracy be misleading?</div><div class=\"qa-a\"><span class=\"alab\">Answer:</span> a model that predicts most reviews as positive would still achieve 90% accuracy.</div></div>
<div class=\"qa\"><div class=\"qq\"><span class=\"qn\">3</span> Which techniques can address this issue?</div><div class=\"qa-a\"><span class=\"alab\">Answer:</span> Oversampling, undersampling, SMOTE.</div></div>
</section>
<div class=\"botnav\"><button data-sub=\"nlp-t2\">‹ السابق: Part 2: What is NLP?</button><button data-sub=\"nlp-zipf\">Part 4: Zipf's Law :التالي ›</button></div>
 </div>

 <div class=\"sp\" id=\"nlp-zipf\" hidden>
<div class=\"call\"><b>Zipf's Law</b> is an empirical law discovered by George Zipf in the 1930s.<br>It describes the relationship between a word's <b>frequency</b> in a language corpus and its <b>rank</b> in a frequency-sorted list.<br>It is also known as the <b>principle of least effort</b>.</div>
  <section class=\"block\"><h3>What the law says</h3>
   <ul>
    <li>The most frequent word (rank 1) occurs most often, the second most frequent word appears about <b>half</b> as often, the third about <b>one-third</b> as often, and so on.</li>
    <li>A few words are extremely common (like \"the\", \"of\", \"and\"), while the <b>vast majority of words are rare</b>.<br>This follows a <b>power-law distribution</b>.</li>
    <li>Why? We tend to reuse words we are comfortable with, and communicate as efficiently as possible with the least amount of effort.</li>
   </ul>
   <div class=\"tw\"><table class=\"d\">
    <tr><th>Rank r</th><th>1</th><th>2</th><th>3</th><th>10</th><th>100</th></tr>
    <tr><td>Frequency f(r)</td><td>C</td><td>C / 2</td><td>C / 3</td><td>C / 10</td><td>C / 100</td></tr>
   </table></div>
  </section>
  <section class=\"block\"><h3>Mathematical formulation</h3>
   <div class=\"fcs\">
    <div class=\"fcard\"><h5>Zipf's Law</h5><div class=\"eq\">f(r) = C / r<sup>s</sup></div>
     <ul><li><b>f(r)</b> = frequency of the word at rank r</li><li><b>C</b> = a constant for the corpus</li><li><b>s</b> = the Zipf exponent, s ≈ 1 for most human languages</li></ul></div>
    <div class=\"fcard\"><h5>With s = 1 (the usual case)</h5><div class=\"eq\">f(r) = [[C|r]]</div>
     <ul><li>Then C = the frequency of the rank-1 word itself: C = f(1).</li><li>From any known rank: <b>C = f(r) × r</b>.</li></ul></div>
   </div>
  </section>
  <section class=\"block\"><h3>Why it matters: data sparsity</h3>
   <p>Because most words are rare, many words and word sequences <b>never appear</b> in a training corpus, even a large one.<br>This is the <b>data sparsity</b> problem: a model cannot learn reliable probabilities for events it has never seen.<br>Zipf's Law is the reason the zero-frequency problem and smoothing (Part 5) exist.</p>
  </section>
<div class=\"call\">From the book (Worked Example 1.1 and its Exercise).<br>Both problems use Zipf's Law with s = 1, so f(r) = C / r: find the constant C first, then every other frequency follows.</div>
  <section class=\"block\"><h3>Important formulas</h3>
   <div class=\"fcs\">
    <div class=\"fcard\"><h5>Zipf's Law (s = 1)</h5><div class=\"eq\">f(r) = [[C|r]]</div><ul><li>f(r) = frequency of the word at rank r, C = corpus constant.</li></ul></div>
    <div class=\"fcard\"><h5>Finding the constant</h5><div class=\"eq\">C = f(r) × r</div><ul><li>Use any rank whose frequency is known; for r = 1, C = f(1).</li></ul></div>
   </div>
  </section>
  <section class=\"block\"><h3>Solved Example 1 (Worked Example 1.1)</h3>
   <p><b>Question:</b> An English news corpus contains N = 1,000,000 total words.<br>The most frequent word (r = 1), \"the\", appears 70,000 times.<br>Assuming Zipf's Law with s = 1: (1) calculate the constant C, (2) estimate the frequency of the 5th most frequent word (\"and\"), (3) estimate the frequency of the 100th most frequent word, (4) find the ratio of the frequency of the 10th word to the 50th word.</p>
   <h4>Step 1: Calculate the constant C</h4>
   <div class=\"fm\">C = f(1) × 1 = 70,000 × 1 = 70,000</div>
   <h4>Step 2: Frequency of the 5th word (r = 5)</h4>
   <div class=\"fm\">f(5) = 70,000 / 5 = 14,000</div>
   <h4>Step 3: Frequency of the 100th word (r = 100)</h4>
   <div class=\"fm\">f(100) = 70,000 / 100 = 700</div>
   <h4>Step 4: Ratio f(10) / f(50)</h4>
   <div class=\"fm\">f(10) = 70,000 / 10 = 7,000
f(50) = 70,000 / 50 = 1,400
Ratio = 7,000 / 1,400 = 5</div>
   <div class=\"tiles\">
    <div class=\"tile\"><span>Constant C</span><strong>70,000</strong></div>
    <div class=\"tile\"><span>f(5)</span><strong>14,000</strong></div>
    <div class=\"tile\"><span>f(100)</span><strong>700</strong></div>
    <div class=\"tile\"><span>f(10) / f(50)</span><strong>5</strong></div>
   </div>
   <div class=\"call ans\"><b>Final answer:</b> <span class=\"res\">C = 70,000</span>, <span class=\"res\">f(5) = 14,000</span>, <span class=\"res\">f(100) = 700</span>, and the 10th word occurs <span class=\"res\">5 times</span> as often as the 50th word.</div>
  <section class="block"><h3>Solved Example 2 (the book's Exercise)</h3>
   <p><b>Question:</b> A corpus of 500,000 words follows Zipf's Law (s = 1).<br>The 4th most frequent word appears 12,500 times.<br>Calculate (1) the Zipf constant C, (2) the frequency of the most frequent word (r = 1), (3) the expected frequency of the 25th most frequent word.</p>
   <h4>Step 1: Calculate the constant C from rank 4</h4>
   <div class="fm">C = f(4) × 4 = 12,500 × 4 = 50,000</div>
   <h4>Step 2: Frequency of the most frequent word (r = 1)</h4>
   <div class="fm">f(1) = 50,000 / 1 = 50,000</div>
   <h4>Step 3: Frequency of the 25th word (r = 25)</h4>
   <div class="fm">f(25) = 50,000 / 25 = 2,000</div>
   <div class="tiles">
    <div class="tile"><span>Constant C</span><strong>50,000</strong></div>
    <div class="tile"><span>f(1)</span><strong>50,000</strong></div>
    <div class="tile"><span>f(25)</span><strong>2,000</strong></div>
   </div>
   <div class="call ans"><b>Final answer:</b> <span class="res">C = 50,000</span>, <span class="res">f(1) = 50,000</span>, <span class="res">f(25) = 2,000</span>.</div>
  </section>
  <section class="block"><h3>Quiz <span class="badge upd">new</span></h3>
   <div class="call"><b>Zipf's Law</b> with exponent <b>s = 1.2</b> is written as <div class="eq">f(r) = [[C|r<sup>s</sup>]]</div> where <b>C</b> is the corpus constant.</div>
   <div class="qa"><div class="qq">
    <p>A text corpus contains <b>1,200,000</b> words and approximately follows <b>Zipf's Law</b> with exponent <b>s = 1.2</b>. The 6th most frequent word appears <b>18,000</b> times.</p>
    <p><b>Answer the following questions:</b></p>
    <ol>
     <li>Calculate the Zipf constant (<b>C</b>).</li>
     <li>Estimate the frequency of the most frequent word (<b>r = 1</b>).</li>
     <li>Estimate the frequency of the <b>20th</b> most frequent word.</li>
     <li>Estimate the rank of a word that appears approximately <b>3,000</b> times.</li>
     <li>Calculate the percentage of the total corpus represented by the most frequent word.</li>
    </ol>
   </div></div>
   <div class="call ans"><b>Step 1: Calculate the constant C</b><br>Use the known frequency at rank 6:<br><div class="fm">C = f(6) × 6<sup>1.2</sup> = 18,000 × 6<sup>1.2</sup> ≈ 154,545</div></div>
   <div class="call ans"><b>Step 2: Frequency of the most frequent word</b><br>For rank 1, the formula becomes <b>f(1) = C / 1<sup>1.2</sup> = C</b>.<br><div class="fm">f(1) = 154,545</div></div>
   <div class="call ans"><b>Step 3: Frequency of the 20th most frequent word</b><br>Apply the Zipf rule for r = 20:<br><div class="fm">f(20) = C / 20<sup>1.2</sup> ≈ 154,545 / 20<sup>1.2</sup> ≈ 4,244</div></div>
   <div class="call ans"><b>Step 4: Estimate the rank for a frequency of 3,000</b><br>Set <b>f(r) = 3,000 = C / r<sup>1.2</sup></b>, so<br><div class="fm">r = (C / 3,000)<sup>1 / 1.2</sup> ≈ 26.7</div>
   So the rank is approximately <b>27</b>.</div>
   <div class="call ans"><b>Step 5: Percentage of the corpus represented by the most frequent word</b><br><div class="fm">% = (154,545 / 1,200,000) × 100 ≈ 12.88%</div></div>
   <div class="call ans"><b>Final answers:</b>
    <ul>
     <li><b>C ≈ 154,545</b></li>
     <li><b>f(1) ≈ 154,545</b></li>
     <li><b>f(20) ≈ 4,244</b></li>
     <li><b>Rank ≈ 27</b></li>
     <li><b>Percentage ≈ 12.88%</b></li>
    </ul>
   </div>
  </section>
 </div>
 <div class="sp" id="nlp-mle" hidden>

<div class=\"call\">Statistical NLP estimates the probability of words from a text corpus.<br>The main tool is the <b>N-gram language model</b>, and its probabilities are estimated with <b>Maximum Likelihood Estimation (MLE)</b>.</div>
  <section class=\"block\"><h3>N-gram language models</h3>
   <ul>
    <li>An N-gram model estimates the probability of a word based on the <b>preceding N−1 words</b> only.</li>
    <li>This relies on the <b>Markov assumption</b>: the probability of a word depends only on a limited number of previous words, not on the entire sentence history.</li>
   </ul>
   <div class=\"fcs\">
    <div class=\"fcard\"><h5>Bigram (N = 2)</h5><div class=\"eq\">P(w<sub>i</sub> | w<sub>i−1</sub>)</div><ul><li>The word depends on the <b>one</b> previous word.</li></ul></div>
    <div class=\"fcard\"><h5>Trigram (N = 3)</h5><div class=\"eq\">P(w<sub>i</sub> | w<sub>i−2</sub> w<sub>i−1</sub>)</div><ul><li>The word depends on the <b>two</b> previous words.</li></ul></div>
   </div>
  </section>
  <section class=\"block\"><h3>Maximum Likelihood Estimation (MLE)</h3>
   <p>MLE estimates a probability <b>directly from the observed data</b>: count how often the word followed the context, and divide by how often the context occurred.</p>
   <div class=\"fcs\">
    <div class=\"fcard\"><h5>MLE probability</h5><div class=\"eq\">P(w<sub>i</sub> | h) = [[Count(h, w<sub>i</sub>)|Count(h)]]</div>
     <ul><li><b>h</b> is the context (history), e.g. the previous word or two words.</li><li><b>Count(h, w<sub>i</sub>)</b> = number of times the word w<sub>i</sub> follows the context h.</li><li><b>Count(h)</b> = total number of occurrences of the context h.</li></ul></div>
   </div>
   <div class=\"call\"><b>The zero-frequency problem:</b> MLE is simple and effective, but if a word has <b>never</b> appeared after a particular context in the training data, MLE assigns it a probability of <b>zero</b> — even though the sequence is perfectly possible.<br>One zero can kill the probability of a whole sentence.<br>The fix is smoothing.</div>
  </section>
<div class=\"call\"><b>Laplace (Add-1) Smoothing</b> is one of the simplest smoothing techniques.<br>It solves the zero-frequency problem by <b>adding one to every count</b>, so no word sequence ever gets a probability of zero.</div>
  <section class=\"block\"><h3>The Laplace formula</h3>
   <div class=\"fcs\">
    <div class=\"fcard\"><h5>Laplace (Add-1) probability</h5><div class=\"eq\">P(w<sub>i</sub> | h) = [[Count(h, w<sub>i</sub>) + 1|Count(h) + V]]</div>
     <ul><li><b>V</b> = the vocabulary size (number of different words in the corpus).</li><li>We add 1 to the numerator for the word itself, and V to the denominator (1 for each word in the vocabulary), so the probabilities still sum to 1.</li></ul></div>
   </div>
  </section>
  <section class=\"block\"><h3>What it guarantees</h3>
   <ul>
    <li><b>Unseen words:</b> a word that never followed h gets probability 1 / (Count(h) + V) — small, but <b>not zero</b>.</li>
    <li><b>Seen words:</b> their probabilities become slightly <b>smaller</b> than the MLE values, because some probability mass is shared with the unseen words.</li>
    <li>This lets the model handle previously unseen word sequences instead of failing on them.</li>
   </ul>
  </section>
<div class=\"call\">From the book (Example 1.1: MLE and Laplace Smoothing).<br>In a corpus, the phrase <b>\"natural language\"</b> appears <b>500</b> times, and the phrase <b>\"natural language processing\"</b> appears <b>150</b> times.<br>We calculate the probability of \"processing\" after \"natural language\", first by MLE, then with Laplace smoothing (V = 10,000).</div>
  <section class=\"block\"><h3>Important formulas</h3>
   <div class=\"fcs\">
    <div class=\"fcard\"><h5>MLE</h5><div class=\"eq\">P(w<sub>i</sub> | h) = [[Count(h, w<sub>i</sub>)|Count(h)]]</div></div>
    <div class=\"fcard\"><h5>Laplace (Add-1)</h5><div class=\"eq\">P(w<sub>i</sub> | h) = [[Count(h, w<sub>i</sub>) + 1|Count(h) + V]]</div></div>
   </div>
   <p>Here the context h is \"natural language\", the word w<sub>i</sub> is \"processing\": Count(h) = 500 and Count(h, w<sub>i</sub>) = 150.</p>
  </section>
  <section class=\"block\"><h3>Solved Example: P(processing | natural language)</h3>
   <p><b>Question:</b> Calculate (1) the Maximum Likelihood Estimation (MLE) probability, and (2) the Laplace-smoothed probability assuming a vocabulary size of V = 10,000.</p>
   <h4>Step 1: MLE probability</h4>
   <div class=\"fm\">P(processing | natural language) = 150 / 500 = 0.3</div>
   <h4>Step 2: Laplace smoothing</h4>
   <div class=\"fm\">P(processing | natural language) = (150 + 1) / (500 + 10,000) = 151 / 10,500 ≈ 0.0144</div>
   <div class=\"tiles\">
    <div class=\"tile\"><span>MLE probability</span><strong>0.3</strong></div>
    <div class=\"tile\"><span>Laplace probability</span><strong>≈ 0.0144</strong></div>
    <div class=\"tile\"><span>Unseen word (Laplace)</span><strong>≈ 0.0000952</strong></div>
   </div>
   <div class=\"call ans\"><b>Final answer:</b> <span class=\"res\">MLE = 0.3</span> and <span class=\"res\">Laplace ≈ 0.0144</span>.</div>
   <div class=\"call\"><b>Interpretation:</b> the smoothed probability (0.0144) is much smaller than the MLE probability (0.3) because Laplace takes probability mass from the seen words and reserves it for the unseen ones.<br>A word that never followed \"natural language\" would get 1 / 10,500 ≈ 0.0000952 instead of the MLE value of exactly 0.</div>
  </section>
<div class=\"botnav\"><button data-sub=\"nlp-zipf\">‹ السابق: Part 4: Zipf's Law</button><span></span></div>
 </div>
</div>`};

})();
