// Information Storage (db) subject  version 1.2 (all chip rows restructured; repeated content removed)
(() => {
const li = items => "<ul>" + items.map(item => "<li>" + item + "</li>").join("") + "</ul>";
const mcqs = [
  {module: 1, n: 1, q: "What is the approximate annual generation of data in the digital universe?", options: ["4.4 megabytes", "4.4 trillion GB", "4.4 billion terabytes", "440 gigabytes"], answer: "B"},
  {module: 1, n: 2, q: "Which of the following is an example of unstructured data?", options: ["Spreadsheets", "Databases", "Text documents, PDFs, images, and videos", "Clickstream data"], answer: "C"},
  {module: 1, n: 3, q: "Textual data with erratic formats that can be formatted with effort and software tools is known as:", options: ["Structured data", "Semi-structured data", "Quasi-structured data", "Unstructured data"], answer: "C"},
  {module: 1, n: 4, q: "What is the definition of Information?", options: ["A collection of raw facts collected together without context", "Processed data that is presented in a specific context to enable useful interpretation and decision-making", "The hardware used to store files", "Software responsible for network communication"], answer: "B"},
  {module: 1, n: 5, q: "Which of the following storage devices is a flash-based storage device?", options: ["Hard Disk Drive (HDD)", "Solid State Drive (SSD)", "Blu-ray disc", "Magnetic tape"], answer: "B"},
  {module: 1, n: 6, q: "A data center comprises three main components:", options: ["Building, labor, and marketing", "Facility, IT equipment, and support infrastructure", "Computers, monitors, and optical discs", "Internet, cloud, and software"], answer: "B"},
  {module: 1, n: 7, q: "Which data center characteristic ensures the protection of data from unauthorized modification?", options: ["Availability", "Capacity", "Data Integrity", "Scalability"], answer: "C"},
  {module: 1, n: 8, q: "The process of continuously gathering information on data center resources is called:", options: ["Planning", "Monitoring", "Provisioning", "Reporting"], answer: "B"},
  {module: 1, n: 9, q: "Configuring and allocating resources to meet capacity, availability, performance, and security requirements is known as:", options: ["Maintenance", "Provisioning", "Monitoring", "Reporting"], answer: "B"},
  {module: 1, n: 10, q: "The first platform in the evolution of computing platforms was based on:", options: ["Client/Server architecture", "Cloud & Big Data", "Mainframe, Mini Computer, and terminals", "Mobile Computing"], answer: "C"},
  {module: 1, n: 11, q: "The second platform is based on the model of:", options: ["Mainframe", "Client-Server", "Cloud Computing", "Social Media"], answer: "B"},
  {module: 1, n: 12, q: "A major challenge associated with mainframes (First Platform) was:", options: ["Extreme cost reduction", "Substantial CAPEX and OPEX", "Easy mobile access", "Total reliance on open-source software"], answer: "B"},
  {module: 1, n: 13, q: "A key challenge of the second platform is:", options: ["Lack of local area networks", "Creation of IT silos", "Excessively small data size", "Reliance solely on central mainframes"], answer: "B"},
  {module: 1, n: 14, q: "The four pillars of the third platform consist of:", options: ["Mainframe, PC, Internet, Servers", "Cloud, Big Data, Mobile, Social", "Monitoring, Provisioning, Planning, Maintenance", "HDD, SSD, Tape, Optical Disc"], answer: "B"},
  {module: 1, n: 15, q: "The correct evolutionary scale progression of user base across platforms (from first to third) is:", options: ["Millions → Billions → Hundreds of millions", "Hundreds of millions → Millions → Billions", "Millions (First) → Hundreds of millions (Second) → Billions (Third)", "No growth in user count"], answer: "C"},
  {module: 2, n: 16, q: "According to NIST, cloud computing enables ubiquitous, convenient, on-demand network access with:", options: ["Maximum administrative effort", "Minimal management effort or service provider interaction", "Constant manual intervention", "Complex multi-month setup procedures"], answer: "B"},
  {module: 2, n: 17, q: "The characteristic that allows a consumer to unilaterally provision computing capabilities automatically without human interaction is:", options: ["Broad Network Access", "Resource Pooling", "On-demand self-service", "Measured Service"], answer: "C"},
  {module: 2, n: 18, q: "In the Infrastructure as a Service (IaaS) model, the consumer has control over:", options: ["Underlying physical hardware and core data center facilities", "Operating systems, storage, deployed applications, and possibly select networking components (e.g., host firewalls)", "Only end-user application interfaces without operating systems", "The cloud provider's corporate finances"], answer: "B"},
  {module: 2, n: 19, q: "The cloud service model that allows consumers to deploy applications created using supported programming languages and tools without managing underlying infrastructure is:", options: ["SaaS", "PaaS", "IaaS", "DaaS"], answer: "B"},
  {module: 2, n: 20, q: "Using a web-based email application is a typical example of:", options: ["IaaS", "PaaS", "SaaS", "Hardware as a Service"], answer: "C"},
  {module: 2, n: 21, q: "The cloud deployment model provisioned for exclusive use by a single organization comprising multiple consumers is:", options: ["Public Cloud", "Private Cloud", "Community Cloud", "Hybrid Cloud"], answer: "B"},
  {module: 2, n: 22, q: "A hybrid cloud is defined as:", options: ["A private cloud hosted exclusively on-premise", "A composition of two or more distinct cloud infrastructures (private, community, or public)", "A free public cloud open to everyone", "An internal network with no internet connection"], answer: "B"},
  {module: 2, n: 23, q: "Information assets whose high volume, high velocity, and high variety require new technical architectures and analytical methods are known as:", options: ["Small Data", "Big Data", "Metadata", "Legacy Data"], answer: "B"},
  {module: 2, n: 24, q: "The characteristic of Big Data that refers to the varying quality, reliability, and trustworthiness of data is:", options: ["Velocity", "Variety", "Veracity", "Variability"], answer: "C"},
  {module: 2, n: 25, q: "A data repository that stores data as an exact or near-exact copy of the source format and organizes or analyzes it only when accessed is called a:", options: ["Data Warehouse", "Data Lake", "Relational Database", "Data Mart"], answer: "B"},
  {module: 2, n: 26, q: "The distributed architecture model used for batch-processing and parallel computation across many servers in Big Data analytics is:", options: ["SQL Query", "MapReduce", "NoSQL Storage", "Client-Server Process"], answer: "B"},
  {module: 2, n: 27, q: "The process of analyzing relationship patterns in social networks to gain insights and identify influential people is called:", options: ["Mobile Computing", "Social Network Analysis (SNA)", "Enterprise Collaboration", "Cloud Analytics"], answer: "B"},
  {module: 2, n: 28, q: "Mobile computing enables users to:", options: ["Remotely access applications and information on the go over a wireless network", "Connect legacy mainframes together", "Completely eliminate database servers", "Process textual data only"], answer: "A"},
  {module: 2, n: 29, q: "The third platform infrastructure characteristic that allows multiple systems or components to share and use information through APIs, web services, or middleware is:", options: ["Availability", "Scalability", "Interoperability", "Manageability"], answer: "C"},
  {module: 2, n: 30, q: "Operating model transformation in the third platform involves the adoption of:", options: ["IT as a Service (ITaaS) model where resources are provisioned through self-service portals", "Mainframe terminal models", "Traditional CAPEX budgeting models", "Manual resource allocation"], answer: "A"}
];
const essays = [
  {module: 1, n: 1, q: "Describe the four types of digital data with an example for each.", answer: [
    "Structured Data: Data having a defined data model, format, and structure (e.g., databases).",
    "Semi-Structured Data: Textual data files with an apparent pattern, enabling analysis (e.g., spreadsheets and XML files).",
    "Quasi-Structured Data: Textual data with erratic formats that can be formatted with effort and software tools (e.g., clickstream data).",
    "Unstructured Data: Data that has no inherent structure and is usually stored as different types of files (e.g., text documents, PDFs, images, and videos)."
  ]},
  {module: 1, n: 2, q: "Explain the seven key characteristics of a data center.", answer: [
    "Availability: Critical services continue to be available following a disruptive event.",
    "Data Integrity: Ensuring accuracy and protection of data from unauthorized modification.",
    "Security: Preventing unauthorized access to IT equipment and data.",
    "Capacity: Providing sufficient space and resources to support operations.",
    "Scalability: Accommodating massive changes in workloads and data volume.",
    "Performance: Ensuring optimal performance for mixed workloads with high throughput and low latency.",
    "Manageability: Providing single-pane management, automation, and orchestration."
  ]},
  {module: 1, n: 3, q: "Compare the key data center management processes (Monitoring, Reporting, Provisioning, Planning, Maintenance).", answer: [
    "Monitoring: Continuously gathering information on data center resources.",
    "Reporting: Presenting details on resource performance, capacity, and utilization.",
    "Provisioning: Configuring and allocating resources to meet operational requirements.",
    "Planning: Estimating the amount of resources required to support future business operations.",
    "Maintenance: Ensuring proper functioning of resources and resolving incidents."
  ]},
  {module: 2, n: 4, q: "Describe the five essential characteristics of cloud computing according to NIST.", answer: [
    "On-demand self-service: Provisioning computing capabilities automatically without human interaction.",
    "Broad network access: Capabilities are available over the network and accessed through standard mechanisms.",
    "Resource pooling: The provider's computing resources are pooled to serve multiple consumers using a multi-tenant model.",
    "Rapid elasticity: Capabilities can be elastically provisioned and released to scale rapidly outward and inward.",
    "Measured service: Cloud systems automatically control and optimize resource use by leveraging metering."
  ]},
  {module: 2, n: 5, q: "Compare the three cloud service models (IaaS, PaaS, SaaS) in terms of consumer and provider responsibilities.", answer: [
    "IaaS (Infrastructure as a Service): The provider manages the underlying physical infrastructure; the consumer controls operating systems, storage, deployed applications, and host firewalls.",
    "PaaS (Platform as a Service): The provider manages infrastructure, operating systems, and databases; the consumer deploys applications using supported languages and tools.",
    "SaaS (Software as a Service): The provider manages the underlying infrastructure and applications; the consumer uses the application via a browser or client, with limited user configuration."
  ]},
  {module: 2, n: 6, q: "Explain the characteristics of Big Data (the 6 Vs).", answer: [
    "Volume: Massive volumes of data requiring scalable storage and analysis.",
    "Velocity: Rapidly changing and streaming data requiring real-time analysis.",
    "Variety: Diverse data from numerous structured and unstructured sources.",
    "Variability: Constantly changing meaning of data.",
    "Veracity: Varying quality and reliability requiring trust and transformation.",
    "Value: Deriving cost-effectiveness and business value."
  ]},
  {module: 2, n: 7, q: "Discuss the imperatives for third platform transformation.", answer: [
    "Operating model transformation: Adoption of the ITaaS model with self-service provisioning by lines of business.",
    "Organizational transformation: Emergence of new roles such as cloud architect, service manager, and capacity planner.",
    "Technology transformation: Application transformation (cloud, analytics, mobile) and infrastructure transformation (standardization, consolidation, automation).",
    "Skills transformation: Developing new technical and soft skills."
  ]}
];
const renderMCQs = module => mcqs.filter(q => q.module === module).map(q =>
  `<div class="qa"><div class="qq"><span class="qn">${q.n}.</span> ${q.q}</div><div class="opts">${q.options.map((option, i) => {
    const letter = String.fromCharCode(65 + i);
    return `<div class="opt" data-c="${letter === q.answer ? "1" : ""}">${letter}) ${option}</div>`;
  }).join("")}</div></div>`
).join("");
const renderEssays = module => essays.filter(q => q.module === module).map(q =>
  `<div class="qa"><div class="qq"><span class="qn">Q${q.n}.</span> ${q.q}</div><div class="qa-a"><div class="alab">Model answer:</div><ol>${q.answer.map(item => `<li>${item}</li>`).join("")}</ol></div></div>`
).join("");

/* ===== db.js helpers: same visual language as cv.js (cards, dstep, flow, inline SVG on navy) ===== */
const T=(x,y,s,o={})=>`<text x="${x}" y="${y}" fill="${o.f||"#EAF2FF"}" font-size="${o.s||13}" text-anchor="${o.a||"middle"}" font-weight="${o.w||700}">${s}</text>`;
const R=(x,y,w,h,f,o={})=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r??8}" fill="${f}"${o.st?` stroke="${o.st}" stroke-width="${o.sw||2}"`:""}${o.d?` stroke-dasharray="${o.d}"`:""}/>`;
const C=(x,y,r,f)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`;
const L=(d,c="#9fb4d3",w=3)=>`<path d="${d}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
const AR=(x1,y,x2)=>L(`M${x1} ${y}H${x2}m-6-6 6 6-6 6`);
const CL=(x,y,s,f,st)=>`<path transform="translate(${x} ${y}) scale(${s})" d="M12 36a10 10 0 0 1 2-19a14 14 0 0 1 27-3a11 11 0 0 1 5 22z" fill="${f}"${st?` stroke="${st}" stroke-width="2"`:""}/>`;
const DG=(vb,label,body,cap)=>`<div class="dg wide"><svg viewBox="${vb}" role="img" aria-label="${label}">${body}</svg>${cap?`<div class="dgcap">${cap}</div>`:""}</div>`;
const ILL=b=>`<svg class="ill" viewBox="0 0 140 80" role="img" aria-hidden="true">${R(0,0,140,80,"#0B1F3A")}${b}</svg>`;
const ST=(h,p,svg="",n="")=>`<div class="dstep">${svg}<div class="tx2"><h5>${n?`<span class="n2">${n}</span>`:""}${h}</h5><p>${p}</p></div></div>`;
const GRID=a=>`<div class="dgrid">${a.join("")}</div>`;
const TAGS=a=>`<div class="tags big">${a.map(x=>`<span>${x}</span>`).join("")}</div>`;
const TIP=s=>`<div class="call tip"><b>Exam tip:</b> ${s}</div>`;
const CARDS=a=>`<div class="cards">${a.map(([h,p])=>`<div class="card"><h5>${h}</h5><p>${p}</p></div>`).join("")}</div>`;
const TILES=a=>`<div class="tiles">${a.map(([s,v])=>`<div class="tile"><span>${s}</span><strong>${v}</strong></div>`).join("")}</div>`;
const SEC=(h,b)=>`<section class="block"><h3>${h}</h3>${b}</section>`;
const CMP=(head,rows)=>`<div class="tw"><table class="cmp"><tr>${head.map(h=>`<th>${h}</th>`).join("")}</tr>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`;
const FLOW=a=>`<ol class="flow">${a.map(([h,p],i)=>`<li><span class="n">${i+1}</span><div><h5>${h}</h5><p>${p}</p></div></li>`).join("")}</ol>`;
const BOT=(p,n)=>`<div class="botnav" aria-label="التنقل بين الأجزاء">${p?`<button data-sub="${p[0]}">‹ Previous: ${p[1]}</button>`:"<span></span>"}${n?`<button data-sub="${n[0]}">Next: ${n[1]} ›</button>`:"<span></span>"}</div>`;

