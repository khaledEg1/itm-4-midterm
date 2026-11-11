(() => {
const li = items => "<ul>" + items.map(item => "<li>" + item + "</li>").join("") + "</ul>";

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS.ai = {id:"ai", title:"برمجة الذكاء الاصطناعي", done:true,
  req: li(["<span class='en'>Chapter 1</span>: من البداية حتى <span class='en'>Model-Based Reflex Agent</span> شامل الموديل والـ <span class='en'>Algorithm</span>","<span class='en'>Chapter 6</span>: مخاطر الذكاء الاصطناعي والسؤال المحدد في الشابتر"]),
  exam: "<ol><li><span class='en'>MCQ</span></li><li>سؤال <span class='en'>Chapter 6</span> المحدد في الشابتر</li><li><span class='en'>Algorithm</span> لموديل واحد من الموديلين المطلوبين</li><li>تعريفات نظرية، مثل: <span class='en'>Define AI</span> و<span class='en'>What is an Agent?</span></li></ol>",
  html: `<div class="cvroot">
<div class="subnav" role="tablist">
 <button data-sub="ai-ch1" aria-selected="true">Chapter 1: AI &amp; Agents</button>
 <button data-sub="ai-ch1-summary" aria-selected="false">Chapter 1 Summary</button>
 <button data-sub="ai-ch6" aria-selected="false">Chapter 6: Ethics &amp; Risks</button>
 <button data-sub="ai-exam" aria-selected="false">Expected Exam</button>
</div>

<div class="sp" id="ai-ch1">
 <div class="call"><b>Artificial Intelligence (AI)</b> is the study and design of intelligent agents: systems that perceive their environment and choose actions.</div>

 <section class="block"><h3>What is AI?</h3>
  <p>AI can focus on human or rational behavior, and on thinking or acting.</p>
  <div class="cards">
   <div class="card"><h5>Thinking humanly</h5><p>Modeling human thought and mental processes.</p></div>
   <div class="card"><h5>Thinking rationally</h5><p>Using computational models to reason correctly.</p></div>
   <div class="card"><h5>Acting humanly</h5><p>Building machines that perform tasks requiring human intelligence.</p></div>
   <div class="card"><h5>Acting rationally</h5><p>Designing intelligent agents that choose actions to achieve the best outcome.</p></div>
  </div>
  <div class="call"><b>AI and natural intelligence:</b> AI systems can be copied, documented, and made less expensive; these are advantages noted in the lecture.</div>
  <h4>Major AI Technologies</h4>
  <div class="tags">
   <span>Expert systems</span><span>Neural networks</span><span>Intelligent agents</span><span>Fuzzy logic</span>
   <span>Genetic algorithms</span><span>Natural language processing</span><span>Robotics</span>
   <span>Speech understanding and recognition</span><span>Computer vision and scene recognition</span><span>Intelligent computer-aided instruction</span>
   <span>Neural computing</span><span>Automatic programming</span><span>Language translation</span>
  </div>
  <h4>Examples of AI Applications</h4>
  <div class="cards">
   <div class="card"><h5>Planning and scheduling</h5><p>NASA's Remote Agent monitored a spacecraft's operations.</p></div>
   <div class="card"><h5>Game playing</h5><p>IBM's Deep Blue defeated the world chess champion.</p></div>
   <div class="card"><h5>Autonomous control</h5><p>ALVINN used computer vision to control vehicle steering.</p></div>
   <div class="card"><h5>Diagnosis</h5><p>Medical diagnosis programs use probabilistic analysis.</p></div>
   <div class="card"><h5>Logistics</h5><p>Planning and scheduling the transport of goods.</p></div>
   <div class="card"><h5>Robotics</h5><p>Robot assistants support surgeons in microsurgery.</p></div>
   <div class="card"><h5>Language and problem solving</h5><p>Programs can solve crossword puzzles using constraints and information sources.</p></div>
  </div>
 </section>

 <section class="block"><h3>Agents: Perceive, then Act</h3>
  <div class="call"><b>Agent:</b> anything that perceives its environment through <b>sensors</b> and acts upon it through <b>actuators</b> (effectors).</div>
  <div class="dg">
   <svg viewBox="0 0 1000 190" role="img" aria-labelledby="ai-agent-title ai-agent-desc">
    <title id="ai-agent-title">Agent perceives its environment and acts on it</title>
    <desc id="ai-agent-desc">Environment information reaches the agent through sensors; the agent program sends actions through actuators back to the environment.</desc>
    <defs><marker id="ai-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#00c2d8"/></marker></defs>
    <g fill="#132b49" stroke="#00c2d8" stroke-width="2">
     <rect x="20" y="46" width="145" height="76" rx="14"/><rect x="205" y="46" width="145" height="76" rx="14"/>
     <rect x="390" y="36" width="200" height="96" rx="14" stroke="#ffc107"/><rect x="630" y="46" width="145" height="76" rx="14"/>
     <rect x="815" y="46" width="165" height="76" rx="14"/>
    </g>
    <g fill="#eaf4ff" text-anchor="middle" font-size="17">
     <text x="92" y="78">Environment</text><text x="92" y="101" font-size="13">world state</text>
     <text x="277" y="78">Sensors</text><text x="277" y="101" font-size="13">percepts</text>
     <text x="490" y="76">Agent Program</text><text x="490" y="101" font-size="13">maps percepts to actions</text>
     <text x="702" y="78">Actuators</text><text x="702" y="101" font-size="13">actions</text>
     <text x="897" y="78">Environment</text><text x="897" y="101" font-size="13">updated state</text>
    </g>
    <g fill="none" stroke="#00c2d8" stroke-width="3" marker-end="url(#ai-arrow)">
     <path d="M165 84h34"/><path d="M350 84h34"/><path d="M590 84h34"/><path d="M775 84h34"/>
    </g>
   </svg>
   <div class="dgcap">Percepts enter through sensors; actions affect the environment through actuators.</div>
  </div>
  <div class="cards">
   <div class="card"><h5>Percept</h5><p>The agent's sensory input at one particular instant.</p></div>
   <div class="card"><h5>Percept sequence</h5><p>The complete history of everything the agent has perceived.</p></div>
   <div class="card"><h5>Agent function</h5><p>An abstract mapping from every percept sequence to an action.</p></div>
   <div class="card"><h5>Agent program</h5><p>The concrete implementation of the agent function, running on an architecture.</p></div>
   <div class="card"><h5>Architecture</h5><p>The physical computing device with sensors and actuators on which the program runs.</p></div>
   <div class="card"><h5>Remember</h5><p><b>Agent = Architecture + Program.</b> The function is the abstract description; the program implements it.</p></div>
  </div>
  <p>The agent function is an external, mathematical description of behavior; the agent program is its concrete implementation. A complete table of an agent function can be extremely large or infinite unless percept-sequence length is bounded.</p>
  <h4>Examples of agents</h4>
  <ul>
   <li><b>Human:</b> eyes and ears are sensors; hands, legs, and mouth are actuators.</li>
   <li><b>Robot:</b> cameras and infrared range finders are sensors; motors are actuators.</li>
   <li><b>Software agent:</b> keystrokes, files, and network packets are inputs; displaying, writing files, and sending packets are actions.</li>
  </ul>
  <h4>Vacuum-Cleaner Agent Example</h4>
  <p>A two-location vacuum agent senses its current location and whether that location is dirty. A simple reflex policy maps the current percept directly to an action:</p>
  <div class="tw"><table class="d">
   <tr><th>Current percept</th><th>Action</th></tr>
   <tr><td>[A, Dirty]</td><td>Suck</td></tr><tr><td>[A, Clean]</td><td>Right</td></tr>
   <tr><td>[B, Dirty]</td><td>Suck</td></tr><tr><td>[B, Clean]</td><td>Left</td></tr>
  </table></div>
  <pre class="fm">function REFLEX-VACUUM-AGENT([location, status]):
    if status = Dirty: return Suck
    if location = A: return Right
    if location = B: return Left</pre>
  <p>The <b>agent function</b> describes the percept-sequence-to-action mapping; this vacuum rule set is an implementation of it.</p>
 </section>

 <section class="block"><h3>Rational Agents and PEAS</h3>
  <div class="call"><b>Rational agent:</b> for each percept sequence, it selects the action expected to maximize its performance measure, given the evidence and its built-in knowledge. Rational does not mean all-knowing or always successful.</div>
  <h4>What determines rationality?</h4>
  <ol>
   <li>The performance measure that defines success.</li>
   <li>The agent's prior knowledge of the environment.</li>
   <li>The actions available to the agent.</li>
   <li>The percept sequence received so far.</li>
  </ol>
  <p>A performance measure is an objective criterion for success. For a vacuum agent, it could consider the amount of dirt cleaned, time, electricity, and noise.</p>
  <div class="call tip">Rationality is based on the evidence available and the expected result, not perfect knowledge of the outcome. A performance measure should assess the desired result in the environment, not the agent's opinion of its own success.</div>
  <h4>PEAS: specify the task environment</h4>
  <p><b>P</b>erformance measure, <b>E</b>nvironment, <b>A</b>ctuators, <b>S</b>ensors. Specify all four when describing an agent's task.</p>
  <div class="tw"><table class="d">
   <tr><th>Agent</th><th>Performance (P)</th><th>Environment (E)</th><th>Actuators (A)</th><th>Sensors (S)</th></tr>
   <tr><th>Taxi driver</th><td>Safe, fast, legal, comfortable trip; maximize profit</td><td>Roads, traffic, pedestrians, customers</td><td>Steering, accelerator, brake, signals, horn</td><td>Cameras, GPS, speedometer, sonar, odometer</td></tr>
   <tr><th>Medical diagnosis</th><td>Healthy patient; reduced costs</td><td>Patient, hospital, staff</td><td>Questions, tests, diagnoses, treatments, referrals</td><td>Symptoms, findings, patient answers</td></tr>
   <tr><th>Satellite image analysis</th><td>Correct image categorization</td><td>Downlink from orbiting satellite</td><td>Display scene categorization</td><td>Color pixel arrays</td></tr>
   <tr><th>Part-picking robot</th><td>Parts placed in correct bins</td><td>Conveyor belt and bins</td><td>Jointed arm and hand</td><td>Camera, joint-angle sensors</td></tr>
   <tr><th>Refinery controller</th><td>Purity, yield, safety</td><td>Refinery and operators</td><td>Valves, pumps, heaters</td><td>Temperature, pressure, chemical sensors</td></tr>
   <tr><th>English tutor</th><td>Student's test score</td><td>Students and testing agency</td><td>Exercises, suggestions, corrections</td><td>Keyboard entries</td></tr>
  </table></div>
 </section>

 <section class="block"><h3>Properties of Task Environments</h3>
  <div class="cards">
   <div class="card"><h5>Fully / Partially observable</h5><p>Can the sensors access all information relevant to choosing an action? Missing or noisy information makes it partially observable. With no sensors, it is unobservable.</p></div>
   <div class="card"><h5>Single-agent / Multiagent</h5><p>Is the agent acting alone, or do other agents also affect the outcome? A crossword is single-agent; chess is multiagent.</p></div>
   <div class="card"><h5>Deterministic / Stochastic</h5><p>Does the current state and action completely determine the next state? If not, it is stochastic.</p></div>
   <div class="card"><h5>Episodic / Sequential</h5><p>In episodic tasks, each percept-action episode is independent (for example, spotting defective parts). In sequential tasks, current actions affect future decisions, as in chess or taxi driving.</p></div>
   <div class="card"><h5>Static / Dynamic</h5><p>A dynamic environment can change while the agent is deciding. If the world does not change but the performance score changes with time, it is semidynamic.</p></div>
   <div class="card"><h5>Discrete / Continuous</h5><p>Describes whether states, time, percepts, and actions take distinct values or vary continuously.</p></div>
   <div class="card"><h5>Known / Unknown</h5><p>Does the agent know the rules and outcomes of actions? If unknown, it must learn how the environment works. This is separate from observability.</p></div>
  </div>
  <div class="call tip"><b>Examples:</b> Crossword puzzles are fully observable, single-agent, deterministic, sequential, static, and discrete. Taxi driving is partially observable, multiagent, stochastic, sequential, dynamic, and continuous; its rules are generally known. An environment can be known yet partially observable, or unknown yet fully observable.</div>
  <p>An environment is <b>uncertain</b> if it is not fully observable or is not deterministic. The most challenging combination is partially observable, multiagent, stochastic, sequential, dynamic, continuous, and unknown.</p>
 </section>

 <section class="block"><h3>Agent Programs: The Two Required Models <span class="revtag">غير مراجع</span></h3>
  <p>An agent program takes the current percept as input and returns an action. The four basic agent-program types are simple reflex, model-based reflex, goal-based, and utility-based; the first two are described here.</p>
  <div class="call tip"><b>Condition-action rule:</b> an if-then rule connecting a recognized situation to an action. For example: <span class="en">if the car in front is braking, then initiate braking</span>.</div>
  <div class="cards">
   <div class="card">
    <h5>1. Simple Reflex Agent</h5>
    <p>Selects an action using only the <b>current percept</b>; it ignores percept history. It matches the interpreted state to a condition-action rule.</p>
    <pre class="fm">persistent: rules
function SIMPLE-REFLEX-AGENT(percept):
    state = INTERPRET-INPUT(percept)
    rule = RULE-MATCH(state, rules)
    return rule.ACTION</pre>
    <p><b>Limitation:</b> in a partially observable environment it may lack enough information, repeat actions, or get stuck in an infinite loop.</p>
    <p>For example, without a location sensor, a vacuum agent that senses only <span class="en">Dirty/Clean</span> cannot know whether it should move left or right when the current square is clean; either fixed choice can lead to an infinite loop.</p>
   </div>
   <div class="card">
    <h5>2. Model-Based Reflex Agent</h5>
    <p>Maintains an <b>internal state</b> to track parts of the world it cannot currently observe, then chooses an action using condition-action rules.</p>
    <pre class="fm">persistent: state, action, model, rules
function MODEL-BASED-REFLEX-AGENT(percept):
    state = UPDATE-STATE(state, action, percept, model)
    rule = RULE-MATCH(state, rules)
    action = rule.ACTION
    return action</pre>
    <p><b>Model:</b> knowledge of how the world evolves and how the agent's actions change it. <code>UPDATE-STATE</code> combines the old state, previous action, current percept, and model.</p>
    <ul><li><b>World dynamics:</b> how the world changes independently of the agent.</li><li><b>Action effects:</b> how the agent's own actions change the world.</li></ul>
   </div>
  </div>
  <h4>Simple Reflex Agent Structure</h4>
  <div class="dg">
   <svg viewBox="0 0 1000 420" role="img" aria-labelledby="ai-simple-title ai-simple-desc">
    <title id="ai-simple-title">Simple reflex agent structure</title>
    <desc id="ai-simple-desc">Inside the agent, sensors provide the current world description. Condition-action rules select an action, which is sent through actuators to the environment.</desc>
    <defs><marker id="ai-simple-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#00c2d8"/></marker></defs>
    <rect x="20" y="22" width="740" height="376" rx="28" fill="#142b49" stroke="#68809e" stroke-width="3"/>
    <rect x="800" y="34" width="170" height="350" rx="28" fill="#263b59" stroke="#68809e" stroke-width="3"/>
    <text x="65" y="375" fill="#eaf4ff" font-size="24" font-weight="700">Agent</text>
    <text x="885" y="210" fill="#eaf4ff" font-size="22" font-weight="700" text-anchor="middle" transform="rotate(90 885 210)">Environment</text>
    <text x="700" y="60" fill="#eaf4ff" font-size="17" text-anchor="middle">Sensors</text>
    <text x="690" y="352" fill="#eaf4ff" font-size="17" text-anchor="middle">Actuators</text>
    <rect x="410" y="112" width="300" height="76" rx="4" fill="#0b1f3a" stroke="#00c2d8" stroke-width="3"/>
    <text x="560" y="143" fill="#eaf4ff" font-size="18" text-anchor="middle">What the world</text>
    <text x="560" y="168" fill="#eaf4ff" font-size="18" text-anchor="middle">is like now</text>
    <rect x="410" y="252" width="300" height="70" rx="4" fill="#0b1f3a" stroke="#00c2d8" stroke-width="3"/>
    <text x="560" y="282" fill="#eaf4ff" font-size="18" text-anchor="middle">What action should</text>
    <text x="560" y="306" fill="#eaf4ff" font-size="18" text-anchor="middle">I do now?</text>
    <ellipse cx="205" cy="287" rx="158" ry="34" fill="#0b1f3a" stroke="#ffc107" stroke-width="3"/>
    <text x="205" y="293" fill="#eaf4ff" font-size="18" text-anchor="middle">Condition-action rules</text>
    <g fill="none" stroke="#00c2d8" stroke-width="4" marker-end="url(#ai-simple-arrow)">
     <path d="M800 78H690"/><path d="M690 84V106"/><path d="M560 188V246"/>
     <path d="M363 287H402"/><path d="M560 322V365H800"/>
    </g>
   </svg>
   <div class="dgcap">Current percept → current state description → condition-action rule → action. The agent does not keep an internal model.</div>
  </div>
  <h4>Model-Based Reflex Agent Structure</h4>
  <div class="dg">
   <svg viewBox="0 0 1000 480" role="img" aria-labelledby="ai-model-title ai-model-desc">
    <title id="ai-model-title">Model-based reflex agent internal-state update</title>
    <desc id="ai-model-desc">Within the agent, the current percept from sensors is combined with the previous state and the world model to estimate the current world. Condition-action rules select an action, which actuators apply to the environment.</desc>
    <defs>
     <marker id="ai-model-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#00c2d8"/></marker>
     <marker id="ai-model-state-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#ffc107"/></marker>
    </defs>
    <rect x="20" y="22" width="740" height="428" rx="28" fill="#142b49" stroke="#68809e" stroke-width="3"/>
    <rect x="800" y="34" width="170" height="402" rx="28" fill="#263b59" stroke="#68809e" stroke-width="3"/>
    <text x="65" y="435" fill="#eaf4ff" font-size="20" font-weight="700">Agent</text>
    <text x="885" y="235" fill="#eaf4ff" font-size="22" font-weight="700" text-anchor="middle" transform="rotate(90 885 235)">Environment</text>
    <text x="700" y="60" fill="#eaf4ff" font-size="17" text-anchor="middle">Sensors</text>
    <text x="690" y="404" fill="#eaf4ff" font-size="17" text-anchor="middle">Actuators</text>
    <g fill="#0b1f3a" stroke="#ffc107" stroke-width="3">
     <ellipse cx="195" cy="85" rx="100" ry="28"/>
     <ellipse cx="220" cy="155" rx="145" ry="29"/>
     <ellipse cx="220" cy="230" rx="145" ry="29"/>
     <ellipse cx="210" cy="330" rx="160" ry="29"/>
    </g>
    <g fill="#eaf4ff" text-anchor="middle" font-size="17">
     <text x="195" y="91">State</text>
     <text x="220" y="161">How the world evolves</text>
     <text x="220" y="236">What my actions do</text>
     <text x="210" y="336">Condition-action rules</text>
    </g>
    <rect x="435" y="105" width="275" height="76" rx="4" fill="#0b1f3a" stroke="#00c2d8" stroke-width="3"/>
    <text x="572" y="138" fill="#eaf4ff" font-size="18" text-anchor="middle">What the world</text>
    <text x="572" y="163" fill="#eaf4ff" font-size="18" text-anchor="middle">is like now</text>
    <rect x="435" y="295" width="275" height="70" rx="4" fill="#0b1f3a" stroke="#00c2d8" stroke-width="3"/>
    <text x="572" y="324" fill="#eaf4ff" font-size="18" text-anchor="middle">What action should</text>
    <text x="572" y="348" fill="#eaf4ff" font-size="18" text-anchor="middle">I do now?</text>
    <g fill="none" stroke="#00c2d8" stroke-width="4" marker-end="url(#ai-model-arrow)">
     <path d="M800 78H690"/><path d="M690 84V99"/>
     <path d="M295 85C350 85 385 124 429 140"/>
     <path d="M365 155H429"/>
     <path d="M365 230C397 230 411 194 429 164"/>
     <path d="M572 181V289"/>
     <path d="M370 330H429"/>
     <path d="M572 365V415H800"/>
    </g>
    <path d="M435 112C390 55 325 44 270 73" fill="none" stroke="#ffc107" stroke-width="3" stroke-dasharray="9 7" marker-end="url(#ai-model-state-arrow)"/>
   </svg>
   <div class="dgcap">The model updates the internal state; condition-action rules then select an action for the actuators.</div>
  </div>
  <div class="call ans"><b>Key difference:</b> A simple reflex agent chooses from the current percept; a model-based reflex agent updates an internal state using a model before choosing an action.</div>
 </section>

 <div class="botnav" aria-label="التنقل بين الأجزاء">
  <span></span>
  <button data-sub="ai-ch1-summary">Next: Chapter 1 Summary ›</button>
 </div>
</div>

<div class="sp" id="ai-ch1-summary" hidden>
 <section class="block"><h3>Chapter 1 Summary — Definitions</h3>
  <div class="cards">
   <div class="card"><h5>Artificial Intelligence (AI)</h5><p>The study and design of intelligent agents.</p></div>
   <div class="card"><h5>Agent</h5><p>Anything that perceives its environment through sensors and acts on it through actuators.</p></div>
   <div class="card"><h5>Percept</h5><p>The agent's sensory input at a particular instant.</p></div>
   <div class="card"><h5>Percept sequence</h5><p>The complete history of everything the agent has perceived.</p></div>
   <div class="card"><h5>Agent function</h5><p>The abstract mapping from a percept sequence to an action.</p></div>
   <div class="card"><h5>Agent program</h5><p>The concrete implementation of the agent function.</p></div>
   <div class="card"><h5>Architecture</h5><p>The physical device that runs the agent program and provides sensors and actuators.</p></div>
   <div class="card"><h5>Rational agent</h5><p>An agent that selects the action expected to maximize its performance measure, given its percepts and knowledge.</p></div>
   <div class="card"><h5>Performance measure</h5><p>An objective criterion used to evaluate an agent's success.</p></div>
   <div class="card"><h5>PEAS</h5><p>Performance measure, Environment, Actuators, Sensors: the four parts used to specify a task environment.</p></div>
   <div class="card"><h5>Model</h5><p>Knowledge of how the world changes and how the agent's actions affect it.</p></div>
   <div class="card"><h5>Simple reflex agent</h5><p>Selects an action using only the current percept and condition-action rules.</p></div>
   <div class="card"><h5>Model-based reflex agent</h5><p>Uses an internal state and a model to track the world, then selects an action using rules.</p></div>
  </div>
 </section>
 <section class="block"><h3>Key Ideas</h3>
  <div class="tiles">
   <div class="tile"><span>Agent structure</span><strong>Architecture + Program</strong></div>
   <div class="tile"><span>Agent function</span><strong>Percept sequence → Action</strong></div>
   <div class="tile"><span>Rationality depends on</span><strong>Measure, knowledge, actions, percepts</strong></div>
  </div>
  <h4>Four approaches to AI</h4>
  <p>Thinking humanly · Thinking rationally · Acting humanly · Acting rationally.</p>
  <h4>Task-environment dimensions</h4>
  <p>Fully or partially observable · Single-agent or multiagent · Deterministic or stochastic · Episodic or sequential · Static or dynamic · Discrete or continuous · Known or unknown.</p>
 </section>
 <section class="block"><h3>The Two Reflex-Agent Algorithms</h3>
  <div class="cards">
   <div class="card"><h5>Simple reflex</h5><code>Current percept → Interpret → Match rule → Action</code><p>Ignores percept history and has no internal world state.</p></div>
   <div class="card"><h5>Model-based reflex</h5><code>Percept + old state + previous action + model → UPDATE-STATE → Match rule → Action</code><p>Maintains an internal state to handle partial observability.</p></div>
  </div>
 </section>
 <div class="botnav" aria-label="التنقل بين الأجزاء">
  <button data-sub="ai-ch1">‹ Previous: Chapter 1: AI &amp; Agents</button>
  <button data-sub="ai-ch6">Next: Chapter 6: Ethics &amp; Risks ›</button>
 </div>
</div>

<div class="sp" id="ai-ch6" hidden>
 <div class="call"><b>Chapter 6 — The Ethics and Risks of Developing Artificial Intelligence</b></div>
 <section class="block"><h3>Risks to Know</h3>
  <ol class="flow">
   <li><span class="n">1</span><div><h5>Job loss through automation</h5><p>People might lose their jobs as tasks become automated.</p></div></li>
   <li><span class="n">2</span><div><h5>Too much or too little leisure</h5><p>Automation may change how much free time people have.</p></div></li>
   <li><span class="n">3</span><div><h5>Loss of uniqueness</h5><p>People might lose their sense of being unique.</p></div></li>
   <li><span class="n">4</span><div><h5>Undesirable uses</h5><p>AI systems might be used toward undesirable ends.</p></div></li>
   <li><span class="n">5</span><div><h5>Loss of accountability</h5><p>The use of AI systems might result in a loss of accountability.</p></div></li>
   <li><span class="n">6</span><div><h5>Risk to humanity</h5><p>The success of AI might mean the end of the human race.</p></div></li>
  </ol>
 </section>
 <section class="block"><h3>Chapter 6 Written Question</h3>
  <div class="call tip"><b>Question:</b> What are the ethical risks of developing artificial intelligence listed in Chapter 6?</div>
  <p>Answer by listing and briefly explaining all six points: job loss to automation; too much or too little leisure time; loss of a sense of uniqueness; use toward undesirable ends; loss of accountability; and the possibility that AI's success could mean the end of the human race.</p>
 </section>
 <section class="block"><h3>Quick MCQ Practice</h3>
  <div class="qa">
   <div class="qq"><span class="qn">1.</span> Which agent keeps an internal state to track parts of the world it cannot currently observe?</div>
   <div class="opts"><span class="opt">Simple reflex agent</span><span class="opt" data-c="1">Model-based reflex agent</span><span class="opt">A sensor</span></div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">2.</span> In PEAS, what does the letter E represent?</div>
   <div class="opts"><span class="opt">Effectors</span><span class="opt" data-c="1">Environment</span><span class="opt">Evaluation algorithm</span></div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">3.</span> Which item is listed as a Chapter 6 risk?</div>
   <div class="opts"><span class="opt">AI always removes accountability</span><span class="opt" data-c="1">AI may be used toward undesirable ends</span><span class="opt">AI makes every environment fully observable</span></div>
  </div>
 </section>
 <div class="botnav" aria-label="التنقل بين الأجزاء">
  <button data-sub="ai-ch1-summary">‹ Previous: Chapter 1 Summary</button>
  <button data-sub="ai-exam">Next: Expected Exam ›</button>
 </div>
</div>

<div class="sp" id="ai-exam" hidden>
 <div class="call"><b>Expected Midterm Exam — Practice</b><br>Select an option for each MCQ. Essay answers are shown.</div>
 <section class="block"><h3>Part A: Multiple Choice</h3>
  <div class="qa">
   <div class="qq"><span class="qn">1.</span> Which best describes AI in this chapter?</div>
   <div class="opts"><span class="opt">A computer that only stores information</span><span class="opt" data-c="1">The study and design of intelligent agents</span><span class="opt">A machine that always imitates human appearance</span></div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">2.</span> An agent perceives its environment through ___ and acts through ___.</div>
   <div class="opts"><span class="opt" data-c="1">Sensors; actuators</span><span class="opt">Actuators; sensors</span><span class="opt">Programs; percept sequences</span></div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">3.</span> What does an agent function map to an action?</div>
   <div class="opts"><span class="opt">The current location only</span><span class="opt" data-c="1">A percept sequence</span><span class="opt">The agent's source code</span></div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">4.</span> A simple reflex agent selects an action based on ___.</div>
   <div class="opts"><span class="opt">The full percept history</span><span class="opt">A learned world model only</span><span class="opt" data-c="1">The current percept</span></div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">5.</span> What helps a model-based reflex agent handle partial observability?</div>
   <div class="opts"><span class="opt">Ignoring its previous action</span><span class="opt" data-c="1">Updating an internal state using a model</span><span class="opt">Removing its sensors</span></div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">6.</span> In PEAS, the letter E stands for ___.</div>
   <div class="opts"><span class="opt">Effectors</span><span class="opt">Evaluation</span><span class="opt" data-c="1">Environment</span></div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">7.</span> Which statement about known and observable environments is correct?</div>
   <div class="opts"><span class="opt">A known environment is always fully observable</span><span class="opt" data-c="1">A known environment can still be partially observable</span><span class="opt">Unknown means the agent has no sensors</span></div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">8.</span> Which is listed as a risk of developing AI in Chapter 6?</div>
   <div class="opts"><span class="opt">All AI systems are accountable by default</span><span class="opt">AI makes every task deterministic</span><span class="opt" data-c="1">People might lose their jobs to automation</span></div>
  </div>
 </section>
 <section class="block"><h3>Part B: Theory / Essay — Answers Shown</h3>
  <div class="qa">
   <div class="qq"><span class="qn">1.</span> Define Artificial Intelligence (AI).</div>
   <div class="qa-a"><div class="alab">Answer</div>AI is the study and design of intelligent agents—systems that perceive their environment and choose actions. The chapter also presents AI through thinking or acting humanly or rationally.</div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">2.</span> What is an agent? Define percept and percept sequence.</div>
   <div class="qa-a"><div class="alab">Answer</div>An agent perceives its environment through sensors and acts on it through actuators. A percept is its input at a particular instant; a percept sequence is the complete history of everything it has perceived.</div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">3.</span> Explain how a model-based reflex agent works.</div>
   <div class="qa-a"><div class="alab">Answer</div>It updates an internal state from the previous state, previous action, current percept, and model of the world. It then matches the updated state to a condition-action rule and returns that rule's action. The model describes how the world changes and how the agent's actions affect it.</div>
  </div>
  <div class="qa">
   <div class="qq"><span class="qn">4.</span> List the risks of AI development presented in Chapter 6.</div>
   <div class="qa-a"><div class="alab">Answer</div>Job loss to automation; too much or too little leisure time; loss of a sense of uniqueness; AI being used toward undesirable ends; loss of accountability; and the possibility that AI's success could mean the end of the human race.</div>
  </div>
 </section>
 <div class="botnav" aria-label="التنقل بين الأجزاء">
  <button data-sub="ai-ch6">‹ Previous: Chapter 6: Ethics &amp; Risks</button>
  <span></span>
 </div>
</div>
</div>`
};
})();