/* ---- Module 1: contributors to digital-universe growth (replaces the old tag boxes) ---- */
const growthSvg=DG("0 0 700 330","Five contributors feed the growth of the digital universe",
  [["IT","Proliferation of IT"],["Internet use","Growing Internet usage"],["Social media","Social media content"],["Smart devices","Smart devices"],["Internet of Things (IoT)","Internet-connected equipment and sensors"]].map(([t,d],i)=>{const y=14+i*62,io=i==4;
    return R(14,y,290,52,"#162E52",{st:io?"#FFC400":"#2a4777",sw:io?2:1.5})+R(14,y,6,52,io?"#FFC400":"#00C2D8",{r:3})+T(34,y+22,t,{a:"start",s:14,f:io?"#FFC400":"#EAF2FF"})+T(34,y+40,d,{a:"start",s:10.5,f:"#9fb4d3",w:400})+L(`M304 ${y+26}C360 ${y+26} 372 165 420 165`,"#9fb4d3",2)}).join("")+
  L("M414 159l8 6-8 6","#9fb4d3",2)+
  R(424,60,262,210,"#162E52",{st:"#22C55E",sw:2})+T(555,92,"DIGITAL UNIVERSE",{f:"#22C55E",s:14})+T(555,148,"4.4 trillion GB",{s:24,f:"#FFC400"})+T(555,172,"generated every year",{s:12,f:"#9fb4d3",w:400})+T(555,222,"(approximate annual data generation)",{s:10.5,f:"#9fb4d3",w:400}),
  "Each contributor adds to data growth; IoT = Internet-connected equipment and sensors.");

/* ---- Module 1: why storage management + storage system properties (replace tag chips) ---- */
const whyDiag=DG("0 0 700 210","Intelligent storage solutions lead to three outcomes",
  R(14,60,220,90,"#162E52",{st:"#FFC400",sw:2})+T(124,100,"Intelligent",{s:15,f:"#FFC400"})+T(124,120,"storage solutions",{s:15,f:"#FFC400"})+T(124,140,"implemented by organizations",{s:10,f:"#9fb4d3",w:400})+
  [["To efficiently store","and manage information"],["To gain","competitive advantage"],["To derive new","business opportunities"]].map(([a,b],i)=>{const y=12+i*64;
    return L(`M234 105C270 105 270 ${y+27} 300 ${y+27}`,"#9fb4d3",2)+L(`M294 ${y+21}l8 6-8 6`,"#9fb4d3",2)+R(304,y,380,54,"#162E52",{st:"#2a4777",sw:1.5})+R(304,y,6,54,"#22C55E",{r:3})+T(326,y+23,a,{a:"start",s:13})+T(326,y+42,b,{a:"start",s:13})}).join(""),
  "Organizations implement intelligent storage solutions to achieve these three outcomes.");
const arrayDiag=DG("0 0 700 220","A storage system (array) provides five properties",
  R(14,20,250,180,"#162E52",{st:"#00C2D8",sw:2})+T(139,48,"STORAGE SYSTEM",{s:14,f:"#00C2D8"})+T(139,66,"(array)",{s:12,f:"#9fb4d3",w:500})+
  [0,1,2,3].map(i=>R(44,82+i*28,190,20,"#1d3a66",{r:5})+C(60,92+i*28,4,"#22C55E")+R(180,89+i*28,40,6,"#2a4777",{r:3})).join("")+
  T(139,196,"storage devices assembled together",{s:10,f:"#9fb4d3",w:400}).replace("y=\"196\"","y=\"192\"")+
  AR(276,110,336)+T(306,98,"provides",{s:11,f:"#9fb4d3",w:400})+
  R(346,12,340,196,"#162E52",{st:"#2a4777",sw:1.5})+
  ["Capacity","Scalability","Performance","Reliability","Security"].map((t,i)=>R(364,26+i*35,304,28,"#1d3a66",{r:6})+L(`M376 ${40+i*35}l5 5 9-10`,"#22C55E",2.5)+T(402,45+i*35,t,{a:"start",s:13})).join(""),
  "Storage devices are assembled within a storage system (array).");

/* ---- Module 1 drawings ---- */
const dataVsInfo=DG("0 0 700 150","Raw data processed in context becomes information",
  R(20,25,190,100,"#162E52",{st:"#2a4777",sw:1.5})+T(115,50,"DATA",{f:"#FFC400",s:14})+T(115,80,"120 · 95 · 143 · 88",{s:15,w:500})+T(115,102,"raw facts, no context",{s:11,f:"#9fb4d3",w:400})+
  AR(226,75,306)+T(266,60,"process",{s:11,f:"#9fb4d3",w:400})+T(266,100,"+ context",{s:11,f:"#9fb4d3",w:400})+
  R(330,25,350,100,"#162E52",{st:"#22C55E",sw:1.5})+T(505,50,"INFORMATION",{f:"#22C55E",s:14})+
  [[34,44],[48,40],[40,46]].map(([a,p],i)=>R(400+i*85,108-a,24,a,"#00C2D8",{r:3})+R(428+i*85,108-p,24,p,"#FFC400",{r:3})).join("")+
  T(505,121,"actual vs projected sales → decision",{s:10,f:"#9fb4d3",w:400}),
  "Data becomes information when it is processed and presented in a context that supports decisions.");
const spectrum=DG("0 0 700 120","Spectrum from unstructured to structured data",
  L("M20 16H676m-8-6 8 6-8 6","#9fb4d3",2.5)+
  [["Unstructured","Text, PDFs, images, videos","#2a4777"],["Quasi-structured","Clickstream data","#2a5f8f"],["Semi-structured","Spreadsheets, XML files","#1f7a95"],["Structured","Databases","#16a34a"]].map(([t,e,f],i)=>R(20+i*168,34,152,44,f)+T(96+i*168,61,t,{s:13})+T(96+i*168,98,e,{s:10.5,f:"#9fb4d3",w:400})).join(""),
  "From no inherent structure (left) to a defined data model (right). Unstructured data is the fastest-growing type (slide: \"Increasing Growth\").");
const dcSvg=(()=>{const col=(x,t,it)=>R(x,52,200,176,"#162E52",{st:"#2a4777",sw:1.5})+T(x+100,78,t,{s:14,f:"#00C2D8"})+it.map((s,i)=>R(x+20,94+i*32,160,24,"#1d3a66",{r:6})+T(x+100,110+i*32,s,{s:12,w:500})).join("");
  return DG("0 0 700 246","A data center has three components: facility, IT equipment, support infrastructure",
  R(10,8,680,230,"#0d2137",{st:"#FFC400",d:"8 6"})+T(350,34,"DATA CENTER",{s:16,f:"#FFC400"})+col(30,"Facility",["Building","Floor space"])+col(250,"IT equipment",["Compute","Storage","Network"])+col(470,"Support infrastructure",["Power supply","Fire detection","HVAC","Security"]),
  "Three components: facility + IT equipment + support infrastructure.");})();
const platSvg=DG("0 0 700 240","Three computing platforms with growing users and applications",
  L("M30 16H660m-8-6 8 6-8 6","#FFC400",2.5)+
  [[30,140,"#2a4777",["1st Platform","Mainframe + terminals","Millions of users","Thousands of apps"]],[250,90,"#1f7a95",["2nd Platform","Client / Server","Hundreds of millions of users","Tens of thousands of apps"]],[470,36,"#0e8fa1",["3rd Platform","Cloud · Big Data","Mobile · Social","Billions of users","Millions of apps"]]].map(([x,y,f,ls])=>R(x,y,200,230-y,f,{r:10})+ls.map((s,i)=>T(x+100,y+24+i*19,s,i?{s:11.5,w:500}:{s:14,f:"#FFC400"})).join("")).join(""),
  "More users and more applications on every new platform.");
const ilTypes=[
  ILL(C(30,28,10,"#FFC400")+R(60,16,24,16,"#00C2D8",{r:3})+L("M100 20l12 20h-24z","#22C55E",0)+`<path d="M100 20l12 20h-24z" fill="#22C55E"/>`+R(24,48,30,18,"#9fb4d3",{r:3})+C(80,56,9,"#ff6b81")+R(104,50,18,18,"#2a4777",{r:3})),
  ILL([[90,16],[60,26],[100,36],[40,46],[80,56]].map(([w,y],i)=>R(14,y,w,5,i%2?"#9fb4d3":"#2a5f8f",{r:2})).join("")+R(14,66,30,5,"#00C2D8",{r:2})),
  ILL(T(14,24,"&lt;order&gt;",{a:"start",s:10,f:"#00C2D8",w:500})+T(28,40,"&lt;id&gt;7&lt;/id&gt;",{a:"start",s:10,f:"#FFC400",w:500})+T(28,54,"&lt;qty&gt;3&lt;/qty&gt;",{a:"start",s:10,f:"#FFC400",w:500})+T(14,68,"&lt;/order&gt;",{a:"start",s:10,f:"#00C2D8",w:500})),
  ILL(R(14,14,112,52,"#162E52",{r:4,st:"#2a4777",sw:1.5})+R(14,14,112,12,"#22C55E",{r:4})+L("M51 14V66M88 14V66M14 38H126M14 52H126","#2a4777",1.5))];
const ilStore=[
  ILL(R(20,12,100,56,"#162E52",{st:"#2a4777",sw:1.5})+C(58,40,20,"#2a4777")+C(58,40,5,"#9fb4d3")+L("M106 20L68 38","#FFC400",3)),
  ILL(C(70,40,30,"#2a4777")+C(70,40,8,"#0B1F3A")+L("M48 28a26 26 0 0 1 22-8","#00C2D8",3)+C(70,40,3,"#9fb4d3")),
  ILL(R(24,20,76,40,"#162E52",{r:6,st:"#00C2D8"})+R(34,28,20,14,"#2a4777",{r:3})+R(62,28,20,14,"#2a4777",{r:3})+R(100,30,18,20,"#FFC400",{r:2})+L("M104 36h10M104 44h10","#3a2b00",2))];

/* ---- Module 2 drawings ---- */
const svcSvg=(()=>{const rows=[["Applications","",56],["Platform","OS, runtime, DB",116],["Infrastructure","servers, storage, network",176]];
  const cols=[["IaaS","Infrastructure as a Service",170,[1,1,0],"Consumer controls OS, storage, apps"],["PaaS","Platform as a Service",360,[1,0,0],"Consumer deploys own apps"],["SaaS","Software as a Service",550,[0,0,0],"e.g. web-based email"]];
  return DG("0 0 710 300","Who manages each layer in IaaS, PaaS and SaaS",
  rows.map(([a,b,y])=>T(12,y+24,a,{a:"start",s:12.5})+(b?T(12,y+40,b,{a:"start",s:9.5,f:"#9fb4d3",w:400}):"")).join("")+
  cols.map(([h,sub,x,m,ex])=>T(x+75,26,h,{s:17,f:"#FFC400"})+T(x+75,44,sub,{s:10,f:"#9fb4d3",w:400})+rows.map((r,i)=>m[i]?R(x,r[2],150,52,"#FFC400")+T(x+75,r[2]+31,"Consumer",{f:"#3a2b00"}):R(x,r[2],150,52,"#1d3a66",{st:"#00C2D8",sw:1.5})+T(x+75,r[2]+31,"Provider",{f:"#00C2D8"})).join("")+T(x+75,250,ex,{s:10,f:"#9fb4d3",w:400})).join("")+
  R(170,270,14,14,"#FFC400",{r:3})+T(192,282,"Consumer controls",{a:"start",s:11,w:500})+R(360,270,14,14,"#1d3a66",{r:3,st:"#00C2D8",sw:1.5})+T(382,282,"Provider manages",{a:"start",s:11,w:500}),
  "The provider always manages the underlying infrastructure; the consumer controls more as you go down to IaaS.");})();
const ilDeploy=[
  ILL(CL(33,4,1.6,"#2a4777","#00C2D8")+[30,50,70,90,110].map(x=>C(x,70,4,"#FFC400")).join("")),
  ILL(CL(45,4,1.3,"#2a4777","#00C2D8")+R(62,38,16,12,"#FFC400",{r:3})+L("M65 38v-4a5 5 0 0 1 10 0v4","#FFC400",2.5)+T(70,72,"one organization",{s:9,f:"#9fb4d3",w:400})),
  ILL(CL(46,0,1.1,"#2a4777","#00C2D8")+L("M70 38V46M35 52V46H105V52","#9fb4d3",2)+[20,55,90].map(x=>R(x,52,30,20,"#162E52",{r:4,st:"#00C2D8",sw:1.5})).join("")),
  ILL(CL(8,12,1,"#2a4777","#22C55E")+CL(82,12,1,"#2a4777","#00C2D8")+L("M56 34H84","#FFC400",3)+T(31,66,"Private",{s:9,f:"#9fb4d3",w:400})+T(105,66,"Public",{s:9,f:"#9fb4d3",w:400}))];
const bigPipe=DG("0 0 710 110","Big Data analytics pipeline",
  [["Data sources",["Structured &","non-structured"]],["Storage",["Distributed,","non-relational"]],["MapReduce",["Batch, parallel","compute"]],["Query",["Process, store","& retrieve"]],["Insights",["Decisions &","business value"]]].map(([t,s],i)=>R(14+i*144,20,104,72,i==4?"#16a34a":"#162E52",{st:"#2a4777",sw:1.5})+T(66+i*144,44,t,{s:13,f:i==4?"#fff":"#00C2D8"})+s.map((l,j)=>T(66+i*144,62+j*14,l,{s:10,f:i==4?"#fff":"#9fb4d3",w:400})).join("")+(i<4?AR(124+i*144,56,150+i*144):"")).join(""),
  "Analytics solution components: storage + MapReduce + query, turning data into insight.");
const M1=`
 <div class="call"><b>Module 1: Introduction to Information Storage</b><br>Digital data, information, storage systems, data centers, and the evolution of computing platforms.</div>
 ${SEC("Learning Objectives",CARDS([["Data &amp; information","Describe digital data, its types, and information."],["Data center","Describe a data center and its key characteristics."],["Management","Describe key data center management processes."],["Platforms","Describe the evolution of computing platforms."]]))}
 ${SEC("The Digital Universe and Information Storage",
  `<p>The digital universe is created and defined by software. Digital data is continuously generated, collected, stored, and analyzed through software. The proliferation of IT, Internet usage, social media, and smart devices adds to data growth, and the Internet of Things (IoT) is adding to it as well.</p>`+growthSvg+
  `<p>IoT is made up of Internet-connected equipment and sensors.</p><h4>Why information storage and management?</h4><p>Organizations depend on continuous, reliable access to information: they must store, protect, process, manage, and leverage it. They are increasingly implementing <b>intelligent storage solutions</b>:</p>`+whyDiag+
  dataVsInfo+
  CMP(["","Digital data","Information"],[["Meaning","Collection of facts transmitted and stored electronically and processed through software","Processed data presented in a specific context to enable interpretation and decision-making"],["Example","Text, photos, video (on desktops, laptops, tablets, mobiles; stored internally or externally)","Annual sales data processed into a report: average sales and actual vs projected sales"]])+
  `<p>New architectures and technologies have emerged for extracting information from <b>non-structured data</b>.</p>`)}
 ${SEC("Types of Digital Data",spectrum+GRID([
  ST("Unstructured","No inherent structure; usually stored as different file types: text documents, PDFs, images, videos.",ilTypes[0]),
  ST("Quasi-structured","Textual data with an erratic format that can be formatted with effort and software tools. Example: clickstream data.",ilTypes[1]),
  ST("Semi-structured","Text files with an apparent pattern that enables analysis. Examples: spreadsheets and XML files.",ilTypes[2]),
  ST("Structured","Defined data model, format, and structure. Example: databases.",ilTypes[3])])+
  TIP("clickstream = <b>quasi-structured</b>; spreadsheets/XML = <b>semi-structured</b>; databases = <b>structured</b>."))}
 ${SEC("Storage Devices and Systems",
  `<p>Information is stored on <b>non-volatile</b> media.</p>`+GRID([
  ST("Magnetic storage","Hard disk drives (HDD) and magnetic tape.",ilStore[0]),
  ST("Optical storage","Blu-ray discs, DVDs, and CDs.",ilStore[1]),
  ST("Flash-based storage","Solid-state drives (SSD), memory cards, and USB thumb drives.",ilStore[2])])+
  `<div class="call">Devices are assembled into a <b>storage system (array)</b> that provides high capacity, scalability, performance, reliability, and security:</div>`+arrayDiag+
  `<p>Storage systems and other IT infrastructure are housed in data centers.</p>`+TIP("<b>SSD</b> is the flash-based device."))}
 ${SEC("Data Centers",
  `<div class="call"><b>Definition:</b> A facility that houses compute, storage, and network equipment, together with supporting infrastructure, to provide centralized data-processing capabilities.</div>`+dcSvg+
  `<h4>Key characteristics</h4>`+CARDS([["Availability","Critical services continue after a disruptive event."],["Data integrity","Accuracy; protection from unauthorized modification."],["Security","Prevents unauthorized access to IT equipment and data."],["Capacity","Enough space and resources to support operations."],["Scalability","Accommodates massive changes in workload and data volume."],["Performance","Optimal for mixed workloads: high throughput, low latency."],["Manageability","Single-pane management, automation, and orchestration."]])+
  TIP("<b>Data integrity</b> = protection from unauthorized modification."))}
 ${SEC("Data Center Management Processes",FLOW([["Monitoring","Continuously gathering information on data center resources."],["Reporting","Presenting resource performance, capacity, and utilization details."],["Provisioning","Configuring and allocating resources to meet capacity, availability, performance, and security requirements."],["Planning","Estimating the resources required to support business operations."],["Maintenance","Ensuring resources function properly and resolving incidents."]]))}
 ${SEC("Evolution of Computing Platforms",platSvg+CMP(["Platform","Model","Users","Apps","Challenges"],[["1st","Mainframes, mini computers, and terminals: applications and databases hosted centrally; users connect through terminals","Millions","Thousands","Substantial CAPEX and OPEX, high acquisition cost, floor space and energy needs"],["2nd","Client-server, a distributed application architecture: servers receive and process client requests over LAN/WAN; users connect through a client program or web interface","Hundreds of millions","Tens of thousands","IT silos, hardware/software maintenance overhead, scaling to more users and workloads"],["3rd","Cloud, Big Data, Mobile, Social (the four pillars)","Billions","Millions","Transforms how organizations use technology in business operations"]])+
  TIP("1st = mainframe, 2nd = client-server, 3rd = <b>cloud, Big Data, mobile, social</b>."))}
 ${SEC("Module 1 Summary",li(["Digital data, types of digital data, and information","Data center and its key characteristics","Key data center management processes","Evolution of computing platforms"]))}
 ${BOT(null,["db-m2","Module 2: Third Platform"])}`;

const M2=`
 <div class="call"><b>Module 2: Third Platform Technologies</b><br>Cloud computing, Big Data analytics, social networking, mobile computing, and transformation to the third platform.</div>
 ${SEC("Learning Objectives",CARDS([["Cloud computing","Describe cloud computing and its essential characteristics."],["Cloud models","Describe cloud service models and deployment models."],["Big Data","Describe Big Data analytics."],["Social &amp; mobile","Describe social networking and mobile computing."],["Transformation","Describe third-platform infrastructure characteristics and the imperatives for transformation."]]))}
 ${SEC("1. Cloud Computing",
  `<div class="call"><b>Cloud computing (NIST SP 800-145):</b> ubiquitous, convenient, on-demand network access to a shared pool of configurable resources (servers, storage, networks, applications, services) that can be rapidly provisioned and released with <b>minimal management effort or service-provider interaction</b>.</div>`+
  li(["A cloud is a collection of network-accessible hardware and software resources organized into IT resource pools in data centers; consumers hire them as services.","Infrastructure covers compute, storage, network, platform software, and applications, accessed over a LAN/WAN from desktops, laptops, tablets, and mobiles."])+
  `<h4>Essential characteristics (NIST)</h4>`+GRID([
  ST("On-demand self-service","Consumers provision resources automatically, without human interaction with the provider.","","1"),
  ST("Broad network access","Available over the network through standard mechanisms to varied client devices.","","2"),
  ST("Resource pooling","Provider resources are pooled to serve multiple consumers (multi-tenant model).","","3"),
  ST("Rapid elasticity","Capabilities are provisioned and released elastically to scale outward and inward rapidly.","","4"),
  ST("Measured service","Resource use is automatically controlled, optimized, and metered.","","5")])+
  `<h4>Cloud service models</h4>`+svcSvg+CMP(["Model","Consumer does","Provider manages"],[["<b>IaaS</b>","Provisions processing, storage, networks; deploys and runs software incl. operating systems and apps; controls OS, storage, deployed apps, and limited networking (host firewalls)","Underlying cloud infrastructure"],["<b>PaaS</b>","Deploys own or acquired applications using supported languages, libraries, services, and tools; controls apps and possibly hosting-environment configuration","Network, servers, operating systems, storage"],["<b>SaaS</b>","Uses provider applications through a thin client (web browser) or program interface; limited user-specific settings","Infrastructure and application capabilities"]])+
  TIP("on-demand self-service = provisioning without human interaction; PaaS = deploy apps without managing infrastructure; web email = <b>SaaS</b>."))}
 ${SEC("Cloud Deployment Models",GRID([
  ST("Public cloud","Open use by the general public; free, subscription, or pay-per-use.",ilDeploy[0]),
  ST("Private cloud","Exclusive use by a single organization (multiple business units).",ilDeploy[1]),
  ST("Community cloud","Exclusive use by a community of organizations with shared concerns.",ilDeploy[2]),
  ST("Hybrid cloud","Composition of two or more distinct cloud infrastructures (private, community, public).",ilDeploy[3])])+
  CMP(["Model","Ownership and location","Key points"],[["<b>Public</b>","Owned, managed, operated by a business, academic, or government organization; on the provider's premises","Consumer concerns: network availability, multi-tenancy risks, visibility and control of resources and data, restrictive default service levels"],["<b>Private</b>","Owned, managed, operated by the organization, a third party, or both; on or off premises","Chosen for privacy, external-threat, and control concerns (two variants, see below)"],["<b>Community</b>","Owned, managed, operated by one or more community organizations, a third party, or both; on or off premises","Shared deployment and service costs lower individual investment; may cost more than public; greater control and protection than public (two variants, see below)"],["<b>Hybrid</b>","Two or more of private, community, public","Distinct infrastructures composed together"]])+
  `<h4>Private and community cloud variants</h4>`+CMP(["Variant","Description"],[["<b>On-premise private cloud</b>","Deployed by an organization in its own data center, within its own premises"],["<b>Externally-hosted private cloud</b> (off-premise)","The organization outsources the implementation of the private cloud to an external cloud service provider; resources are dedicated to that organization"],["<b>On-premise community cloud</b>","One or more organizations provide cloud services consumed by the community; the infrastructure is deployed on the premises of the providing organizations; consumers connect over a secure network"],["<b>Externally-hosted community cloud</b>","The community outsources implementation to an external provider; infrastructure is hosted on the provider's premises, not within any participant's; the provider manages it and facilitates an exclusive community environment; each organization's IT connects over a secure network; infrastructure may be shared with multiple tenants but community resources are separated from other tenants by the provider's access policies"]])+
  TIP("single organization = <b>private</b>; two or more infrastructures = <b>hybrid</b>."))}
 ${SEC("2. Big Data Analytics",
  `<div class="call"><b>Big Data:</b> information assets whose high <b>volume, velocity, and variety</b> require new technical architectures and analytical methods to gain insights and derive business value. It includes structured and non-structured data, needs highly scalable storage and new processing tools, and enables better decisions.</div>`+
  `<h4>Characteristics (6 Vs)</h4>`+CARDS([["Volume","Massive quantities of data: storage and analysis challenges."],["Velocity","Rapidly changing data: real-time analysis challenges."],["Variety","Diverse data from many sources: integration and analysis challenges."],["Variability","Data meaning changes over time: gathering and interpretation challenges."],["Veracity","Varying quality and reliability: transformation and trust challenges."],["Value","Solution must be cost-effective and deliver business value."]])+
  `<h4>Data repositories</h4><p>Data for analytics typically comes from data warehouses and data lakes.</p>`+CMP(["","Data warehouse","Data lake"],[["What","Central repository of integrated data from different sources","Stores exact or near-exact copies of source data"],["Structure","Current and historical data in structured form","Data kept in source format"],["Organized","Designed in advance for queries and analysis","Classified, organized, or analyzed only when accessed"],["Use","Supports decisions","Analysts apply their own analysis techniques"]])+
  `<h4>Analytics solution components</h4>`+bigPipe+
  CARDS([["Storage","Distributed architecture for non-relational and non-structured data."],["MapReduce","Batch-processing model: parallel computation across many servers."],["Query","Efficient processing, storage, and retrieval; platform for user-friendly analytics systems."]])+
  `<h4>Analytics use cases</h4>`+CARDS([["Healthcare","Consolidate diagnostic information, monitor patients in real time, improve care."],["Finance","Analyze purchase histories, build customer profiles, improve promotions, detect fraud."],["Retail","Analyze transactions, pricing, and behavior to optimize pricing, anticipate demand, manage inventory."],["Government","Social services, education, defense, crime prevention, and finance."]])+
  TIP("<b>Veracity</b> = quality/trustworthiness; <b>data lake</b> = raw copy, organized on access; <b>MapReduce</b> = batch parallel processing."))}
 ${SEC("3. Social Networking and Mobile Computing",CARDS([["Social networking","Practice of establishing connections with individuals to expand social and/or business contacts, forming a social network: a structure of many-to-many human connections. Online services provide a global web-based platform to build networks and let individuals and organizations connect and share digital content."],["Social network analysis","Process of analyzing relationship patterns in social networks to gain insights: collect data from multiple sources, identify relationships, and extract new information. Determines the effectiveness of relationships and identifies influential people, associations, and trends (techniques from social sciences, mathematics, statistics, and computer science)."],["Brand networking","Showcase products, interact with customers, improve visibility, gain insights."],["Enterprise collaboration","Let employees communicate and collaborate."],["Marketing","Advertise on individuals' pages; use analytics to find potential customers."],["Customer support","Monitor customer comments and resolve issues."],["Mobile computing","Use of mobile devices (laptops, tablets, smartphones, PDAs) to remotely access applications and information on the go over a wireless network. Client devices connect via LAN/WAN and the Internet to application servers in an enterprise data center or cloud."]]))}
 ${SEC("4. Transforming to the Third Platform",
  `<h4>Drivers</h4>`+CARDS([["New business models","Create or improve models; decide better using data insights."],["Agility","Operational agility, innovation, shorter time to market."],["Intelligent operations","Better efficiency using intelligent tools and strategies."],["New products and services","New offerings and revenue streams."],["Mobility","Ubiquitous access; better collaboration, productivity, profitability."],["Social networking","More visibility, market reach, and better service."]])+
  `<h4>Third-platform infrastructure characteristics</h4>`+CMP(["Characteristic","Meaning"],[["Availability","Critical services continue to be available following a disruptive event (resilient infrastructure and application design)"],["Security","Challenges: unauthorized access, data ownership, malware, governance, compliance; security must be ensured across multiple third platform technologies"],["Scalability","Changing workloads and data volumes at massive scale"],["Performance","Mixed workloads with high throughput and low latency"],["Ease of access","Reach applications and information from any location using mobile devices"],["Interoperability","Systems share information and services through APIs, web services, or middleware"],["Manageability","Single pane of management, automation, multi-party orchestration"]])+
  `<h4>Transformation imperatives</h4>`+GRID([
  ST("Operating model","Adopt IT as a Service (ITaaS); lines of business (LoBs) provision IT through a self-service portal.","","1"),
  ST("Organization","New roles: service manager, cloud architect, capacity planner, service operation manager.","","2"),
  ST("Technology","Applications: cloud, analytics, mobile. Infrastructure: standardization, consolidation, automation.","","3"),
  ST("Skills","Develop new technical and soft skills.","","4")])+
  TIP("<b>Interoperability</b> = APIs, web services, middleware; operating model transformation = <b>ITaaS</b>."))}
 ${SEC("Module 2 Summary",li(["Cloud computing and its essential characteristics","Cloud service models and cloud deployment models","Big Data analytics","Social networking and mobile computing","Characteristics of third platform infrastructure","Imperatives for third platform transformation"]))}
 ${BOT(["db-m1","Module 1"],["db-questions","Questions: MCQ &amp; Essay"])}`;

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS.db = {
  id: "db",
  title: "نظم حفظ واسترجاع البيانات",
  done: true,
  req: li([
    "<span class='en'>Module 1: Introduction to Information Storage</span>",
    "<span class='en'>Module 2: Third Platform Technologies</span>",
    "أسئلة <span class='en'>MCQ &amp; Essay</span> لكل موديول"
  ]),
  exam: li(["10 أسئلة <span class='en'>MCQ</span>", "سؤالين مقالي (<span class='en'>Essay</span>)"]),
  html: `<div class="cvroot">
<div class="subnav" role="tablist">
 <button data-sub="db-m1" aria-selected="true">Module 1: Information Storage</button>
 <button data-sub="db-m2" aria-selected="false">Module 2: Third Platform</button>
 <button data-sub="db-questions" aria-selected="false">Questions: MCQ &amp; Essay</button>
</div>

<div class="sp" id="db-m1">${M1}</div>

<div class="sp" id="db-m2" hidden>${M2}</div>

<div class="sp" id="db-questions" hidden>
 <div class="call"><b>Question Bank</b><br>Select an answer for each MCQ. Essay model answers are shown below their questions.</div>
 <section class="block"><h3>Module 1: Introduction to Information Storage — MCQs</h3>
  ${renderMCQs(1)}
 </section>
 <section class="block"><h3>Module 1 — Essay Questions</h3>
  ${renderEssays(1)}
 </section>
 <section class="block"><h3>Module 2: Third Platform Technologies — MCQs</h3>
  ${renderMCQs(2)}
 </section>
 <section class="block"><h3>Module 2 — Essay Questions</h3>
  ${renderEssays(2)}
 </section>
 <div class="botnav" aria-label="التنقل بين الأجزاء">
  <button data-sub="db-m2">‹ Previous: Module 2</button>
  <span></span>
 </div>
</div>
</div>`
};

})();
