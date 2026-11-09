(() => {
const li = items => "<ul>" + items.map(item => "<li>" + item + "</li>").join("") + "</ul>";

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS.iot = {id:"iot", title:"انترنت الأشياء", done:true,
  req: li(["كل اللي أخدناه خلال المحاضرات"]), exam: li(["مقالي (<span class='en'>Essay</span>)"]),
  html: `<div class="cvroot">
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><symbol id="i-globe" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.7 2.6 4 5.6 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.6-4-9s1.3-6.4 4-9z"/></g></symbol><symbol id="i-chip" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3"/></g></symbol><symbol id="i-waves" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><path d="M8.8 15.2a4.6 4.6 0 0 1 0-6.4"/><path d="M15.2 8.8a4.6 4.6 0 0 1 0 6.4"/><path d="M6.2 17.8a9 9 0 0 1 0-11.6"/><path d="M17.8 6.2a9 9 0 0 1 0 11.6"/></g></symbol><symbol id="i-shield" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 2.5V11c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V5.5L12 3z"/><path d="M9 11.5l2.2 2.2L15.5 9.5"/></g></symbol><symbol id="i-cloud" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18h10a4 4 0 0 0 .8-7.9A5.5 5.5 0 0 0 7.1 12 3.5 3.5 0 0 0 7 18z"/></g></symbol><symbol id="i-home" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5h4v5"/></g></symbol><symbol id="i-factory" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V10l5 3v-3l5 3V6h8v15H3z"/><path d="M17 6V3"/><path d="M7 17h2M12 17h2M17 17h2"/></g></symbol><symbol id="i-layers" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l10 5-10 5L2 8l10-5z"/><path d="M2 13l10 5 10-5"/></g></symbol><symbol id="i-bolt" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z"/></g></symbol><symbol id="i-gear" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1"/></g></symbol><symbol id="i-eye" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/></g></symbol><symbol id="i-thermo" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 4a2 2 0 0 1 4 0v9.3a4.5 4.5 0 1 1-4 0V4z"/><circle cx="12" cy="17.5" r="1.6" fill="currentColor" stroke="none"/><path d="M12 17.5V9"/></g></symbol><symbol id="i-link" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 0 0 6 .4l3-3a4 4 0 1 0-5.6-5.6L12 7.2"/><path d="M14 10a4 4 0 0 0-6-.4l-3 3a4 4 0 1 0 5.6 5.6L12 16.8"/></g></symbol><symbol id="i-blocks" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="8.5" y="13" width="7" height="7" rx="1.5"/></g></symbol><symbol id="i-list" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.5" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.5" cy="18" r="1.1" fill="currentColor" stroke="none"/></g></symbol><symbol id="i-book" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h13a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5z"/><path d="M5 17a2 2 0 0 1 2-2h12"/><path d="M9 7h6"/></g></symbol><symbol id="i-star" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 17l-5.4 2.8 1.1-6.1L3.2 9.4l6.1-.8L12 3z"/></g></symbol><symbol id="i-car" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16l1.5-6A2 2 0 0 1 7.4 8.5h9.2a2 2 0 0 1 1.9 1.5L20 16"/><rect x="3" y="16" width="18" height="3.5" rx="1"/><circle cx="7.5" cy="19.5" r="1.4"/><circle cx="16.5" cy="19.5" r="1.4"/></g></symbol><symbol id="i-heart" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5C7 16.5 3.5 13.3 3.5 9.6A4.6 4.6 0 0 1 12 6.7a4.6 4.6 0 0 1 8.5 2.9c0 3.7-3.5 6.9-8.5 10.9z"/><path d="M6 12h3l1.5-3 2.5 5L14.5 12H18"/></g></symbol><symbol id="i-wifioff" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18"/><path d="M5 10a11 11 0 0 1 4.5-2.6M12.5 7.6A11 11 0 0 1 19 10"/><path d="M8.5 13.5a6.5 6.5 0 0 1 6.8-.6"/><circle cx="12" cy="17.5" r="1.2" fill="currentColor" stroke="none"/></g></symbol><symbol id="i-db" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="8" ry="2.8"/><path d="M4 5.5v13c0 1.6 3.6 2.8 8 2.8s8-1.2 8-2.8v-13"/><path d="M4 12c0 1.6 3.6 2.8 8 2.8s8-1.2 8-2.8"/></g></symbol><symbol id="i-swap" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13"/><path d="M13.5 4.5L17 8l-3.5 3.5"/><path d="M20 16H7"/><path d="M10.5 12.5L7 16l3.5 3.5"/></g></symbol><symbol id="i-chart" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16h16"/><path d="M7 15l4-5 3 3 5-7"/><path d="M15 6h4v4"/></g></symbol><symbol id="i-target" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/></g></symbol><symbol id="i-drop" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3.5 4.2 6.5 7.8 6.5 11.2a6.5 6.5 0 1 1-13 0C5.5 10.8 8.5 7.2 12 3z"/></g></symbol><symbol id="i-fire" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c1 3-1.8 4.6-1.8 7a3.3 3.3 0 0 0 6.6 0c0-1-.5-2-1.2-2.9 2 1.3 3.4 3.4 3.4 5.9A7 7 0 1 1 5 13c0-4.5 5-6.5 7-10z"/></g></symbol><symbol id="i-cam" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8.5 7l1.5-2.5h4L15.5 7"/></g></symbol><symbol id="i-lock" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/><circle cx="12" cy="15.2" r="1.4" fill="currentColor" stroke="none"/></g></symbol><symbol id="i-net" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><circle cx="19" cy="17" r="2.2"/><path d="M7 7l3.5 8.5M17 8l-3.5 7.5M7.2 6h9.6M14 18h2.8"/></g></symbol><symbol id="i-phone" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M10.5 18.5h3"/></g></symbol><symbol id="i-scale" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"/><path d="M4 6h16"/><path d="M6 6l-2 5h4L6 6z"/><path d="M18 6l-2 5h4l-2-5z"/><path d="M12 6v12"/><path d="M8 21h8"/><path d="M12 18v3"/></g></symbol><symbol id="i-med" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></g></symbol></defs></svg>
<div class="call tip">Amber passages match the source lecture highlights. <b>Highlights only</b> collects them by lecture; <b>Expected Questions</b> applies the previous Mobile Apps exam pattern to IoT topics, but is not a guarantee.</div>
 <div class="subnav" role="tablist">
 <button data-sub="iot-l1" aria-selected="true">Lecture 1: Introduction to IoT</button>
 <button data-sub="iot-l2" aria-selected="false">Lecture 2: IoT Architecture</button>
 <button data-sub="iot-l3" aria-selected="false">Lecture 3: Challenges &amp; Networking</button>
 <button data-sub="iot-l45" aria-selected="false">Lectures 4–5: IoT Levels &amp; M2M</button>
 <button data-sub="iot-hl" aria-selected="false">Highlights only</button>
 <button data-sub="iot-exp" aria-selected="false">Expected Questions</button>
</div>

<div class="sp" id="iot-l1">
<div class="split"><div>
<div class="call">Internet of Things (IoT) <mark class="hl">is a massive network of physical devices embedded with sensors, software, electronics, and network which allows the devices to exchange or collect data and perform certain actions.</mark></div>
<p style="margin-top:12px">IoT aims at extending internet connectivity beyond computers and smartphones to other devices people use at home or for business.<br>The technology allows devices to get controlled across network infrastructure remotely.<br>As a result, <mark class="hl">it cuts down human effort and paves the way for accessing the connected devices easily.</mark><br>With autonomous control, the devices are operable without involving human interaction.<br><mark class="hl">IoT makes things virtually smart through AI algorithms, data collection,</mark> and networks enhancing our lives.</p>
</div><img src="assets/images/iot-overview.jpg" alt="A smart home living room"></div>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-blocks"/></svg>Simply put: Things + Internet</h3>
<p>IoT is made up of two words: Internet &amp; Things.</p>
<ul>
<li><mark class="hl">Things –</mark> physical devices, appliances, gadgets, etc.</li>
<li><mark class="hl">Internet –</mark> through which these devices are connected.</li>
</ul>
<div class="dg"><svg viewBox="0 0 960 300" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#37D5EA"/></marker></defs>
<rect x="30" y="40" width="330" height="120" rx="16" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="195" y="92" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">Things</text>
<text x="195" y="122" text-anchor="middle" fill="#9db8d2" font-size="14.5">physical devices, appliances, gadgets</text>
<text x="480" y="112" text-anchor="middle" fill="#FFC107" font-size="40" font-weight="900">+</text>
<rect x="600" y="40" width="330" height="120" rx="16" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="765" y="92" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">Internet</text>
<text x="765" y="122" text-anchor="middle" fill="#9db8d2" font-size="14.5">the network they connect through</text>
<path d="M480 168 V 205" stroke="#37D5EA" stroke-width="2.5" marker-end="url(#ah)"/>
<rect x="230" y="212" width="500" height="58" rx="29" fill="rgba(255,193,7,.1)" stroke="rgba(255,193,7,.55)" stroke-width="1.5"/>
<text x="480" y="249" text-anchor="middle" fill="#ffe082" font-size="18" font-weight="700">IoT = things connected, exchanging data</text>
</svg><div class="dgcap">Figure: what IoT is made of — Things + Internet (Lecture 1)</div></div>
<p><b>Examples:</b> pet tracking devices, diabetes monitors, AC sensors to adjust the temperature based on the outside temperature, smart wearables, and more.</p>
<p>IoT comprises things that have unique identities and are connected to internet.<br>By 2020 there will be a total of 50 billion devices / things connected to internet.<br>IoT is not limited to just connecting things to the internet but also allows things to communicate and exchange data.</p>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-book"/></svg>The formal definition</h3>
<div class="call">A dynamic global network infrastructure with self-configuring capabilities based on standard and interoperable communication protocols where physical and virtual "things" have identities, physical attributes and virtual personalities and use intelligent interfaces, and are seamlessly integrated into information network, often communicate data associated with users and their environments.</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-target"/></svg><mark class="hl">Characteristics of IoT</mark></h3>
<div class="cards">
<div class="card"><h5>1. Dynamic &amp; Self Adapting</h5><p>IoT devices and systems may have the capability to dynamically adapt with the changing contexts and <mark class="hl">take actions based on their operating conditions, user's context or sensed environment.</mark><br>Eg: the surveillance system is adapting itself based on context and changing conditions.</p></div>
<div class="card"><h5>2. Self Configuring</h5><p><mark class="hl">allowing a large number of devices to work together to provide certain functionality.</mark></p></div>
<div class="card"><h5>3. Interoperable Communication Protocols</h5><p>Support a number of interoperable <mark class="hl">communication protocols and can communicate with other devices</mark> and also with infrastructure.</p></div>
<div class="card"><h5>4. Unique Identity</h5><p><mark class="hl">Each IoT device has a unique identity and a unique identifier (IP address).</mark></p></div>
<div class="card"><h5>5. Integrated into Information Network</h5><p>Devices are integrated into the information network, <mark class="hl">allow them to communicate and exchange data with other devices and systems.</mark></p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-layers"/></svg><mark class="hl">IoT Categories</mark></h3>
<div class="cards">
<div class="card"><h5><svg class="ic" aria-hidden="true"><use href="#i-home"/></svg>1. <mark class="hl">Consumer IoT (CIoT)</mark></h5><p><mark class="hl">refers to the use of IoT for consumer applications and devices. Common CIoT products include smartphones, wearables, smart assistants, home appliances, etc.</mark><br>Typically, <mark class="hl">CIoT solutions leverage Wi-Fi, Bluetooth, and ZigBee to facilitate connectivity.</mark> These technologies offer <mark class="hl">short-range</mark> communication suitable for deployments in smaller venues, such as homes and offices.<br>CIoT tends to focus on augmenting <mark class="hl">personal and home environments.</mark></p></div>
<div class="card"><h5><svg class="ic" aria-hidden="true"><use href="#i-blocks"/></svg><mark class="hl">Commercial IoT</mark></h5><p>While CIoT focuses on personal and home environments, <mark class="hl">commercial IoT,</mark> goes a bit further, delivering the benefits of IoT to larger venues: commercial office buildings, supermarkets, stores, hotels, healthcare facilities, and entertainment venues.<br>Use cases include monitoring environmental conditions, managing access to corporate facilities, and economizing utilities and consumption in hotels and other large venues. Many Commercial IoT solutions are geared towards improving customer experiences and <mark class="hl">business</mark> conditions.</p></div>
<div class="card"><h5><svg class="ic" aria-hidden="true"><use href="#i-factory"/></svg>2. <mark class="hl">Industrial IoT (IIoT)</mark></h5><p><mark class="hl">Industrial IoT (IIoT),</mark> is perhaps the most dynamic wing of the IoT industry. Its focus is on augmenting existing industrial systems, making them both more productive and more efficient.<br>IIoT deployments are typically found in large-scale factories and manufacturing plants and are often associated with industries like healthcare, agriculture, automotive, and logistics. The Industrial Internet is perhaps the most well-known example of IIoT.</p></div>
<div class="card"><h5>3. <mark class="hl">Infrastructure IoT</mark></h5><p><mark class="hl">Infrastructure IoT</mark> is concerned with the development of smart infrastructures that incorporate IoT technologies to boost efficiency, cost savings, maintenance, etc. This includes the <mark class="hl">ability to monitor and control operations of urban and rural infrastructures, such</mark> as bridges, railway tracks, and on- and offshore windfarms.<br>Technically, infrastructure IoT is a subset of IIoT — however, due to its significance, it's often treated as its own separate thing.</p></div>
<div class="card"><h5>4. <mark class="hl">Internet of Military Things (IoMT)</mark></h5><p>Often referred to as <mark class="hl">Battlefield IoT,</mark> the Internet of Battlefield Things, or simply IoBT. IoMT is <mark class="hl">the use of IoT in military settings and battlefield situations.</mark><br>It is chiefly aimed at increasing situational awareness, bolstering risk assessment, and improving response times. Common IoMT applications <mark class="hl">include connecting ships, planes, tanks, soldiers, drones,</mark> and even Forward Operating Bases via an interconnected system.<br>In addition, IoMT produces data that can be leveraged to improve military practices, systems, equipment, and strategy.</p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-waves"/></svg>IoT Enablers: why sensors matter</h3>
<p>System installers, repairers, craftsmen, electricians, plumbers, architects who connect devices and systems to the Internet for personal use and for commercial and other business uses.</p>
<p><mark class="hl">As the Internet of Things (IoT) enables devices to make intelligent decisions that generate positive business outcomes, it's the sensors that enable those decisions.</mark><br>Sensors <mark class="hl">provide greater visibility into connected systems and empower those systems to react intelligently to changes driven by both external forces and internal factors.</mark></p>
<div class="call"><mark class="hl">Sensors are the components that provide the actionable insights that power</mark> the IoT and enable organizations to <mark class="hl">make</mark> more effective business <mark class="hl">decisions.</mark><br>It's through this real-time measurement that the IoT can transform an organization's ability to react to change.</div>
<h4>Connectivity was designed device by device</h4>
<p><mark class="hl">Wi-Fi was designed for computers, and 4G LTE wireless targeted smartphones and portable devices.</mark> Both have been tremendously successful — and both were shaped by the devices they were intended for.<br>The same goes for 5G, the first generation of wireless technology designed with extremely small, low-power, and near-ubiquitous IoT devices in mind.</p>
<p>Unlike Wi-Fi and LTE devices, which we <mark class="hl">handle and plug into power sources</mark> on a daily basis, <mark class="hl">IoT sensors will operate autonomously for years at a time, often in inaccessible places, without recharging or replacement.</mark><br>An explosion of new protocols: the IoT is prompting the development of several different 5G communication standards, not just one or two network types.</p>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-list"/></svg>Baseline Technologies of IoT</h3>
<p>According to Jones, the top 10 emerging IoT technologies are:</p>
<div class="cards">
<div class="card"><h5>1. IoT Security</h5><p><mark class="hl">IoT Security: Security technologies will be required to protect IoT devices and platforms from both attacks</mark> and physical tampering, to encrypt their communications, and to address new challenges such as impersonating "things" or denial-of-sleep attacks that drain batteries.<br><mark class="hl">IoT security will be complicated by the fact that many "things" use simple processors and operating systems that may not support sophisticated security approaches.</mark></p></div>
<div class="card"><h5>2. IoT Analytics</h5><p><mark class="hl">IoT business models will exploit the information collected by "things" in many ways,</mark> which will demand new analytic tools and algorithms. As data volumes increase over the next five years, the needs of the IoT may diverge further from traditional analytics.</p></div>
<div class="card"><h5>3. <mark class="hl">IoT Device (Thing) Management</mark></h5><p><mark class="hl">IoT Device (Thing) Management:</mark> long-lived nontrivial "things" will require management and monitoring, including device monitoring, firmware and software updates, diagnostics, crash analysis and reporting, physical management, and security management. Tools must be capable of managing and monitoring thousands and perhaps even millions of devices.</p></div>
<div class="card"><h5>4. Low-Power, Short-Range IoT Networks</h5><p><mark class="hl">Low-power, short-range networks</mark> will dominate wireless IoT connectivity through 2025, far outnumbering connections using wide-area IoT networks. However, commercial and technical trade-offs mean that many solutions will coexist, with no single dominant winner.</p></div>
<div class="card"><h5>5. Low-Power, Wide-Area Networks</h5><p>Traditional cellular networks don't deliver a good combination of technical features and operational cost for those IoT applications that need wide-area coverage combined with relatively low bandwidth, good battery life, low hardware and operating cost, and high connection density. Emerging standards such as narrowband IoT will likely dominate this space.</p></div>
<div class="card"><h5><mark class="hl">6. IoT Processors</mark></h5><p><mark class="hl">6. IoT Processors.</mark> The processors and architectures used by IoT devices define many of their capabilities, such as whether they are capable of strong security and encryption, power consumption, whether they are sophisticated enough to support an operating system, updatable firmware, and embedded device management agents. Understanding the implications of processor choices will demand deep technical skills.</p></div>
<div class="card"><h5>7. <mark class="hl">IoT Operating Systems</mark></h5><p><mark class="hl">IoT Operating Systems.</mark> Traditional operating systems such as Windows and iOS were not designed for IoT applications. They consume too much power, need fast processors, and in some cases, lack features such as guaranteed real-time response. They also have too large a memory footprint for small devices and may not support the chips that IoT developers use.<br>Consequently, a wide range of IoT-specific operating systems has been developed to suit many different hardware footprints and feature needs.</p></div>
<div class="card"><h5>8. Event Stream Processing</h5><p>Some IoT applications will generate extremely high data rates that must be analyzed in real time. Systems creating tens of thousands of events per second are common, and millions of events per second can occur in some situations.<br>To address such requirements, distributed stream computing platforms have emerged that can process very high-rate data streams and perform tasks such as real-time analytics and pattern identification.</p></div>
<div class="card"><h5>9. IoT Platforms</h5><p>IoT platforms bundle many of the infrastructure components of an IoT system into a single product. The services provided by such platforms fall into three main categories:</p><ul><li>Low-level device control and operations such as communications, device monitoring and management, security, and firmware updates.</li><li>IoT data acquisition, transformation and management.</li><li>IoT application development, including event-driven logic, application programming, visualization, analytics and adapters to connect to enterprise systems.</li></ul></div>
<div class="card"><h5>10. IoT Standards and Ecosystems</h5><p>Standards and their associated application programming interfaces (APIs) will be essential because IoT devices will need to interoperate and communicate, and many IoT business models will rely on sharing data between multiple devices and organizations.<br>Many IoT ecosystems will emerge, and organizations creating products may have to develop variants to support multiple standards or ecosystems and be prepared to update products during their life span as the standards evolve and new standards and APIs emerge.</p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-eye"/></svg><mark class="hl">Sensors</mark></h3>
<div class="call"><mark class="hl">Sensors are used for sensing things and devices</mark> etc.<br>A sensor is a device that provides a usable output in response to a specified measurement.<br><mark class="hl">The sensor attains a physical parameter and converts it into a signal suitable for processing (e.g. electrical, mechanical, optical)</mark> — <mark class="hl">the characteristics of any device</mark> or material <mark class="hl">to detect the presence of a particular physical quantity.<br>The output of the sensor is a signal which is converted to a human-readable form like changes in characteristics, changes in resistance, capacitance,</mark> impedance etc.<br>There are myriad different sensors available to measure virtually everything in the physical world.</div>
<h4>Ways to classify sensors</h4>
<p>There are a number of ways to group and cluster <mark class="hl">sensors into different categories,</mark> including the following:</p>
<div class="cards">
<div class="card"><h5>Active or Passive</h5><p>Based on whether they produce an energy output and typically require an <mark class="hl">external power supply (active)</mark> or whether they simply receive energy and typically require <mark class="hl">no external power supply (passive).</mark></p></div>
<div class="card"><h5>Invasive or Non-invasive</h5><p>Based on whether a sensor is part of the <mark class="hl">environment it is measuring (invasive)</mark> or <mark class="hl">external to it</mark> (non-invasive).</p></div>
<div class="card"><h5>Contact or No-contact</h5><p>Based on whether they require <mark class="hl">physical contact</mark> with what they are measuring (contact) or <mark class="hl">not (no-contact).</mark></p></div>
<div class="card"><h5>Absolute or Relative</h5><p>Based on whether they <mark class="hl">measure on an absolute scale (absolute)</mark> or based on a difference with a fixed or <mark class="hl">variable reference value (relative).</mark></p></div>
<div class="card"><h5><mark class="hl">■Area of application:</mark></h5><p>Sensors can be categorized based on the specific industry or vertical where they are being used.</p></div>
<div class="card"><h5>How sensors measure</h5><p>Based on the physical mechanism used to measure sensory input (for example, thermoelectric, electrochemical, piezo resistive, optic, electric, fluid mechanic, photoelastic).</p></div>
<div class="card"><h5>What <mark class="hl">sensors measure: Sensors</mark></h5><p>can be categorized based on their applications or what physical variables they measure.</p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-chart"/></svg><mark class="hl">Characteristics of a Sensor</mark></h3>
<p>The static accuracy of a sensor indicates how much the sensor signal correctly represents the measured quantity after it stabilizes (i.e. beyond the transient period).<br>Important static characteristics of sensors include sensitivity, resolution, linearity, zero drift and full-scale drift, range, repeatability and reproducibility.</p>
<div class="cards">
<div class="card"><h5>1. Sensitivity</h5><p><mark class="hl">Sensitivity is a measure of the change in output of the sensor relative to a unit change in the input (the measured quantity).</mark><br>Example: the speakers you purchase for your home entertainment may have a rated sensitivity of 89 dB Signal Pressure Level per Watt per meter.</p></div>
<div class="card"><h5>2. Resolution</h5><p><mark class="hl">Resolution is the smallest amount of change in the input that can be detected and accurately indicated by the sensor.</mark><br>Example: What is the resolution of an ordinary ruler? of a Vernier Calipers?<br><b>Answer:</b> an ordinary ruler — 1 mm (its smallest division); a Vernier calipers — 0.1 mm.</p></div>
<div class="card"><h5>3. Linearity</h5><p>Linearity is determined by the calibration curve. The static calibration curve plots the output amplitude versus the input amplitude under static conditions. <mark class="hl">Its degree of resemblance to a straight line describes the linearity.</mark></p></div>
<div class="card"><h5>4. Drift</h5><p>Drift is the deviation from a specific reading of the sensor <mark class="hl">when the sensor is kept at that value for a prolonged period of time.<br>The zero drift refers to the change in sensor output if the input is kept steady at a level that (initially) yields a zero reading.</mark><br>Similarly, <mark class="hl">the full -scale drift is the drift if the input is maintained at a value which originally yields a full scale deflection.</mark><br>Reasons for drift may be extraneous, such as changes in ambient pressure, humidity, temperature etc., or due to changes in the constituents of the sensor itself, such as aging, wear etc.</p></div>
<div class="card"><h5>5. Range</h5><p>The <mark class="hl">range of a sensor is determined by the allowed lower and upper limits of its input or output.</mark> Usually, the range is determined by the accuracy required.</p></div>
<div class="card"><h5>6. Repeatability</h5><p>Repeatability <mark class="hl">is defined as the deviation between measurements in a sequence when the object under test is the same and approaches its value from the same direction each time.</mark> The measurements have to be made under a short enough time duration so as not to allow significant long term drift. Repeatability is usually specified as a percentage of the sensor range.</p></div>
<div class="card"><h5>7. Reproducibility</h5><p>Reproducibility is the same as repeatability, except it also incorporates long time lapses between subsequent measurements. The sensor has to be operation between measurements but must be calibrated. Reproducibility is specified as a percentage of the sensor range per unit of time.</p></div>
</div>
<div class="call"><b>Dynamic characteristics</b> represent the time response of the sensor system — knowledge of these is essential to fruitfully use a sensor. Important common dynamic responses include: rise time, delay time, peak time, settling time, percentage error and steady-state error.</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-blocks"/></svg>Classification of Sensors — common IoT sensors</h3>
<div class="call">The common IoT sensors include: <mark class="hl">Temperature sensors, Pressure sensors, Motion sensors, Level sensors, Image sensors, Proximity sensors, Water quality sensors, Chemical sensors, Gas sensors, Smoke sensors, Infrared (IR) sensors, Humidity sensors,</mark> etc.</div>
<div class="cards">
<div class="card"><h5><svg class="ic" aria-hidden="true"><use href="#i-thermo"/></svg>Temperature sensors</h5><p>Detect the temperature of the air or a physical object and convert that temperature level into an electrical signal that can be calibrated accurately reflect the measured temperature.<br>These sensors could <mark class="hl">monitor the temperature of the soil to help with agricultural output or the temperature of a bearing operating in a critical piece of equipment to sense when it might be overheating or nearing the point of failure.</mark></p></div>
<div class="card"><h5>Pressure sensors</h5><p>Measure the pressure or force per unit area applied to the sensor and can detect things such as atmospheric pressure, <mark class="hl">the pressure of a stored gas or liquid in a sealed system such as tank or pressure vessel, or</mark> the weight of an object.</p></div>
<div class="card"><h5>Motion sensors</h5><p>Motion sensors or detectors <mark class="hl">can sense the movement of a physical object</mark> by using any one of several technologies, including passive infrared (PIR), microwave detection, or ultrasonic, which uses sound to detect objects.<br>These sensors can be used in security and intrusion detection systems, but <mark class="hl">can also be used to automate the control of doors, sinks, air conditioning and heating, or other systems.</mark></p></div>
<div class="card"><h5><mark class="hl">Level sensors</mark></h5><p><mark class="hl">Level sensors translate the level of a liquid relative to a benchmark normal value into a signal.</mark> Fuel gauges display the level of fuel in a vehicle's tank, as an example, which provides a continuous level reading. There are also point level sensors, which are a go-no/go or digital representation of the level of the liquid.<br>Some <mark class="hl">automobiles have a light that illuminates when the fuel level tank is very close to empty, acting as an alarm that warns the driver that fuel is about to run out completely.</mark></p></div>
<div class="card"><h5><svg class="ic" aria-hidden="true"><use href="#i-cam"/></svg>Image sensors</h5><p><mark class="hl">Image sensors function to capture images to be digitally stored for processing.</mark><br>License plate readers are an example, as well as <mark class="hl">facial recognition</mark> systems. Automated production lines can use image sensors to detect issues with quality such as how well a surface is painted after leaving the spray booth.</p></div>
<div class="card"><h5><mark class="hl">Proximity sensors</mark></h5><p><mark class="hl">Proximity sensors can detect the presence or absence of objects</mark> that approach the sensor through a variety of different technology designs.</p></div>
<div class="card"><h5><svg class="ic" aria-hidden="true"><use href="#i-drop"/></svg>Water quality sensors</h5><p>The importance of water to human beings on earth not only for drinking but as a key ingredient needed in many production processes dictates the need to be able to sense and measure parameters around water quality. Some examples of what is sensed and monitored include:</p><ul><li>Chemical presence (such as chlorine levels or fluoride levels)</li><li>Oxygen levels (which may impact the growth of algae and bacteria)</li><li>Electrical conductivity (which can indicate the level of ions present in water)</li><li>pH level (a reflection of the relative acidity or alkalinity of the water)</li><li>Turbidity levels (a measurement of the amount of suspended solids in water)</li></ul></div>
<div class="card"><h5>Chemical sensors</h5><p>Chemical sensors are designed to detect the presence of specific chemical substances which may have inadvertently leaked from their containers into spaces that are occupied by personnel and are useful in controlling industrial process conditions.</p></div>
<div class="card"><h5>Gas sensors</h5><p>Related to chemical sensors, gas sensors are tuned to detect the presence of combustible, toxic, or flammable gas in the vicinity of the sensor. Examples of specific gases that can be detected include:<br>Bromine (Br2), Carbon Monoxide (CO), Chlorine (Cl2), Chlorine Dioxide (ClO2), Hydrogen Cyanide (HCN), Hydrogen Peroxide (H2O2), Hydrogen Sulfide (H2S), Nitric Oxide (NO), Nitrogen Dioxide (NO2), Ozone (O3), etc.</p></div>
<div class="card"><h5><svg class="ic" aria-hidden="true"><use href="#i-fire"/></svg><mark class="hl">Smoke sensors</mark></h5><p><mark class="hl">Smoke sensors or detectors pick up the presence of smoke conditions which could be an indication of a fire</mark> typically using <mark class="hl">optical sensors (photoelectric detection)</mark> or ionization detection.</p></div>
<div class="card"><h5><mark class="hl">Infrared (IR) sensors</mark></h5><p><mark class="hl">Infrared sensor technologies detect infrared radiation that is emitted by objects.</mark> Non-contact thermometers make use of these types of sensors as a way of measuring the temperature of an object without having to directly place a probe or sensor on that object.<br>They find use in analyzing the heat signature of electronics and <mark class="hl">detecting blood flow or blood pressure in patients.</mark></p></div>
<div class="card"><h5>Acceleration sensors</h5><p>While motion sensors detect movement of an object, acceleration sensors, or accelerometers as they are also known, detect the rate of change of velocity of an object. This change may be due to a free-fall condition, a sudden vibration that is causing movement with speed changes, or rotational motion (a directional change).</p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-gear"/></svg>Actuators</h3>
<div class="call">An actuator is a machine component or system that moves or controls the mechanism or the system.<br>Sensors in the device sense the environment, then control signals are generated for the actuators according to the actions needed to perform.<br>Actuators convert an electrical signal into a corresponding physical quantity such as movement, force, sound etc.</div>
<div class="dg"><svg viewBox="0 0 960 330" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#37D5EA"/></marker></defs>
<rect x="30" y="110" width="200" height="110" rx="16" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="130" y="158" text-anchor="middle" fill="#e8f4ff" font-size="19" font-weight="700">Environment</text>
<text x="130" y="184" text-anchor="middle" fill="#9db8d2" font-size="14.5">the physical world</text>
<rect x="290" y="110" width="200" height="110" rx="16" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="390" y="158" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">Sensor</text>
<text x="390" y="184" text-anchor="middle" fill="#9db8d2" font-size="14.5">senses &amp; measures</text>
<rect x="550" y="110" width="200" height="110" rx="16" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="650" y="158" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">Control signals</text>
<text x="650" y="184" text-anchor="middle" fill="#9db8d2" font-size="14.5">decided from the data</text>
<rect x="810" y="110" width="130" height="110" rx="16" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="875" y="158" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">Actuator</text>
<text x="875" y="184" text-anchor="middle" fill="#9db8d2" font-size="14.5">moves / acts</text>
<path d="M232 150 H 284" stroke="#37D5EA" stroke-width="2.5" marker-end="url(#ah)"/>
<path d="M492 150 H 544" stroke="#37D5EA" stroke-width="2.5" marker-end="url(#ah)"/>
<path d="M752 150 H 804" stroke="#37D5EA" stroke-width="2.5" marker-end="url(#ah)"/>
<path d="M875 222 V 285 H 132 V 226" fill="none" stroke="#FFC107" stroke-width="2.5" marker-end="url(#ah)"/>
<text x="480" y="308" text-anchor="middle" fill="#FFC107" font-size="15" font-weight="700">the actuator changes the environment — and the sensor senses again</text>
</svg><div class="dgcap">Figure: sensors sense, actuators act — the symmetry between them (Lecture 1)</div></div>
<h4>Types of Actuators</h4>
<div class="cards">
<div class="card"><h5>1. Servo Motors</h5><p>Servo is a small device that incorporates a two wire DC motor, a gear train, a potentiometer, an integrated circuit, and a shaft (output spine).</p></div>
<div class="card"><h5>2. Stepper Motors</h5><p>Stepper motors are DC motors that move in discrete steps. They have multiple coils that are organized in groups called "phases". By energizing each phase in sequence, the motor will rotate, one step at a time.<br>With a computer controlled stepping, you can achieve very precise positioning and/or speed control.</p></div>
<div class="card"><h5>3. DC Motors (Continuous Rotation Motors)</h5><p>Direct Current (DC) motor is the most common actuator used in projects. They are simple, cheap, and easy to use. DC motors convert electrical into mechanical energy. Also, they come in different sizes.</p></div>
<div class="card"><h5>4. Linear Actuator</h5><p>A linear actuator is an actuator that creates motion in a straight line, in contrast to the circular motion of a conventional electric motor.<br>Linear actuators are used in machine tools and industrial machinery, in computer peripherals such as disk drives and printers, in valves and dampers, and in many other places where linear motion is required.</p></div>
<div class="card"><h5>5. Relay</h5><p>A relay is an electrically operated switch. Many relays use an electromagnet to mechanically operate a switch.<br>The advantage of relays is that it takes a relatively small amount of power to operate the relay coil, but the relay itself can be used to control motors, heaters, lamps or AC circuits which themselves can draw a lot more electrical power.</p></div>
<div class="card"><h5>6. Solenoid</h5><p>A solenoid is simply a specially designed electromagnet. Solenoids are inexpensive, and their use is primarily limited to on-off applications such as latching, locking, and triggering.<br>They are frequently used in home appliances (e.g. washing machine valves), office equipment (e.g. copy machines), automobiles (e.g. door latches and the starter solenoid), pinball machines (e.g., plungers and bumpers), and factory automation.</p></div>
</div>
</section>
<div class="botnav" aria-label="التنقل بين الأجزاء"><span></span><button data-sub="iot-l2">التالي: Lecture 2: IoT Architecture ›</button></div>
</div>

<div class="sp" id="iot-l2" hidden>
<div class="call">An IoT system is organized into layers, where each layer has its own job — from the physical things at the bottom, up to the business value at the top.</div>
<div class="dg"><svg viewBox="0 0 960 520" xmlns="http://www.w3.org/2000/svg" role="img">
<rect x="30" y="20" width="700" height="76" rx="14" fill="rgba(55,213,234,.06)" stroke="rgba(125,211,252,.5)" stroke-width="1.5"/><text x="55" y="54" fill="#37D5EA" font-size="19" font-weight="800">5 — Business layer</text><text x="55" y="80" fill="#9db8d2" font-size="14.5">value: decisions, productivity, lower costs, business goals</text>
<rect x="30" y="112" width="700" height="76" rx="14" fill="rgba(55,213,234,.06)" stroke="rgba(125,211,252,.5)" stroke-width="1.5"/><text x="55" y="146" fill="#37D5EA" font-size="19" font-weight="800">4 — Application layer</text><text x="55" y="172" fill="#9db8d2" font-size="14.5">analytics, reporting and device control for end users</text>
<rect x="30" y="204" width="700" height="76" rx="14" fill="rgba(55,213,234,.06)" stroke="rgba(125,211,252,.5)" stroke-width="1.5"/><text x="55" y="238" fill="#37D5EA" font-size="19" font-weight="800">3 — Processing layer</text><text x="55" y="264" fill="#9db8d2" font-size="14.5">IoT platforms accumulate and manage all data streams</text>
<rect x="30" y="296" width="700" height="76" rx="14" fill="rgba(55,213,234,.06)" stroke="rgba(125,211,252,.5)" stroke-width="1.5"/><text x="55" y="330" fill="#37D5EA" font-size="19" font-weight="800">2 — Connectivity layer</text><text x="55" y="356" fill="#9db8d2" font-size="14.5">transfers data between the physical layer and the cloud via networks &amp; gateways</text>
<rect x="30" y="388" width="700" height="76" rx="14" fill="rgba(55,213,234,.06)" stroke="rgba(125,211,252,.5)" stroke-width="1.5"/><text x="55" y="422" fill="#37D5EA" font-size="19" font-weight="800">1 — Perception layer</text><text x="55" y="448" fill="#9db8d2" font-size="14.5">the physical layer — hosts the smart things: sensors, actuators, RFID, cameras</text>
<rect x="762" y="204" width="168" height="260" rx="14" fill="rgba(74,222,128,.07)" stroke="rgba(74,222,128,.5)" stroke-width="1.5"/>
<text x="846" y="322" text-anchor="middle" fill="#4ade80" font-size="17" font-weight="800">Edge</text>
<text x="846" y="346" text-anchor="middle" fill="#4ade80" font-size="17" font-weight="800">Computing</text>
<text x="846" y="372" text-anchor="middle" fill="#9db8d2" font-size="14.5">processing close</text>
<text x="846" y="392" text-anchor="middle" fill="#9db8d2" font-size="14.5">to the devices</text>
<rect x="762" y="20" width="168" height="168" rx="14" fill="rgba(255,193,7,.07)" stroke="rgba(255,193,7,.55)" stroke-width="1.5"/>
<text x="846" y="92" text-anchor="middle" fill="#ffe082" font-size="17" font-weight="800">Security</text>
<text x="846" y="116" text-anchor="middle" fill="#9db8d2" font-size="14.5">device • connection</text>
<text x="846" y="136" text-anchor="middle" fill="#9db8d2" font-size="14.5">• cloud</text>
<text x="480" y="505" text-anchor="middle" fill="#FFC107" font-size="15" font-weight="700">data flows up: sense → connect → process → apply → business value</text>
</svg><div class="dgcap">Figure: the IoT architecture — five layers, with edge computing and security across them (Lecture 2)</div></div>
<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-layers"/></svg>The five layers</h3>
<ol>
<li><b>The perception layer</b> — hosting smart things.</li>
<li><b>The connectivity or transport layer</b> — transferring data from the physical layer to the cloud and vice versa via networks and gateways.</li>
<li><b>The processing layer</b> — employs IoT platforms to accumulate and manage all data streams.</li>
<li><b>The application layer</b> — delivers solutions like analytics, reporting, and device control to end users.</li>
<li><b>Business layer</b>.</li>
</ol>
<p>Two more layers complete the picture: the <b>edge computing layer</b> and the <b>security layer</b> — both covered below.</p>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-eye"/></svg>1 — Perception layer (physical layer)</h3>
<p>It converts analog signals into digital data and vice versa.<br>The initial stage of any IoT system embraces a wide range of "things" or endpoint devices that act as a bridge between the real and digital worlds.<br>It includes the various endpoint devices and sensors that send and receive information.<br>Their primary function is generating data and being capable of being queried and/or controlled over a network.</p>
<div class="call"><mark class="hl">Function</mark>: Collect information from the physical environment or perform an action.<br><b>It contains:</b> Sensors, Actuators, RFID tags, Cameras, Smart devices.</div>
<div class="cards">
<div class="card"><h5>Sensors</h5><p>They collect physical parameters like temperature or humidity, turn them into electrical signals, and send them to the IoT system.<br><b>Example:</b> a temperature sensor measures 25°C.</p></div>
<div class="card"><h5>Actuators</h5><p>Translating electrical signals from the IoT system into physical actions.<br><b>Example:</b> an actuator turns an air conditioner ON/OFF.</p></div>
<div class="card"><h5>Machines and devices</h5><p>Connected to sensors and actuators or having them as integral parts.<br><b>Example:</b> a smartwatch can measure heart rate and send the data to a smartphone.</p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-waves"/></svg>2 — Connectivity layer (Network Layer)</h3>
<p>It enables data transmission. <mark class="hl">The function</mark>: communications across devices, networks, and cloud services that make up the IoT infrastructure.</p>
<p>The connectivity between the physical layer and the cloud is achieved in two ways:</p>
<ul>
<li><b>TCP or UDP/IP stack</b>.</li>
<li>A <b>gateway</b> — a hardware or software component that connects IoT devices using different communication protocols.</li>
</ul>
<p>The communications between devices and cloud services or gateways involve different networking technologies. Depending on the device, distance, power requirements, and application, different networking technologies can be used to communicate between devices, gateways, and cloud services.</p>
<h4><mark class="hl">For example:</mark></h4>
<div class="cards">
<div class="card"><h5>Bluetooth / BLE</h5><p>Bluetooth Low-Energy: short-distance communication, such as smart watches.</p></div>
<div class="card"><h5>Wi-Fi</h5><p>Connects devices to a local network and the Internet.</p></div>
<div class="card"><h5>NFC</h5><p>Near Field Communication enables simple and safe data sharing between two devices over a distance of 4 inches (10 cm).</p></div>
<div class="card"><h5>Zigbee</h5><p>A low-power wireless network for carrying small data packages over short distances — low-power communication for smart-home devices.</p></div>
</div>
<h4><mark class="hl">For example:</mark> (long range)</h4>
<div class="cards">
<div class="card"><h5>LoRaWAN</h5><p>Low-power Wide-area Network: long-distance communication with very low power consumption.</p></div>
<div class="card"><h5>5G / Cellular</h5><p>Communication over large geographical areas. Two important cellular technologies were developed especially for IoT:</p><ul><li><b>LTE-M</b> (Long-Term Evolution for Machines) is designed for IoT devices that need to transmit larger amounts of data and exchange high volumes of data.</li><li><b>NB-IoT</b> (Narrowband Internet of Things) is designed for IoT devices that send small amounts of data.</li></ul></div>
<div class="card"><h5>Ethernet</h5><p>Connects stationary or fixed IoT devices — wired, reliable network connection.</p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-db"/></svg>3 — Processing layer</h3>
<p>This layer receives, stores, and processes the data.</p>
<div class="call"><mark class="hl">Functions</mark>:<br>• collects data from many IoT devices.<br>• keeps the data in databases or cloud storage.<br>• processes data — prepares information that can be used by applications or for decision-making.</div>
<h4>Two Major Stages</h4>
<div class="cards">
<div class="card"><h5>Data Accumulation Stage</h5><p>Data accumulation means collecting and storing the data received from the Network Layer.<br>The data accumulation component stage works as a transit hub between event-based data generation and query-based data consumption.<br><b>For example:</b> a temperature sensor sends 25°C, 26°C, 27°C, 28°C. Then the system captures these readings and stores them in a database.</p></div>
<div class="card"><h5>Data Abstraction Stage</h5><p>After data has been accumulated and stored, it must be prepared so that applications can understand and use it.<br>It combines data from different sources and reconciling multiple data formats; and aggregating data in one place or making it accessible regardless of location through data virtualization.</p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-phone"/></svg>4 — Application layer</h3>
<div class="call"><mark class="hl">Function:</mark> Analyze information and provide useful services to users and organizations. It addresses business requirements.</div>
<h4>Examples of IoT Applications</h4>
<div class="cards">
<div class="card"><h5>Device monitoring and control</h5><p>Monitor sensors and control devices remotely.</p></div>
<div class="card"><h5>Mobile applications</h5><p>Allow users to interact with IoT devices using smartphones.</p></div>
<div class="card"><h5>Business Intelligence</h5><p>Convert data into reports, dashboards, and useful information.</p></div>
<div class="card"><h5>Machine Learning and Analytics</h5><p>Analyze data and predict future events.</p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-chart"/></svg>5 — Business layer</h3>
<p>The information produced by previous layers has value only when it helps an organization:</p>
<ul>
<li>Solve problems</li>
<li>Make decisions</li>
<li>Improve productivity</li>
<li>Reduce costs</li>
<li>Achieve business goals</li>
<li>Create new processes</li>
</ul>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-bolt"/></svg>Edge computing layer</h3>
<p><b>Edge</b> means the edge of the network, close to the IoT devices that produce the data.</p>
<div class="call"><mark class="hl">Function</mark>: to process data close to where it is generated, instead of sending all the data to a distant cloud server — reducing system latency.</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-shield"/></svg>Security layer</h3>
<div class="call"><mark class="hl">Function</mark>: preventing data breaches.<br>IoT security protects IoT devices, communication networks, cloud services, and the data they handle. It can be divided into three main areas: <b>Device Security</b>, <b>Connection Security</b> and <b>Cloud Security</b>.</div>
<div class="cards">
<div class="card"><h5><svg class="ic" aria-hidden="true"><use href="#i-lock"/></svg>Device Security</h5><p>Protects the physical IoT device and the software running on it. It includes:</p><ul><li><b>TPM</b> (Trusted Platform Module) — chips with cryptographic keys for authentication and protection of endpoint devices.</li><li><b>Secure Boot</b> — process that prevents unauthorized code from running on a powered-up device.</li><li><b>Security Updates</b> — regularly installing security patches helps fix vulnerabilities.</li><li><b>Physical Protection</b> — physical barriers or metal shields can help prevent unauthorized access to the device's internal components.</li></ul></div>
<div class="card"><h5><svg class="ic" aria-hidden="true"><use href="#i-link"/></svg>Connection Security</h5><p>Protects data while it is being transmitted between IoT devices, networks, applications, and cloud services.<br>IoT-centric messaging protocols like MQTT, AMQP, and DDS may use standard Transport Layer Security (TLS) cryptographic protocol to ensure end-to-end data protection.</p></div>
<div class="card"><h5><svg class="ic" aria-hidden="true"><use href="#i-cloud"/></svg>Cloud Security</h5><p>Protects data and IoT services hosted in the cloud.<br>Data stored in the cloud should be encrypted.</p></div>
</div>
</section>
<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-book"/></svg>Quiz — from the lecture</h3>
<h4>Quiz 1 — Smart Home</h4>
<div class="qa"><div class="qq">A smart home contains temperature sensors, an air conditioner, a Wi-Fi gateway, a cloud server, and a mobile application.<br>a) Identify the sensor. b) Identify the actuator. c) Which layer collects the temperature? d) Which layer transmits the data? e) Which layer processes the data? f) Which layer provides the mobile application? g) Give one example of security protection for this system.</div>
<div class="qa-a"><div class="alab">Model answer:</div>a) The temperature sensor.<br>b) The air conditioner (the actuator turns it ON/OFF).<br>c) The perception layer — it collects information from the physical environment.<br>d) The connectivity layer — through the Wi-Fi gateway.<br>e) The processing layer — the cloud server receives, stores and processes the data.<br>f) The application layer — it provides the mobile application to the user.<br>g) For example: encrypting the data stored in the cloud, using TLS to protect the transmitted data, or secure boot on the devices.</div></div>
<h4>Quiz 2</h4>
<div class="qa"><div class="qq"><span class="qn">1.</span> Explain the five main layers of IoT architecture.</div>
<div class="qa-a"><div class="alab">Model answer:</div>1) <b>Perception layer</b> — the physical layer hosting smart things; it collects information from the physical environment or performs actions, and converts analog signals into digital data and vice versa.<br>2) <b>Connectivity layer</b> — transfers data from the physical layer to the cloud and vice versa via networks and gateways.<br>3) <b>Processing layer</b> — employs IoT platforms to accumulate and manage all data streams; it receives, stores and processes the data.<br>4) <b>Application layer</b> — delivers solutions like analytics, reporting, and device control to end users.<br>5) <b>Business layer</b> — where the information gains value by helping the organization solve problems, make decisions, improve productivity, reduce costs and achieve business goals.</div></div>
<div class="qa"><div class="qq"><span class="qn">2.</span> Explain the Data Accumulation and Data Abstraction stages.</div>
<div class="qa-a"><div class="alab">Model answer:</div><b>Data accumulation</b> means collecting and storing the data received from the Network Layer. It works as a transit hub between event-based data generation and query-based data consumption — e.g. a temperature sensor sends 25°C, 26°C, 27°C, 28°C and the system captures these readings and stores them in a database.<br><b>Data abstraction</b> comes after accumulation: the stored data must be prepared so that applications can understand and use it. It combines data from different sources, reconciles multiple data formats, and aggregates data in one place or makes it accessible regardless of location through data virtualization.</div></div>
<div class="qa"><div class="qq"><span class="qn">3.</span> What is the main function of the Perception Layer?</div>
<div class="qa-a"><div class="alab">Model answer:</div>To collect information from the physical environment or perform an action. It contains sensors, actuators, RFID tags, cameras and smart devices, and it converts analog signals into digital data and vice versa — acting as a bridge between the real and digital worlds.</div></div>
<div class="qa"><div class="qq"><span class="qn">4.</span> What is the main function of the Processing Layer?</div>
<div class="qa-a"><div class="alab">Model answer:</div>It receives, stores, and processes the data: it collects data from many IoT devices, keeps the data in databases or cloud storage, and processes data to prepare information that can be used by applications or for decision-making — through the data accumulation stage and the data abstraction stage.</div></div>
<div class="qa"><div class="qq"><span class="qn">5.</span> What is the role of Edge Computing?</div>
<div class="qa-a"><div class="alab">Model answer:</div>Edge means the edge of the network, close to the IoT devices that produce the data. Its function is to process data close to where it is generated, instead of sending all the data to a distant cloud server — reducing system latency (and also reducing communication requirements and network traffic).</div></div>
<div class="qa"><div class="qq"><span class="qn">6.</span> Compare Sensors and Actuators and give example of each.</div>
<div class="qa-a"><div class="alab">Model answer:</div>A <b>sensor</b> is a device that provides a usable output in response to a specified measurement: it attains a physical parameter and converts it into a signal suitable for processing. Example: a temperature sensor measures 25°C and sends it to the system.<br>An <b>actuator</b> is a machine component or system that moves or controls the mechanism or the system: it converts an electrical signal into a corresponding physical quantity such as movement, force or sound. Example: an actuator turns an air conditioner ON/OFF.<br>In short: sensors sense the environment, then control signals are generated for the actuators according to the actions needed.</div></div>
<div class="qa"><div class="qq"><span class="qn">7.</span> Explain the role of Zigbee and LoRaWAN and Bluetooth.</div>
<div class="qa-a"><div class="alab">Model answer:</div><b>Bluetooth / BLE</b> (Bluetooth Low-Energy) is for short-distance communication, such as smart watches.<br><b>Zigbee</b> is a low-power wireless network for carrying small data packages over short distances — low-power communication for smart-home devices.<br><b>LoRaWAN</b> (Low-power Wide-area Network) is for long-distance communication with very low power consumption.<br>So Bluetooth and Zigbee serve short range, while LoRaWAN serves long range — all with low power.</div></div>
<div class="qa"><div class="qq"><span class="qn">8.</span> List and explain 3 types of sensors and their use case.</div>
<div class="qa-a"><div class="alab">Model answer:</div>1) <b>Temperature sensors</b> detect the temperature of the air or a physical object and convert it into an electrical signal — e.g. monitoring the temperature of the soil to help with agricultural output.<br>2) <b>Motion sensors</b> can sense the movement of a physical object using PIR, microwave or ultrasonic technologies — used in security and intrusion detection systems, and to automate the control of doors, sinks, air conditioning and heating.<br>3) <b>Image sensors</b> function to capture images to be digitally stored for processing — e.g. license plate readers and facial recognition systems.</div></div>
</section>
<div class="botnav" aria-label="التنقل بين الأجزاء"><button data-sub="iot-l1">‹ السابق: Lecture 1: Introduction to IoT</button><button data-sub="iot-l3">التالي: Lecture 3: Challenges &amp; Networking ›</button></div>
</div>

<div class="sp" id="iot-l3" hidden>
<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-shield"/></svg>Challenges of IoT</h3>
<p>The biggest challenges for IoT adoption include:</p>
<div class="cards">
<div class="card"><h5>1. Security Challenges</h5><p>The rapid development of technology and the increasing complexity of cyberattacks have increased the risk of security breaches. IoT devices can be easy targets for hackers, so software developers must design secure applications to protect devices and users' data.<br><b>Example:</b> a hacker accesses a smart camera without permission.<br><b>Key idea:</b> Protect IoT devices and data from cyberattacks.</p></div>
<div class="card"><h5>2. Regulation Challenges</h5><p>The IoT industry is relatively new, and specific regulations may be lacking in some areas. Regulations are needed to ensure that manufacturers follow appropriate security and privacy requirements. GDPR is an example of a regulation that protects personal data and privacy.<br><b>Example:</b> a company collects personal data from smart devices without following applicable data protection requirements.<br><b>Key idea:</b> Establish and follow rules for security and privacy.</p></div>
<div class="card"><h5>3. Compatibility Challenges</h5><p>IoT devices must connect and communicate with each other to exchange data. However, different manufacturers may use different communication protocols and technical standards, making communication difficult.<br><b>Example:</b> a smart bulb from one manufacturer cannot communicate with a smart home hub from another manufacturer.<br><b>Key idea:</b> Ensure that different IoT devices can work together.</p></div>
<div class="card"><h5>4. Bandwidth Challenges</h5><p>A large number of connected devices generate and transmit data, which can consume network bandwidth and cause congestion, delays, or reduced performance.<br><b>Example:</b> many smart cameras transmit video simultaneously, slowing down the network.<br><b>Key idea:</b> Manage network capacity to support large numbers of connected devices.</p></div>
<div class="card"><h5>5. Customer Expectation Challenges</h5><p>Customers expect IoT devices to be easy to use, reliable, affordable, secure, and responsive. If devices fail to meet these expectations, customers may not adopt or continue using them.<br><b>Example:</b> customers may stop using a smart thermostat if it frequently disconnects or responds slowly.</p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-net"/></svg>IoT Networking Considerations &amp; Challenges</h3>
<p>When designing an IoT network, six things must be considered:</p>
<ul>
<li>Range</li>
<li>Bandwidth</li>
<li>Power usage</li>
<li>Intermittent connectivity</li>
<li>Interoperability</li>
<li>Security</li>
</ul>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-waves"/></svg>1 — Range</h3>
<p>Networks can be described in terms of the distances over which data is typically transmitted by the IoT devices attached to the network: PAN – LAN – MAN – WAN.</p>
<div class="dg"><svg viewBox="0 0 960 300" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#37D5EA"/></marker></defs>
<path d="M40 235 H 920" stroke="rgba(125,211,252,.5)" stroke-width="2" marker-end="url(#ah)"/>
<rect x="40" y="70" width="180" height="130" rx="14" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="130" y="112" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">PAN</text>
<text x="130" y="140" text-anchor="middle" fill="#9db8d2" font-size="14.5">meters</text>
<text x="130" y="168" text-anchor="middle" fill="#9db8d2" font-size="14.5">fitness tracker ↔</text>
<text x="130" y="188" text-anchor="middle" fill="#9db8d2" font-size="14.5">phone over BLE</text>
<rect x="255" y="70" width="190" height="130" rx="14" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="350" y="112" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">LAN</text>
<text x="350" y="140" text-anchor="middle" fill="#9db8d2" font-size="14.5">up to hundreds of meters</text>
<text x="350" y="168" text-anchor="middle" fill="#9db8d2" font-size="14.5">factory sensors ↔ gateway</text>
<text x="350" y="188" text-anchor="middle" fill="#9db8d2" font-size="14.5">through Wi-Fi</text>
<rect x="480" y="70" width="190" height="130" rx="14" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="575" y="112" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">MAN</text>
<text x="575" y="140" text-anchor="middle" fill="#9db8d2" font-size="14.5">a few kilometers — city wide</text>
<text x="575" y="168" text-anchor="middle" fill="#9db8d2" font-size="14.5">smart parking sensors</text>
<text x="575" y="188" text-anchor="middle" fill="#9db8d2" font-size="14.5">in a mesh network</text>
<rect x="705" y="70" width="215" height="130" rx="14" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="812" y="112" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">WAN</text>
<text x="812" y="140" text-anchor="middle" fill="#9db8d2" font-size="14.5">kilometers</text>
<text x="812" y="168" text-anchor="middle" fill="#9db8d2" font-size="14.5">agricultural sensors</text>
<text x="812" y="188" text-anchor="middle" fill="#9db8d2" font-size="14.5">across a large farm</text>
<text x="480" y="272" text-anchor="middle" fill="#FFC107" font-size="15" font-weight="700">range grows →</text>
</svg><div class="dgcap">Figure: network range — PAN, LAN, MAN and WAN (Lecture 3)</div></div>
<div class="cards">
<div class="card"><h5>PAN (Personal Area Network)</h5><p>Short-range, where distances can be measured in meters.<br><b>Example:</b> a wearable fitness tracker device that communicates with an app on a cell phone over BLE.</p></div>
<div class="card"><h5>LAN (Local Area Network)</h5><p>Short- to medium-range, where distances can be up to hundreds of meters.<br><b>Example:</b> factory sensors communicate with a gateway through Wi-Fi.</p></div>
<div class="card"><h5>MAN (Metropolitan Area Network)</h5><p>Long-range (city wide), where distances are measured up to a few kilometers.<br><b>Example:</b> smart parking sensors installed throughout a city that are connected in a mesh network topology.</p></div>
<div class="card"><h5>WAN (Wide Area Network)</h5><p>Long-range, where distances can be measured in kilometers.<br><b>Example:</b> agricultural sensors monitor temperature, humidity, and other environmental conditions across a large farm.</p></div>
</div>
<div class="call">An IoT network must collect data from IoT devices and transmit it to the correct destination. Therefore, we must choose a communication protocol that supports the required communication distance, or range.<br>For example, BLE is designed for short-range communication, so it is generally unsuitable for a WAN application that needs to communicate over several kilometers.</div>
<p><b>Edge computing can help:</b> if transmitting data over long distances is difficult, edge computing processes and analyzes data close to the IoT devices instead of sending all raw data to a distant data center. This can reduce communication requirements, latency, and network traffic.</p>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-chart"/></svg>2 — Bandwidth</h3>
<div class="call">Bandwidth is the amount of data that can be transmitted over a network per unit of time.<br>It determines how quickly data can be collected from IoT devices and transmitted to other devices, gateways, or cloud servers.<br>Bandwidth is commonly measured in bits per second (bps), such as Kbps, Mbps, and Gbps.</div>
<h4>Bandwidth is affected by many factors</h4>
<ol>
<li>Volume of data generated by each device.</li>
<li>Number of devices deployed.</li>
<li>Continuous transmission versus intermittent bursts: IoT devices may transmit data continuously or send data occasionally in bursts.</li>
</ol>
<ul>
<li><b>Continuous transmission:</b> devices send data constantly, creating a relatively steady demand for bandwidth.</li>
<li><b>Intermittent bursts:</b> devices send data occasionally, producing sudden increases in network traffic.</li>
<li><b>Peak periods:</b> times when many devices transmit simultaneously, potentially causing network congestion.</li>
</ul>
<div class="call"><mark class="hl">Explain four techniques that can reduce bandwidth requirements in IoT networks, and discuss their limitations.</mark></div>
<h4>Before the techniques — packet size matters</h4>
<ul>
<li><b>Packets that are too large:</b> if a device sends only a few bytes, a large packet may contain unused space filled with padding, wasting network capacity.</li>
<li><b>Packets that are too small:</b> splitting a large amount of data into many small packets creates additional overhead because each packet needs its own header and other control information.</li>
<li>Data transmission rates are asymmetrical (upload and download speeds are not always equal).</li>
<li>Wireless and cellular networks are traditionally low bandwidth, so consider whether a wireless technology is the right choice for high-volume applications.</li>
</ul>
<h4>The four techniques — and their limitations</h4>
<div class="cards">
<div class="card"><h5>1. Sampling less frequently</h5><p>Reduces the number of measurements — <b>but may miss rapid changes.</b></p></div>
<div class="card"><h5>2. Filtering</h5><p>Removes insignificant data — <b>but may discard useful information.</b></p></div>
<div class="card"><h5>3. Aggregation</h5><p>Combines multiple readings into summaries — <b>but reduces data granularity.</b></p></div>
<div class="card"><h5>4. Burst transmission</h5><p>Sends stored data in batches — <b>but may introduce delays.</b></p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-bolt"/></svg>3 — Power</h3>
<div class="call">Power usage refers to the electrical energy consumed by an IoT device when it operates, processes data, and transmits information through a network.<br>It is an important consideration because many IoT devices operate using batteries and may be installed in remote locations where replacing or recharging batteries is difficult.</div>
<div class="call"><mark class="hl">Explain methods for reducing power consumption in IoT devices.</mark><br>You must consider:</div>
<ul>
<li><b>The power source</b> such as a battery, solar cell, or capacitor.</li>
<li><b>The device's lifecycle</b> — how long the device can operate before its power source needs replacement or recharging.</li>
<li><b>Use sleep mode</b> whenever it is idle.</li>
</ul>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-wifioff"/></svg>4 — Intermittent Connectivity</h3>
<p>Intermittent connectivity means that an IoT device does not maintain a continuous network connection. It may connect periodically, or it may lose its connection because of network problems.</p>
<h4>Causes of Intermittent Connectivity</h4>
<ol>
<li>Devices connect periodically — connect only when they need to send or receive data.</li>
<li>A weak signal or unstable network may cause a device to disconnect unexpectedly.</li>
<li>Multiple devices may try to transmit data using the same communication channel at the same time. This competition can cause delays and collisions.</li>
</ol>
<div class="call"><mark class="hl">How Can IoT Systems Handle Intermittent Connectivity</mark></div>
<ol>
<li>Devices temporarily save collected data when the network is unavailable and transmit it when connectivity returns.</li>
<li>A system can switch to another available network or communication path when the primary connection fails.</li>
</ol>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-swap"/></svg>5 &amp; 6 — Interoperability and Security</h3>
<p><b>Interoperability</b> is the ability of different devices, equipment, systems, and technologies to communicate, exchange data, and work together successfully.</p>
<p><b>Security</b> is a priority. Selection of networking technologies that implement end-to-end security, including authentication, encryption, and open port protection is crucial.</p>
</section>
<div class="botnav" aria-label="التنقل بين الأجزاء"><button data-sub="iot-l2">‹ السابق: Lecture 2: IoT Architecture</button><button data-sub="iot-l45">التالي: Lectures 4–5: IoT Levels &amp; M2M ›</button></div>
</div>

<div class="sp" id="iot-l45" hidden>
<div class="split"><div>
<div class="call">Based upon the number of monitoring nodes used, type of database used, complexity/simplicity of analysis and computation, there are <b>6 levels of IoT</b>.<br>Different applications are implemented based on this level.</div>
<p style="margin-top:12px">This part also covers the techniques that enable IoT, machine-to-machine communication (M2M) and how it differs from IoT, gateways, and how IoT data is gathered and managed.</p>
</div><img src="assets/images/iot-levels.jpg" alt="Smart agriculture field with IoT sensors"></div>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-blocks"/></svg>Components of an IoT system</h3>
<p><mark class="hl">The IoT systems consist of these following components.</mark></p>
<div class="cards">
<div class="card"><h5><mark class="hl">Device</mark></h5><p><mark class="hl">The IoT device allows identification, remote sensing, actuating, and remote monitoring capabilities.</mark></p></div>
<div class="card"><h5><mark class="hl">Resource</mark></h5><p><mark class="hl">Resources are the software components on the IoT device for accessing, processing and storing sensor information, or controlling actuators connected to the device.</mark> Resources include the software components that enable network access for the device.<br>For ex: the programs that we have written for object detection using IR sensors, to find out the distance using ultra sonic sensor etc.</p></div>
<div class="card"><h5><mark class="hl">Controller Service</mark></h5><p><mark class="hl">Controller service is a native service that runs on the device and interacts with the web services.</mark> Controller service sends data from the device to the web service and receives commands from the application for controlling the web services.<br>For ex: the ESP 8266 programming, setting of API keys, SSID etc.</p></div>
<div class="card"><h5><mark class="hl">Database</mark></h5><p><mark class="hl">Database can be either local or in the cloud and stores the data generated by the IoT device.</mark></p></div>
<div class="card"><h5><mark class="hl">Web Service</mark></h5><p><mark class="hl">This acts as an interface between IoT device, application, database and analysis components. Web services can be implemented using HTTP and REST</mark> principle or using WebSocket protocol.</p></div>
<div class="card"><h5><mark class="hl">Analysis Component</mark></h5><p><mark class="hl">The analysis component is responsible for analysing the IoT data and generates results which are easy for the user to understand.</mark> Analysis can be performed either locally or in the clouds.</p></div>
<div class="card"><h5><mark class="hl">Application</mark></h5><p><mark class="hl">IoT applications provide an interface that the user can use to control and monitor various aspects of the IoT system.</mark></p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-layers"/></svg>The six IoT Levels</h3>
<div class="dg"><svg viewBox="0 0 960 590" xmlns="http://www.w3.org/2000/svg" role="img">
<rect x="30" y="20" width="900" height="86" rx="12" fill="rgba(55,213,234,.06)" stroke="rgba(125,211,252,.5)" stroke-width="1.5"/><text x="48" y="56" fill="#37D5EA" font-size="18" font-weight="800">Level 1</text><text x="48" y="82" fill="#9db8d2" font-size="14.5">single node • local database • analysis done locally</text><text x="916" y="82" text-anchor="end" fill="#ffe082" font-size="14" font-weight="700">Home automation</text>
<rect x="30" y="118" width="900" height="86" rx="12" fill="rgba(55,213,234,.06)" stroke="rgba(125,211,252,.5)" stroke-width="1.5"/><text x="48" y="154" fill="#37D5EA" font-size="18" font-weight="800">Level 2</text><text x="48" y="180" fill="#9db8d2" font-size="14.5">single node • big data stored in the cloud • analysis still local</text><text x="916" y="180" text-anchor="end" fill="#ffe082" font-size="14" font-weight="700">Smart irrigation</text>
<rect x="30" y="216" width="900" height="86" rx="12" fill="rgba(55,213,234,.06)" stroke="rgba(125,211,252,.5)" stroke-width="1.5"/><text x="48" y="252" fill="#37D5EA" font-size="18" font-weight="800">Level 3</text><text x="48" y="278" fill="#9db8d2" font-size="14.5">single node • cloud storage • computationally intensive analysis in the cloud</text><text x="916" y="278" text-anchor="end" fill="#ffe082" font-size="14" font-weight="700">Package tracking</text>
<rect x="30" y="314" width="900" height="86" rx="12" fill="rgba(55,213,234,.06)" stroke="rgba(125,211,252,.5)" stroke-width="1.5"/><text x="48" y="350" fill="#37D5EA" font-size="18" font-weight="800">Level 4</text><text x="48" y="376" fill="#9db8d2" font-size="14.5">multiple nodes • cloud analysis • local &amp; cloud observer nodes</text><text x="916" y="376" text-anchor="end" fill="#ffe082" font-size="14" font-weight="700">Noise monitoring</text>
<rect x="30" y="412" width="900" height="86" rx="12" fill="rgba(55,213,234,.06)" stroke="rgba(125,211,252,.5)" stroke-width="1.5"/><text x="48" y="448" fill="#37D5EA" font-size="18" font-weight="800">Level 5</text><text x="48" y="474" fill="#9db8d2" font-size="14.5">multiple end nodes + one coordinator node • made for wireless sensor networks</text><text x="916" y="474" text-anchor="end" fill="#ffe082" font-size="14" font-weight="700">Forest fire detection</text>
<rect x="30" y="510" width="900" height="86" rx="12" fill="rgba(55,213,234,.06)" stroke="rgba(125,211,252,.5)" stroke-width="1.5"/><text x="48" y="546" fill="#37D5EA" font-size="18" font-weight="800">Level 6</text><text x="48" y="572" fill="#9db8d2" font-size="14.5">multiple independent nodes • centralized controller commands all nodes</text><text x="916" y="572" text-anchor="end" fill="#ffe082" font-size="14" font-weight="700">Weather monitoring</text>
</svg><div class="dgcap">Figure: the six IoT levels at a glance — from one local node to a centrally controlled network (Lectures 4–5)</div></div>
<div class="cards">
<div class="card"><h5>IoT Level 1</h5><p><mark class="hl">IoT level has single node/device for sensing, monitoring, actuating, storing data, performing analysis and hosting application.</mark> Data involved is not big. So <mark class="hl">data is stored in local databases.</mark><br>It is suitable for modelling design low cost and low complexity solution. Primary analysis <mark class="hl">requirement is not computationally intensive.</mark> So can be analyzed locally.<br><b>EX: Home automation</b> — a device monitors the lights in a house. The lights are controlled through switches. The database has maintained the status of each light; REST services deployed locally allow retrieving and updating the state of each light and trigger the switches accordingly. To control the lights, the application provides an interface. The device is connected to the Internet, hence the application can also be accessed remotely.</p></div>
<div class="card"><h5>IoT Level 2</h5><p><mark class="hl">IoT level 2 has single node/device for sensing, monitoring, actuating, performing analysis and hosting application.</mark> <mark class="hl">Data involved is big.</mark> So <mark class="hl">data is stored in clouds.</mark> <mark class="hl">It uses cloud-based application to visualize data.</mark><br>Primary analysis requirement is not computationally intensive. So can be analyzed locally.<br><b>EX: Smart irrigation</b> — a cloud-based application monitors and controls the IoT system. A single node monitors the soil moisture in the field, which is sent to the database on the cloud using REST APIs. The controller service continuously monitors moisture levels.</p></div>
<div class="card"><h5>IoT Level 3</h5><p>Level 3: <mark class="hl">it has single node/device for sensing, monitoring, actuating and hosting application. Data involved is big. So, data is stored in cloud. It uses cloud-based application to visualise data.</mark><br>Primary analysis requirement is computationally intensive. So can be aggregated and analyzed in cloud.<br><b>EX: Tracking package handling.</b></p></div>
<div class="card"><h5>IoT Level 4</h5><p><mark class="hl">IoT level 4 has multiple nodes/devices for sensing, monitoring, actuating, performing analysis and hosting application. Data involved is big. So data is stored in cloud.</mark> It uses cloud-based application to visualise data.<br>Primary analysis requirement is computationally intensive. So <mark class="hl">can be aggregated</mark> and analysed in cloud.<br>It has two observer nodes i.e <mark class="hl">local and cloud based. They can subscribe to and receive information collected in cloud from IoT devices.</mark> They can process and use that information for various applications. Observer node does not perform any control function.<br><b>EX: Noise monitoring</b></p></div>
<div class="card"><h5>IoT Level 5</h5><p>IoT level 5 <mark class="hl">has multiple nodes/devices for sensing, monitoring, actuating. One coordinator node for collecting and sending the data to cloud by controller service. Data involved is big. So data is stored in cloud.</mark> It uses cloud-based application to visualise data.<br>Suitable for wireless sensor networks. Primary analysis requirement is computationally intensive. Analytic components analyses the data and stores result in cloud and make predictions.<br><b>Ex: Forest Fire Detection</b> — end nodes collect various data from the environment and send it to the coordinator node. The coordinator node acts as a gateway and allows the data to be transferred to cloud storage using REST API. The controller service on the coordinator node sends data to the cloud.</p></div>
<div class="card"><h5>IoT Level 6</h5><p>IoT level 6 <mark class="hl">has multiple independent nodes/devices for sensing, monitoring, actuating and sending the data to cloud by controller service. Data involved is big.</mark> <mark class="hl">So data is stored in cloud.</mark> It uses cloud-based application <mark class="hl">to visualise data.</mark><br>Primary analysis requirement is computationally intensive. Analytic component analyse the data and stores result in clouds. It <mark class="hl">has centralized controller which is aware of the status of all the end nodes and sends control command to the nodes.</mark><br><b>Examples: Weather monitoring and structural health monitoring.</b> Weather monitoring consists of sensors that monitor different aspects of the system. The end nodes send data to cloud storage. Analysis of components, applications, and storage areas in the cloud. The centralized controller controls all nodes and provides inputs.</p></div>
</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-gear"/></svg>IoT-Enabling Techniques</h3>
<p>IoT is enabled by several technologies, including wireless sensor networks, cloud computing, Big Data analytics, communication protocols, embedded systems etc.</p>
<h4>Wireless Sensor Network (WSN)</h4>
<p>This comprises a number of distributed devices with sensors which are used to monitor the environmental and physical conditions. A wireless sensor network consists of end nodes, routers, and coordinators. End nodes have several sensors attached to them where the data is passed to a coordinator with the help of routers. The coordinator also acts as the gateway that connects WSN to the Internet.</p>
<div class="dg"><svg viewBox="0 0 960 356" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#37D5EA"/></marker></defs>
<g fill="rgba(55,213,234,.1)" stroke="rgba(125,211,252,.55)" stroke-width="1.5">
<circle cx="90" cy="70" r="26"/><circle cx="90" cy="170" r="26"/><circle cx="90" cy="270" r="26"/>
</g>
<g fill="#e8f4ff" font-size="19" font-weight="700"><text x="90" y="77" text-anchor="middle" font-size="15">node</text><text x="90" y="177" text-anchor="middle" font-size="15">node</text><text x="90" y="277" text-anchor="middle" font-size="15">node</text></g>
<text x="90" y="322" text-anchor="middle" fill="#9db8d2" font-size="14.5">end nodes</text>
<text x="90" y="344" text-anchor="middle" fill="#9db8d2" font-size="14.5">(sensors attached)</text>
<rect x="300" y="45" width="150" height="80" rx="14" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/><rect x="300" y="215" width="150" height="80" rx="14" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="375" y="80" text-anchor="middle" fill="#e8f4ff" font-size="19" font-weight="700">Router</text><text x="375" y="104" text-anchor="middle" fill="#9db8d2" font-size="14.5">passes data on</text>
<text x="375" y="250" text-anchor="middle" fill="#e8f4ff" font-size="19" font-weight="700">Router</text><text x="375" y="274" text-anchor="middle" fill="#9db8d2" font-size="14.5">passes data on</text>
<path d="M118 78 L 292 82" stroke="#37D5EA" stroke-width="2" marker-end="url(#ah)"/>
<path d="M118 168 L 292 240" stroke="#37D5EA" stroke-width="2" marker-end="url(#ah)"/>
<path d="M118 262 L 292 258" stroke="#37D5EA" stroke-width="2" marker-end="url(#ah)"/>
<rect x="540" y="120" width="180" height="100" rx="14" fill="rgba(255,193,7,.08)" stroke="rgba(255,193,7,.55)" stroke-width="1.5"/>
<text x="630" y="163" text-anchor="middle" fill="#ffe082" font-size="18" font-weight="800">Coordinator</text>
<text x="630" y="189" text-anchor="middle" fill="#9db8d2" font-size="14.5">also the gateway</text>
<path d="M452 92 L 560 140" stroke="#37D5EA" stroke-width="2" marker-end="url(#ah)"/>
<path d="M452 248 L 560 200" stroke="#37D5EA" stroke-width="2" marker-end="url(#ah)"/>
<rect x="790" y="120" width="140" height="100" rx="14" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="860" y="163" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">Internet</text>
<text x="860" y="189" text-anchor="middle" fill="#9db8d2" font-size="14.5">to the cloud</text>
<path d="M722 170 H 784" stroke="#37D5EA" stroke-width="2.5" marker-end="url(#ah)"/>
</svg><div class="dgcap">Figure: a wireless sensor network — end nodes, routers and the coordinator/gateway (Lectures 4–5)</div></div>
<p><b>Examples:</b> weather monitoring system, indoor air quality monitoring system, soil moisture monitoring system.</p>
<h4>Cloud Computing</h4>
<p>Cloud computing provides us with the means by which we can access applications as utilities over the Internet. Using cloud computing, users can access any resources from anywhere like databases, web servers, storage, any device, and any software over the Internet.<br>It provides different services like:</p>
<div class="cards">
<div class="card"><h5>IaaS (Infrastructure as a Service)</h5><p>Also known as Hardware as a Service (HaaS). It is one of the layers of the cloud computing platform and allows customers to outsource their IT infrastructures, such as servers, networking, processing, storage, virtual machines, and other resources.</p></div>
<div class="card"><h5>PaaS (Platform as a Service)</h5><p>Provides a runtime environment. It allows programmers to easily create, test, run, and deploy web applications. One can purchase these applications from a cloud service provider on a pay-per-use basis and access them using the Internet connection.<br><b>Example:</b> Google App Engine, Force.com, Joyent, Azure.</p></div>
<div class="card"><h5>SaaS (Software as a Service)</h5><p>This is also known as "On-Demand Software". It is a software distribution model in which services are hosted by a cloud service provider.<br><b>Example:</b> Google Docs, Gmail, Office.</p></div>
</div>
<h4>Big Data Analytics</h4>
<p>This refers to the method of studying massive volumes of data, or the so-called Big Data. It involves the collection of data whose volume, velocity, or variety is simply too massive and tough to store, control, process, and examine the data using traditional databases.</p>
<h4>Communications Protocols</h4>
<p>They are the backbone of IoT systems and enable network connectivity and linking to applications. Communication protocols allow devices to exchange data over the network. Multiple protocols often describe different aspects of a single communication. A group of protocols designed to work together is known as a protocol suite.</p>
<h4>Embedded Systems</h4>
<p>It is a combination of hardware and software used to perform special tasks. It includes microcontroller and microprocessor memory, networking units (Ethernet Wi-Fi adapters), input output units (display keyboard etc.), and storage devices (flash memory). It collects the data and sends it to the Internet.<br>Embedded systems are used in a variety of applications: digital camera, DVD player, music player, industrial robots, wireless routers.</p>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-swap"/></svg>M2M — Machine-to-Machine</h3>
<div class="call">Machine-to-Machine or M2M is a technology that allows connectivity between network devices. It allows tapping of sensor data and transmitting it over a public network.<br>IoT technology, on the other hand, expands the concept of M2M by creating large networks of devices in which devices communicate with one another through cloud networking platforms. It allows users to create high performance, fast and flexible networks that can connect a variety of devices.</div>
<p><b>Components of an M2M system:</b> sensors, RFID (Radio Frequency Identification), Wi-Fi or cellular network, and a computing software which helps networking devices to interpret data and decision making. These M2M applications can translate data which in turn can trigger automated actions.</p>
<h4>Benefits of M2M</h4>
<ol>
<li>It reduces cost by making use of public network and minimizing downtime.</li>
<li>Increase revenue by identifying new business opportunities.</li>
<li>Increase customer satisfaction by timely servicing equipment and regularly monitoring.</li>
</ol>
<h4>M2M Architecture — three domains</h4>
<div class="cards">
<div class="card"><h5>M2M Device Domain</h5><p>The M2M device communication domain consists of three entities: physical devices, communication interface and gateway. Communication interface is a port or a subsystem, which receives the input from one end and sends the data received to another.</p></div>
<div class="card"><h5>M2M Network Domain</h5><p>Consists of M2M server, device identity management, data analytics and data and device management — similar to IoT architecture (connect + collect + assemble + analyse) level.</p></div>
<div class="card"><h5>M2M Application Domain</h5><p>Consists of application for services, monitoring, analysis and controlling of devices networks.</p></div>
</div>
<h4>M2M Applications</h4>
<p><b>Sensor telemetry</b> is one of the first application of M2M communication. It has been used since the last century for transmitting operational data. Earlier people used telephone lines, then radio waves, to transmit measurements factors like temperature, pressure for remote monitoring.</p>
<p>Another example of M2M communication is <b>ATM</b>. ATM machine routes information regarding request for transaction to appropriate bank. The bank in turn through its system approves it and allows transactions to complete.</p>
<p>It also has applications in supply chain management (SCM), warehouse management systems (WMS), utility companies, etc.</p>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-scale"/></svg>M2M vs IoT — the differences</h3>
<div class="tw"><table class="cmp"><tr><th></th><th>M2M</th><th>IoT</th></tr>
<tr><td>1</td><td>M2M is subset of IoT</td><td>IoT is super set of M2M. It is a vast network of connected devices that may or may not include human interaction.</td></tr>
<tr><td>2</td><td>Point to point communication usually embedded within hardware at the customer site. Ex: tap to pay (NFC) — the service in Samsung taps to pay without using card; you just need to bring your mobile near the swipe machine. Using your ID card to open or close the door.</td><td>Multipoint communication. Ex: by showing the ID card then your attendance will be registered. Monitoring the health parameters through the help of android app or web app.</td></tr>
<tr><td>3</td><td>It uses cellular or wired network.</td><td>It uses wireless network.</td></tr>
<tr><td>4</td><td>Do not necessarily require internet connection.</td><td>Majority of cases require Internet connection.</td></tr>
<tr><td>5</td><td>It is more hardware based.</td><td>It is more software based.</td></tr>
<tr><td>6</td><td>On-premises applications (i.e. software and technology located within the physical confines of an enterprise or company's data centre). Ex: diagnosis applications, service management applications and on-premises enterprises applications.</td><td>It uses cloud based application such as analytic applications, enterprise applications, and remote diagnosis and management applications.</td></tr>
<tr><td>7</td><td>Data collection and analysis is done in on-premises storage infrastructure.</td><td>Data collection and analysis is done in cloud mostly.</td></tr>
<tr><td>8</td><td>Non-IP based communication.</td><td>IP-based communication.</td></tr>
<tr><td>9</td><td>M2M protocols include ZigBee, Bluetooth, ModBus, M-Bus, Wireless M-Bus, Power Line communication (PLC), 6LoWPAN, IEEE 802.15.4, Z-wave. These protocols work below the network layer.</td><td>IoT protocols include HTTP, CoAP, WebSocket, MQTT, XMPP, DDS, AMQP etc. The protocols work above the network layer.</td></tr>
<tr><td>10</td><td>The devices used are homogeneous type within an M2M area network.</td><td>The devices used are heterogeneous type such as fire alarms, door alarms, lighting control devices, etc.</td></tr>
</table></div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-gear"/></svg>Implementing an IoT system — four components</h3>
<div class="dg"><svg viewBox="0 0 960 210" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#37D5EA"/></marker></defs>
<rect x="20" y="45" width="205" height="105" rx="16" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="122" y="92" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">1 — Sensors</text>
<text x="122" y="118" text-anchor="middle" fill="#9db8d2" font-size="14.5">collect data from</text>
<text x="122" y="136" text-anchor="middle" fill="#9db8d2" font-size="14.5">the environment</text>
<rect x="265" y="45" width="205" height="105" rx="16" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="367" y="92" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">2 — Network</text>
<text x="367" y="118" text-anchor="middle" fill="#9db8d2" font-size="14.5">passes the data to the</text>
<text x="367" y="136" text-anchor="middle" fill="#9db8d2" font-size="14.5">cloud / processing nodes</text>
<rect x="510" y="45" width="205" height="105" rx="16" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="612" y="92" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">3 — Analytics</text>
<text x="612" y="118" text-anchor="middle" fill="#9db8d2" font-size="14.5">generates useful</text>
<text x="612" y="136" text-anchor="middle" fill="#9db8d2" font-size="14.5">insights from the data</text>
<rect x="755" y="45" width="185" height="105" rx="16" stroke="rgba(125,211,252,.5)" stroke-width="1.5" fill="rgba(55,213,234,.06)"/>
<text x="847" y="92" text-anchor="middle" fill="#37D5EA" font-size="19" font-weight="800">4 — Action</text>
<text x="847" y="118" text-anchor="middle" fill="#9db8d2" font-size="14.5">inform the user — or</text>
<text x="847" y="136" text-anchor="middle" fill="#9db8d2" font-size="14.5">trigger an actuator</text>
<path d="M227 97 H 259" stroke="#37D5EA" stroke-width="2.5" marker-end="url(#ah)"/>
<path d="M472 97 H 504" stroke="#37D5EA" stroke-width="2.5" marker-end="url(#ah)"/>
<path d="M717 97 H 749" stroke="#37D5EA" stroke-width="2.5" marker-end="url(#ah)"/>
<text x="480" y="190" text-anchor="middle" fill="#FFC107" font-size="15" font-weight="700">how an IoT system is implemented — four components</text>
</svg><div class="dgcap">Figure: implementing an IoT system — sensors, network, analytics, action (Lectures 4–5)</div></div>
<div class="cards">
<div class="card"><h5>1. Sensors</h5><p>Sensors are devices that are capable of collecting data from the environment. There are various types of sensors available – temperature sensors, pressure sensors, RFID tags, light intensity detectors, electromagnetic sensors, etc.</p></div>
<div class="card"><h5>2. Network</h5><p>Data collected from sensors are passed over the network for computations to the cloud or processing nodes. Depending upon the scale, they may be connected over LAN, MAN or WAN. They can also be connected through wireless networks like Bluetooth, ZigBee, Wi-Fi, etc.</p></div>
<div class="card"><h5>3. Analytics</h5><p>The process of generating useful insights from the data collected by sensors is called analytics. Analytics when performed in real time, can have numerous applications and can make the IoT system efficient.</p></div>
<div class="card"><h5>4. Action</h5><p>Information obtained after analytics must be either passed to the user using some user interface, messages, alerts, etc; or may also trigger some actions with the help of actuators. Actuators are the devices that perform some action depending on the command given to them over the network.</p></div>
</div>
<div class="call">Data captured by sensors are passed on to the cloud servers over the internet via gateways. Cloud servers in turn perform analytics and pass on the decisions or commands to actuators.</div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-net"/></svg>Gateways and Prefix Allotment</h3>
<p>Gateways are networking devices that connect IoT devices like sensors or controllers to Cloud. In other ways we can say that data generated by IoT devices are transferred to Cloud servers through IoT gateways.</p>
<p>The number of IoT devices is increasing at an exponential rate. These IoT devices are connected in a LAN or a WAN. A number of IoT devices within a building, communicating to a gateway installed in the same building over a wi-fi connection can be called an <b>IoT LAN</b>. Geographically distributed LAN segments are interconnected and connected to the internet via gateways to form <b>IoT WAN</b>. Devices connected within LAN have unique IP addresses but may have addresses the same as devices of another LAN.</p>
<h4>Gateway Prefix Allotment</h4>
<p>Gateways connect IoT LANs and WANs together. It is responsible for forwarding packets between them on the IP layer. Since a large number of devices are connected, address space needs to be conserved. Each connected device needs a unique address.<br>IP addresses allocated to devices within a gateway's jurisdiction are valid only in its domain. Same addresses may be allocated in another gateway's domain. Hence to maintain uniqueness, each gateway is assigned a unique network prefix. It is used for global identification of gateways. This unique identifier removes the need of allocating a unique IP address to each and every device connected to the network, hence saves a lot of address space.</p>
<p>In the lecture's figure, two gateway domains are shown. Both of them are connected to the internet via router. This router has its own address space and allows connectivity to the internet. This router assigns a unique gateway prefix to both the gateways. Hence packets are forwarded from gateways to the internet via routers.</p>
<h4>Impact of Mobility on Addressing</h4>
<p>When an IoT device moves from one location to another in a network, its address is affected. Network prefix allocated to gateways change due to mobility. WAN addresses allocated to devices through gateways changes without affecting IoT LAN addresses.<br>This is possible because addresses allocated within a domain of gateway are unique. It is not affected by mobility of devices. These unique local addresses (ULA) are maintained independent of global addresses. For giving internet access to these ULAs, they are connected to application layer proxy which routes them globally.</p>
<p>Gateways are attached to a remote anchor point by using protocols like IPv6. These remote anchor points are immune to changes of network prefix. It is also possible for the nodes in a network to establish direct connection with remote anchor points to access the internet directly using tunneling.</p>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-db"/></svg>Data Management and Consolidation Gateway</h3>
<p>Gateway includes the provisions for one or more of the following functions:</p>
<ol>
<li>Transcoding</li>
<li>Privacy</li>
<li>Security Integration</li>
<li>Compaction and fusion</li>
</ol>
<h4>Transcoding</h4>
<p>Transcoding does the data adaptation, conversion, and change of protocol, format or code using software. The gateway renders the web response and messages in formats and representations required and acceptable at an IoT device. Similarly, the IoT device requests are adapted, converted and changed into required formats acceptable at the server by the transcoding software.<br>For example, use of transcoding enables the message request characters to be in ASCII format at the device and in Unicode at the server. It also enables the use of XML format database at the device, while the server has a DB2, Oracle or any other database.<br>Transcoding involves formats, data and code conversion from one end to another when the multimedia data is transferred from a server to the mobile TV, Internet TV, VoIP phone or smartphone as the client devices. Transcoding applications also involve filtering, compression or decompression.<br>A transcoding proxy can execute itself on the client system or the application server. A transcoding proxy has conversion, computational and analysing capabilities, while a gateway has conversion and computational capabilities only.</p>
<h4>Privacy</h4>
<p>Data such as patient medical data, data for supplying goods in a company from and to different locations, and changes in inventories, may need privacy and protection from conscious or unconscious transfer to untrustworthy destinations using the Internet. Privacy is an aspect of data management and must be remembered while designing an application. The design should ensure privacy by ensuring that the data at the receiving end is considered anonymous from an individual or company.</p>
<p>Following are the components of the privacy model:</p>
<ul>
<li>Devices and applications identity-management</li>
<li>Authentication</li>
<li>Authorisation</li>
<li>Trust Reputation</li>
</ul>
<p>A suitable encryption of identification of data source enforces privacy. Device ID management provides for privacy. The analyzed, decrypted data is an input to an application, service, or process. IoT or M2M data have to be for the beneficiary individual person or company only. When data is transferred from one point to another, it should be ensured that the stakeholder in future may not misuse the device end data or the application data. These static and dynamic relationships are components which depend on trust and reputation.</p>
<h4>Secure Data Access</h4>
<p>Access to data needs to be secure. The design ensures the authentication of a request for data and authorisation for accessing a response or service. It may also include auditing of requests and accesses of the responses for accountability in future.<br>Example described how a layer provides the confidentiality and authorisation using AES-128 and CCM.<br>End-to-end security is another aspect which implies using a security protocol at each layer, physical, logical link and transport layers during communication at both ends in a network.</p>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-swap"/></svg>Data Gathering and Dissemination</h3>
<p>IoT/M2M applications involve actions such as data-gathering (acquisition), validation, storage, processing, reminiscence (retention) and analysis.<br>Data gathering refers to data acquisition from the devices/devices network. Four modes of gathering data are:</p>
<div class="cards">
<div class="card"><h5>1. Polling</h5><p>Refers to the data sought from a device by addressing the device; for example, waste container filling information in a waste management system.</p></div>
<div class="card"><h5>2. Event-based gathering</h5><p>Refers to the data sought from the device on an event; for example, when the device reaches near an access point or a card reaches near the card reader or an initial data exchange for the setup of peer-to-peer or master-slave connection of BT device using NFC.</p></div>
<div class="card"><h5>3. Scheduled interval</h5><p>Refers to the data sought from a device at select intervals; for example, data for ambient light condition in Internet of streetlights.</p></div>
<div class="card"><h5>4. Continuous monitoring</h5><p>Refers to the data sought from a device continuously; for example, data for traffic presence in a particular street.</p></div>
</div>
<p>Data enrichment refers to adding value, security and usability of the data. Consider the following three steps for data enrichment before the data disseminates to the network:</p>
<div class="cards">
<div class="card"><h5>Aggregation</h5><p>Refers to the process of joining together present and previously received data frames after removing redundant or duplicate data.</p></div>
<div class="card"><h5>Compaction</h5><p>Means making information short without changing the meaning or context; for example, transmitting only the incremental data so that the information sent is short.</p></div>
<div class="card"><h5>Fusion</h5><p>Means formatting the information received in parts through various data frames and several types of data (or data from several sources), removing redundancy in the received data and presenting the formatted information created from the information parts. Data fusion is used in cases when the individual records are not required and/or are not retrievable later.</p></div>
</div>
<div class="call"><b>Energy Dissipation in Data Dissemination:</b> energy consumption for data dissemination is an important consideration in many devices in WPANs and in wireless sensor nodes (WSNs), due to limited battery life. Energy is consumed when performing computations and transmissions. Higher the data rate, the greater will be the energy consumed. Higher is RF used, the greater will be the energy consumed. Higher the gathering interval, the lower will be the energy consumed.<br>Energy efficient computations can be done by using concepts of data aggregation, compaction and fusion. Lesser the data bytes communication, greater the acquisition intervals, and lower the data rate for data transfer, lesser the energy dissipation.</div>
<h4>Data Source and Data Destination</h4>
<ul>
<li><b>ID:</b> each device and each device resource is assigned an ID for specifying the data of source and a separate ID for data destination.</li>
<li><b>Address:</b> header fields add the destination address (for example, 48-bit MAC address at Link layer, 32-bit IPv4 address at IP network and 128-bit IPv6 address at IPv6 network) and may also add the port (for example, port 80 for HTTP application).</li>
</ul>
<h4>Data Characteristics, Formats and Structures</h4>
<p>Data characteristics can be in terms of: temporal data (dependent on the time), spatial data (dependent on location), real-time data (generated continuously and acquired continuously at the same pace), real-world data (from physical world for example, traffic or streetlight, ambient condition), proprietary data (copyright data reserved for distribution to authorised enterprises) and big data (unstructured voluminous data). Data received from devices is formatted before transmission over the Internet.</p>
</section>
<div class="botnav" aria-label="التنقل بين الأجزاء"><button data-sub="iot-l3">‹ السابق: Lecture 3: Challenges &amp; Networking</button><button data-sub="iot-hl">التالي: Highlights only ›</button></div>
</div>

<div class="sp" id="iot-exp" hidden>

<div class="call tip">The previous exam tested whether students could explain what key functions do, define a model and break it into parts, compare advantages and disadvantages, and define a term with its types. These IoT questions follow the same formats and prioritize lecture concepts and highlighted definitions; they are not guaranteed exam questions.<br><b>Tip:</b> every answer below = <b>definition first</b>, then the <b>listed points</b>. Write them in this order to collect the marks.</div>

<section class="block"><h3>Definitions and Functions</h3>

<div class="qa"><div class="qq"><span class="qn">Q1.</span> Define the Internet of Things (IoT) and explain its main characteristics.</div><div class="qa-a"><div class="alab">Model answer:</div>
<b>Definition:</b> IoT is a massive network of physical devices embedded with sensors, software, electronics and network connectivity, which exchange or collect data and perform actions.
<br><b>Characteristics:</b>
<ol>
<li>Dynamic and self-adapting</li>
<li>Self-configuring</li>
<li>Interoperable communication protocols</li>
<li>Unique identity</li>
<li>Integrated into the information network</li>
</ol></div></div>

<div class="qa"><div class="qq"><span class="qn">Q2.</span> Define a sensor and an actuator. Explain their functions and give one example of each.</div><div class="qa-a"><div class="alab">Model answer:</div>
<div class="tw"><table class="cmp"><tr><th></th><th>Sensor</th><th>Actuator</th></tr>
<tr><td><b>Definition</b></td><td>Device that gives a usable output in response to a specified measurement</td><td>Machine component/system that moves or controls a mechanism</td></tr>
<tr><td><b>Function</b></td><td>Receives a physical parameter and converts it into a signal for processing</td><td>Converts an electrical signal into a physical action</td></tr>
<tr><td><b>Example</b></td><td>Temperature sensor (measures room temperature)</td><td>Switches an air conditioner ON/OFF</td></tr>
</table></div>
<b>In short:</b> sensors sense the environment; actuators act on it.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q3.</span> Explain the five main layers of IoT architecture.</div><div class="qa-a"><div class="alab">Model answer:</div>
<ol>
<li><b>Perception layer</b> — collects information from the physical environment or performs an action.</li>
<li><b>Connectivity layer</b> — transfers data between the physical layer and the cloud (networks, gateways).</li>
<li><b>Processing layer</b> — accumulates and manages all data streams and analyses them.</li>
<li><b>Application layer</b> — gives end users services, analytics, reporting and device control.</li>
<li><b>Business layer</b> — uses the information for decisions, lower costs and higher productivity.</li>
</ol></div></div>

<div class="qa"><div class="qq"><span class="qn">Q4.</span> List the main components of an IoT system and describe the role of each.</div><div class="qa-a"><div class="alab">Model answer:</div>
<ol>
<li><b>Device</b> — sensing, monitoring and actuating.</li>
<li><b>Resource</b> — software that accesses, processes and stores sensor data or controls actuators.</li>
<li><b>Controller service</b> — runs on the device and talks to web services.</li>
<li><b>Database</b> — stores the generated data (local or cloud).</li>
<li><b>Web service</b> — interface between devices, applications, database and analysis.</li>
<li><b>Analysis component</b> — turns IoT data into results users can understand.</li>
<li><b>Application</b> — lets users control and monitor the system.</li>
</ol></div></div>

</section>

<section class="block"><h3>Architecture, Types, and Levels</h3>

<div class="qa"><div class="qq"><span class="qn">Q5.</span> Explain the main categories of IoT and compare Consumer IoT with Industrial IoT.</div><div class="qa-a"><div class="alab">Model answer:</div>
<b>Categories:</b>
<ul>
<li><b>Consumer IoT (CIoT)</b> — consumer products: smartphones, wearables, smart assistants, home appliances.</li>
<li><b>Commercial IoT</b> — larger venues: offices, hotels, healthcare facilities.</li>
<li><b>Industrial IoT (IIoT)</b> — factories and industrial systems.</li>
<li><b>Infrastructure IoT</b> — bridges, railway tracks, wind farms.</li>
<li><b>Internet of Military Things (IoMT)</b> — military and battlefield use.</li>
</ul>
<b>CIoT vs IIoT:</b>
<div class="tw"><table class="cmp"><tr><th></th><th>CIoT</th><th>IIoT</th></tr>
<tr><td><b>Used in</b></td><td>Homes / personal life</td><td>Factories and industrial systems</td></tr>
<tr><td><b>Examples</b></td><td>Smartphones, wearables, appliances</td><td>Industrial machines and systems</td></tr>
<tr><td><b>Goal / link</b></td><td>Consumer devices; short-range links (Wi-Fi, Bluetooth, Zigbee)</td><td>Higher productivity and efficiency</td></tr>
</table></div></div></div>

<div class="qa"><div class="qq"><span class="qn">Q6.</span> Explain the differences between IoT Levels 1 to 6.</div><div class="qa-a"><div class="alab">Model answer:</div>
<div class="tw"><table class="cmp"><tr><th>Level</th><th>Nodes</th><th>Key feature</th></tr>
<tr><td><b>1</b></td><td>Single node</td><td>Local storage + local analysis (e.g. home automation)</td></tr>
<tr><td><b>2</b></td><td>Single node</td><td>Data stored and visualized in the cloud</td></tr>
<tr><td><b>3</b></td><td>Single node</td><td>Cloud database + cloud application</td></tr>
<tr><td><b>4</b></td><td>Multiple sensing nodes + one observation node</td><td>Data stored in the cloud; observer reads from the cloud</td></tr>
<tr><td><b>5</b></td><td>Multiple sensing nodes + coordinator node</td><td>Coordinator sends the data to the cloud</td></tr>
<tr><td><b>6</b></td><td>Multiple independent nodes</td><td>Centralized controller knows all node states and sends commands</td></tr>
</table></div></div></div>

<div class="qa"><div class="qq"><span class="qn">Q7.</span> Define Machine-to-Machine (M2M) communication and compare it with IoT.</div><div class="qa-a"><div class="alab">Model answer:</div>
<b>M2M:</b> communication between devices to collect and transmit sensor data; it is a <b>subset of IoT</b>.
<div class="tw"><table class="cmp"><tr><th></th><th>M2M</th><th>IoT</th></tr>
<tr><td><b>Communication</b></td><td>Point-to-point</td><td>Multipoint, heterogeneous devices</td></tr>
<tr><td><b>Internet</b></td><td>May not need it</td><td>Internet- and cloud-based services</td></tr>
<tr><td><b>Orientation</b></td><td>Hardware / on-premises</td><td>Software / cloud</td></tr>
</table></div></div></div>

<div class="qa"><div class="qq"><span class="qn">Q8.</span> Explain gateway prefix allotment and why it is needed in IoT networks.</div><div class="qa-a"><div class="alab">Model answer:</div>
<b>Gateway:</b> connects IoT LANs and WANs and forwards packets on the IP layer.
<br><b>Prefix allotment:</b> each gateway is assigned a unique network prefix, because addresses inside a gateway's domain are only valid within that domain.
<br><b>Why it is needed:</b>
<ul>
<li>Every connected device needs a unique address.</li>
<li>Saves address space (very large number of devices).</li>
<li>Allows correct routing between gateways and the Internet.</li>
</ul></div></div>

</section>

<section class="block"><h3>Lecture Questions</h3>

<div class="qa"><div class="qq"><span class="qn">Q9.</span> Explain four techniques that reduce bandwidth requirements in IoT networks, and state one limitation of each.</div><div class="qa-a"><div class="alab">Model answer:</div>
<div class="tw"><table class="cmp"><tr><th>Technique</th><th>How it helps</th><th>Limitation</th></tr>
<tr><td><b>Sampling less often</b></td><td>Less network traffic</td><td>May miss rapid changes</td></tr>
<tr><td><b>Filtering</b></td><td>Removes irrelevant values</td><td>May discard useful data</td></tr>
<tr><td><b>Aggregation</b></td><td>Combines readings into a summary</td><td>Loses detail</td></tr>
<tr><td><b>Compression / burst sending</b></td><td>Smaller size or batched transmission</td><td>Delay / stale data</td></tr>
</table></div></div></div>

<div class="qa"><div class="qq"><span class="qn">Q10.</span> Explain methods for reducing power consumption in IoT devices.</div><div class="qa-a"><div class="alab">Model answer:</div>
<ul>
<li>Choose an efficient power source: battery, solar or capacitor.</li>
<li>Design the device to last as long as needed before replacement/recharge.</li>
<li>Use <b>sleep mode</b> when idle.</li>
<li>Use efficient communication and low-power protocols.</li>
</ul></div></div>

<div class="qa"><div class="qq"><span class="qn">Q11.</span> How can an IoT system handle intermittent connectivity?</div><div class="qa-a"><div class="alab">Model answer:</div>
<ul>
<li><b>Store</b> measurements temporarily, then <b>send</b> them when the network returns.</li>
<li><b>Switch</b> to another available network or path.</li>
<li>Use a <b>gateway or proxy</b> to keep the device connected.</li>
</ul></div></div>

<div class="qa"><div class="qq"><span class="qn">Q12.</span> Describe the four modes of IoT data gathering and the three data-enrichment methods.</div><div class="qa-a"><div class="alab">Model answer:</div>
<b>Data gathering (4):</b>
<ol>
<li><b>Polling</b> — request data from a device.</li>
<li><b>Event-based</b> — triggered by an event.</li>
<li><b>Scheduled intervals</b> — collected at fixed times.</li>
<li><b>Continuous monitoring</b> — constant collection.</li>
</ol>
<b>Data enrichment (3):</b>
<ol>
<li><b>Aggregation</b> — combine readings.</li>
<li><b>Compaction</b> — shorten information without changing its meaning.</li>
<li><b>Fusion</b> — format and combine information from several sources.</li>
</ol></div></div>

<div class="qa"><div class="qq"><span class="qn">Q13.</span> Define sensitivity, resolution, linearity, and drift of a sensor.</div><div class="qa-a"><div class="alab">Model answer:</div>
<div class="tw"><table class="cmp"><tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Sensitivity</b></td><td>Change in output per unit change in input</td></tr>
<tr><td><b>Resolution</b></td><td>Smallest input change the sensor can detect</td></tr>
<tr><td><b>Linearity</b></td><td>How closely the calibration curve is a straight line</td></tr>
<tr><td><b>Drift</b></td><td>Deviation from a specified reading after long steady conditions (zero drift, full-scale drift)</td></tr>
</table></div></div></div>

<div class="qa"><div class="qq"><span class="qn">Q14.</span> Explain the difference between a sensor and an actuator, then explain the role of edge computing and security in an IoT system.</div><div class="qa-a"><div class="alab">Model answer:</div>
<div class="tw"><table class="cmp"><tr><th>Sensor</th><th>Actuator</th></tr>
<tr><td>Measures the environment and sends data to the system</td><td>Receives control commands and performs a physical action</td></tr>
</table></div>
<ul>
<li><b>Edge computing:</b> processes data close to where it is generated → lower latency and less network load.</li>
<li><b>Security:</b> protects devices, connections and cloud services from unauthorized access and breaches (confidentiality, authentication, access control).</li>
</ul></div></div>

</section>
<div class="botnav" aria-label="التنقل بين الأجزاء"><button data-sub="iot-hl">‹ السابق: Highlights only</button><span></span></div>

</div>

<div class="sp" id="iot-q" hidden>
<div class="call">The exam is essay — so this part collects the lecture questions themselves (the Lecture 2 quiz and the highlighted Lecture 3 questions) plus the most likely essay questions from every lecture, each with a model answer written from the lectures.</div>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-book"/></svg>From the lectures' own questions</h3>
<div class="qa"><div class="qq"><span class="qn">Q1.</span> A smart home contains temperature sensors, an air conditioner, a Wi-Fi gateway, a cloud server, and a mobile application.<br>a) Identify the sensor. b) Identify the actuator. c) Which layer collects the temperature? d) Which layer transmits the data? e) Which layer processes the data? f) Which layer provides the mobile application? g) Give one example of security protection for this system.</div>
<div class="qa-a"><div class="alab">Model answer:</div>a) The temperature sensor.<br>b) The air conditioner (the actuator turns it ON/OFF).<br>c) The perception layer — it collects information from the physical environment.<br>d) The connectivity layer — through the Wi-Fi gateway.<br>e) The processing layer — the cloud server receives, stores and processes the data.<br>f) The application layer — it provides the mobile application to the user.<br>g) For example: encrypting the data stored in the cloud, using TLS to protect the transmitted data, or secure boot on the devices.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q2.</span> Explain the five main layers of IoT architecture.</div>
<div class="qa-a"><div class="alab">Model answer:</div>1) <b>Perception layer</b> — the physical layer hosting smart things; it collects information from the physical environment or performs actions, and converts analog signals into digital data and vice versa.<br>2) <b>Connectivity layer</b> — transfers data from the physical layer to the cloud and vice versa via networks and gateways.<br>3) <b>Processing layer</b> — employs IoT platforms to accumulate and manage all data streams; it receives, stores and processes the data.<br>4) <b>Application layer</b> — delivers solutions like analytics, reporting, and device control to end users.<br>5) <b>Business layer</b> — where the information gains value by helping the organization solve problems, make decisions, improve productivity, reduce costs and achieve business goals.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q3.</span> Explain the Data Accumulation and Data Abstraction stages.</div>
<div class="qa-a"><div class="alab">Model answer:</div><b>Data accumulation</b> means collecting and storing the data received from the Network Layer. It works as a transit hub between event-based data generation and query-based data consumption — e.g. a temperature sensor sends 25°C, 26°C, 27°C, 28°C and the system captures these readings and stores them in a database.<br><b>Data abstraction</b> comes after accumulation: the stored data must be prepared so that applications can understand and use it. It combines data from different sources, reconciles multiple data formats, and aggregates data in one place or makes it accessible regardless of location through data virtualization.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q4.</span> What is the main function of the Perception Layer?</div>
<div class="qa-a"><div class="alab">Model answer:</div>To collect information from the physical environment or perform an action. It contains sensors, actuators, RFID tags, cameras and smart devices, and it converts analog signals into digital data and vice versa — acting as a bridge between the real and digital worlds.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q5.</span> What is the main function of the Processing Layer?</div>
<div class="qa-a"><div class="alab">Model answer:</div>It receives, stores, and processes the data: it collects data from many IoT devices, keeps the data in databases or cloud storage, and processes data to prepare information that can be used by applications or for decision-making — through the data accumulation stage and the data abstraction stage.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q6.</span> What is the role of Edge Computing?</div>
<div class="qa-a"><div class="alab">Model answer:</div>Edge means the edge of the network, close to the IoT devices that produce the data. Its function is to process data close to where it is generated, instead of sending all the data to a distant cloud server — reducing system latency (and also reducing communication requirements and network traffic).</div></div>

<div class="qa"><div class="qq"><span class="qn">Q7.</span> Compare Sensors and Actuators and give example of each.</div>
<div class="qa-a"><div class="alab">Model answer:</div>A <b>sensor</b> is a device that provides a usable output in response to a specified measurement: it attains a physical parameter and converts it into a signal suitable for processing. Example: a temperature sensor measures 25°C and sends it to the system.<br>An <b>actuator</b> is a machine component or system that moves or controls the mechanism or the system: it converts an electrical signal into a corresponding physical quantity such as movement, force or sound. Example: an actuator turns an air conditioner ON/OFF.<br>In short: sensors sense the environment, then control signals are generated for the actuators according to the actions needed.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q8.</span> Explain the role of Zigbee and LoRaWAN and Bluetooth.</div>
<div class="qa-a"><div class="alab">Model answer:</div><b>Bluetooth / BLE</b> (Bluetooth Low-Energy) is for short-distance communication, such as smart watches.<br><b>Zigbee</b> is a low-power wireless network for carrying small data packages over short distances — low-power communication for smart-home devices.<br><b>LoRaWAN</b> (Low-power Wide-area Network) is for long-distance communication with very low power consumption.<br>So Bluetooth and Zigbee serve short range, while LoRaWAN serves long range — all with low power.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q9.</span> List and explain 3 types of sensors and their use case.</div>
<div class="qa-a"><div class="alab">Model answer:</div>1) <b>Temperature sensors</b> detect the temperature of the air or a physical object and convert it into an electrical signal — e.g. monitoring the temperature of the soil to help with agricultural output.<br>2) <b>Motion sensors</b> can sense the movement of a physical object using PIR, microwave or ultrasonic technologies — used in security and intrusion detection systems, and to automate the control of doors, sinks, air conditioning and heating.<br>3) <b>Image sensors</b> function to capture images to be digitally stored for processing — e.g. license plate readers and facial recognition systems.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q10.</span> Explain four techniques that can reduce bandwidth requirements in IoT networks, and discuss their limitations.</div>
<div class="qa-a"><div class="alab">Model answer:</div>1) <b>Sampling less frequently</b> — reduces the number of measurements, but may miss rapid changes.<br>2) <b>Filtering</b> — removes insignificant data, but may discard useful information.<br>3) <b>Aggregation</b> — combines multiple readings into summaries, but reduces data granularity.<br>4) <b>Burst transmission</b> — sends stored data in batches, but may introduce delays.<br>(Also consider packet size: packets too large waste capacity on padding, and packets too small create overhead from headers.)</div></div>

<div class="qa"><div class="qq"><span class="qn">Q11.</span> Explain methods for reducing power consumption in IoT devices.</div>
<div class="qa-a"><div class="alab">Model answer:</div>Power usage is critical because many IoT devices operate using batteries in remote locations where replacing or recharging batteries is difficult. To reduce power consumption you must consider:<br>• the power source such as a battery, solar cell, or capacitor.<br>• the device's lifecycle — how long the device can operate before its power source needs replacement or recharging.<br>• use sleep mode whenever the device is idle.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q12.</span> How can IoT systems handle intermittent connectivity?</div>
<div class="qa-a"><div class="alab">Model answer:</div>Intermittent connectivity means the device does not maintain a continuous network connection — it may connect periodically, lose its connection due to a weak signal or unstable network, or face delays and collisions when multiple devices transmit on the same channel at the same time.<br>Systems handle it in two ways:<br>1) Devices temporarily save collected data when the network is unavailable and transmit it when connectivity returns.<br>2) A system can switch to another available network or communication path when the primary connection fails.</div></div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-target"/></svg>Likely essay questions — Lectures 1 &amp; 3</h3>\n<div class="qa"><div class="qq"><span class="qn">Q13.</span> Example: What is the resolution of an ordinary ruler? of a Vernier Calipers?</div>\n<div class="qa-a"><div class="alab">Model answer:</div><p>Resolution is the smallest amount of change in the input that can be detected and accurately indicated — in practice, the smallest division the instrument can read.<br>• An <b>ordinary ruler</b> has a smallest division of 1 mm, so its resolution is <b>1 mm</b>.<br>• A <b>Vernier calipers</b> reads much smaller changes — its resolution is <b>0.1 mm</b>.</p></div></div>
<div class="qa"><div class="qq"><span class="qn">Q14.</span> Define IoT and explain its main characteristics.</div>
<div class="qa-a"><div class="alab">Model answer:</div>IoT is a massive network of physical devices embedded with sensors, software, electronics, and network which allows the devices to exchange or collect data and perform certain actions — simply, Things connected through the Internet.<br>Its characteristics: 1) Dynamic &amp; Self Adapting — devices adapt to changing contexts and take actions based on operating conditions, user's context or sensed environment. 2) Self Configuring — allowing a large number of devices to work together to provide certain functionality. 3) Interoperable Communication Protocols — devices support interoperable protocols and communicate with other devices and infrastructure. 4) Unique Identity — each device has a unique identity and a unique identifier (IP address). 5) Integrated into Information Network — devices communicate and exchange data with other devices and systems.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q15.</span> Explain the categories of IoT.</div>
<div class="qa-a"><div class="alab">Model answer:</div>1) <b>Consumer IoT (CIoT)</b> — the use of IoT for consumer applications and devices (smartphones, wearables, smart assistants, home appliances); it leverages Wi-Fi, Bluetooth and ZigBee for short-range communication in homes and offices, augmenting personal and home environments.<br><b>Commercial IoT</b> — delivers the benefits of IoT to larger venues (office buildings, supermarkets, hotels, healthcare facilities), e.g. monitoring environmental conditions and managing access to corporate facilities.<br>2) <b>Industrial IoT (IIoT)</b> — focuses on augmenting existing industrial systems, making them more productive and more efficient; found in factories, manufacturing, healthcare, agriculture, automotive and logistics.<br>3) <b>Infrastructure IoT</b> — smart infrastructures that boost efficiency, cost savings and maintenance (bridges, railway tracks, windfarms); technically a subset of IIoT but treated separately due to its significance.<br>4) <b>Internet of Military Things (IoMT)</b> — the use of IoT in military settings and battlefield situations (Battlefield IoT), connecting ships, planes, tanks, soldiers and drones to increase situational awareness, risk assessment and response times.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q16.</span> How are sensors classified? Explain.</div>
<div class="qa-a"><div class="alab">Model answer:</div>Sensors can be grouped into different categories:<br>• <b>Active or passive</b> — active sensors produce an energy output and typically require an external power supply; passive sensors simply receive energy and typically require no external power supply.<br>• <b>Invasive or non-invasive</b> — whether the sensor is part of the environment it is measuring, or external to it.<br>• <b>Contact or no-contact</b> — whether they require physical contact with what they are measuring or not.<br>• <b>Absolute or relative</b> — whether they measure on an absolute scale, or based on a difference with a fixed or variable reference value.<br>• <b>Area of application</b> — the specific industry or vertical where they are used.<br>• <b>How sensors measure</b> — the physical mechanism used (thermoelectric, electrochemical, piezo resistive, optic, electric, fluid mechanic, photoelastic).<br>• <b>What sensors measure</b> — their applications or what physical variables they measure.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q17.</span> Define sensitivity, resolution, linearity and drift of a sensor.</div>
<div class="qa-a"><div class="alab">Model answer:</div><b>Sensitivity</b> is a measure of the change in output of the sensor relative to a unit change in the input (the measured quantity).<br><b>Resolution</b> is the smallest amount of change in the input that can be detected and accurately indicated by the sensor.<br><b>Linearity</b> is determined by the calibration curve: the static calibration curve plots the output amplitude versus the input amplitude under static conditions, and its degree of resemblance to a straight line describes the linearity.<br><b>Drift</b> is the deviation from a specific reading of the sensor when the sensor is kept at that value for a prolonged period of time — the zero drift refers to the change in sensor output if the input is kept steady at a level that initially yields a zero reading, and the full-scale drift is the drift if the input is maintained at a value which originally yields a full scale deflection.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q18.</span> What is an actuator? List its types briefly.</div>
<div class="qa-a"><div class="alab">Model answer:</div>An actuator is a machine component or system that moves or controls the mechanism or the system. Actuators convert an electrical signal into a corresponding physical quantity such as movement, force, sound etc.<br>Types: 1) <b>Servo motors</b> — a small device with a two wire DC motor, gear train, potentiometer, integrated circuit and a shaft. 2) <b>Stepper motors</b> — DC motors that move in discrete steps by energizing phases in sequence, giving very precise positioning and/or speed control. 3) <b>DC motors</b> — the most common actuator; simple, cheap, easy to use; convert electrical into mechanical energy. 4) <b>Linear actuators</b> — create motion in a straight line (machine tools, valves and dampers). 5) <b>Relay</b> — an electrically operated switch; a small power operates the coil while the relay controls motors, heaters, lamps or AC circuits. 6) <b>Solenoid</b> — a specially designed electromagnet used in on-off applications such as latching, locking, and triggering.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q19.</span> Explain the biggest challenges for IoT adoption.</div>
<div class="qa-a"><div class="alab">Model answer:</div>1) <b>Security challenges</b> — increasing complexity of cyberattacks makes IoT devices easy targets for hackers; developers must design secure applications to protect devices and users' data.<br>2) <b>Regulation challenges</b> — the industry is relatively new and specific regulations may be lacking; regulations ensure manufacturers follow security and privacy requirements (e.g. GDPR).<br>3) <b>Compatibility challenges</b> — different manufacturers may use different communication protocols and technical standards, making communication difficult.<br>4) <b>Bandwidth challenges</b> — a large number of connected devices generate and transmit data, consuming bandwidth and causing congestion, delays, or reduced performance.<br>5) <b>Customer expectation challenges</b> — customers expect devices to be easy to use, reliable, affordable, secure, and responsive; failing to meet these expectations reduces adoption.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q20.</span> Compare PAN, LAN, MAN and WAN in terms of range, with an example for each.</div>
<div class="qa-a"><div class="alab">Model answer:</div><b>PAN</b> (Personal Area Network) is short-range, distances measured in meters — a wearable fitness tracker communicates with an app on a cell phone over BLE.<br><b>LAN</b> (Local Area Network) is short- to medium-range, up to hundreds of meters — factory sensors communicate with a gateway through Wi-Fi.<br><b>MAN</b> (Metropolitan Area Network) is long-range (city wide), up to a few kilometers — smart parking sensors throughout a city connected in a mesh network topology.<br><b>WAN</b> (Wide Area Network) is long-range, distances measured in kilometers — agricultural sensors monitor temperature, humidity and other environmental conditions across a large farm.</div></div>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-layers"/></svg>Likely essay questions — Lectures 4–5</h3>
<div class="qa"><div class="qq"><span class="qn">Q21.</span> Compare IoT Level 1 and IoT Level 6.</div>
<div class="qa-a"><div class="alab">Model answer:</div><b>Level 1</b> has a single node/device for sensing, monitoring, actuating, storing data, performing analysis and hosting application. Data involved is not big, so data is stored in local databases. It suits low cost and low complexity solutions, and analysis is not computationally intensive so it can be analyzed locally. Example: home automation.<br><b>Level 6</b> has multiple independent nodes/devices for sensing, monitoring, actuating and sending the data to cloud by controller service. Data involved is big, so data is stored in cloud, and the analysis requirement is computationally intensive. It has a centralized controller which is aware of the status of all the end nodes and sends control command to the nodes. Examples: weather monitoring and structural health monitoring.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q22.</span> Differentiate between M2M and IoT.</div>
<div class="qa-a"><div class="alab">Model answer:</div>• M2M is a subset of IoT; IoT is the super set — a vast network of connected devices that may or may not include human interaction.<br>• M2M uses point-to-point communication embedded within hardware at the customer site; IoT uses multipoint communication.<br>• M2M uses cellular or wired network; IoT uses wireless network.<br>• M2M does not necessarily require internet connection; IoT in the majority of cases requires Internet connection.<br>• M2M is more hardware based; IoT is more software based.<br>• M2M applications are on-premises; IoT uses cloud-based applications.<br>• In M2M, data collection and analysis is done in on-premises storage infrastructure; in IoT it is done in cloud mostly.<br>• M2M is non-IP based communication; IoT is IP-based communication.<br>• M2M protocols (ZigBee, Bluetooth, ModBus, M-Bus, Wireless M-Bus, PLC, 6LoWPAN, IEEE 802.15.4, Z-wave) work below the network layer; IoT protocols (HTTP, CoAP, WebSocket, MQTT, XMPP, DDS, AMQP) work above the network layer.<br>• M2M devices are homogeneous type within an M2M area network; IoT devices are heterogeneous type.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q23.</span> Explain M2M architecture.</div>
<div class="qa-a"><div class="alab">Model answer:</div>M2M architecture consists of three domains:<br>1) <b>M2M device domain</b> — consists of three entities: physical devices, communication interface and gateway. The communication interface is a port or a subsystem which receives the input from one end and sends the data received to another.<br>2) <b>M2M network domain</b> — consists of M2M server, device identity management, data analytics and data and device management.<br>3) <b>M2M application domain</b> — consists of application for services, monitoring, analysis and controlling of devices networks.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q24.</span> Explain gateway prefix allotment and why it is needed.</div>
<div class="qa-a"><div class="alab">Model answer:</div>Gateways connect IoT LANs and WANs together and forward packets between them on the IP layer. Since a large number of devices are connected, address space needs to be conserved, and each connected device needs a unique address.<br>IP addresses allocated to devices within a gateway's jurisdiction are valid only in its domain — the same addresses may be allocated in another gateway's domain. Hence, to maintain uniqueness, each gateway is assigned a unique network prefix, used for global identification of gateways. This unique identifier removes the need of allocating a unique IP address to each and every device connected to the network, hence saves a lot of address space.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q25.</span> What are the four modes of data gathering? Give an example for each.</div>
<div class="qa-a"><div class="alab">Model answer:</div>1) <b>Polling</b> — the data is sought from a device by addressing the device; e.g. waste container filling information in a waste management system.<br>2) <b>Event-based gathering</b> — the data is sought from the device on an event; e.g. when a card reaches near the card reader.<br>3) <b>Scheduled interval</b> — the data is sought from a device at select intervals; e.g. data for ambient light condition in Internet of streetlights.<br>4) <b>Continuous monitoring</b> — the data is sought from a device continuously; e.g. data for traffic presence in a particular street.</div></div>

<div class="qa"><div class="qq"><span class="qn">Q26.</span> Differentiate between aggregation, compaction and fusion.</div>
<div class="qa-a"><div class="alab">Model answer:</div>These are the three steps for data enrichment before the data disseminates to the network:<br><b>Aggregation</b> refers to the process of joining together present and previously received data frames after removing redundant or duplicate data.<br><b>Compaction</b> means making information short without changing the meaning or context; for example, transmitting only the incremental data so that the information sent is short.<br><b>Fusion</b> means formatting the information received in parts through various data frames and several types of data (or data from several sources), removing redundancy in the received data and presenting the formatted information created from the information parts. Data fusion is used when the individual records are not required and/or are not retrievable later.</div></div>
</section>
</div>

<div class="sp" id="iot-hl" hidden>
<div class="call">A lecture-by-lecture list of the original highlighted phrases, keeping the full sentence or definition whenever only part of it was highlighted in the source.</div>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-book"/></svg>Lecture 1 — Introduction to IoT</h3>
<ul class="hllist">
<li>IoT is a massive network of physical devices embedded with sensors, software, electronics, and network which allows the devices to exchange or collect data and perform certain actions.</li>
<li>Things – physical devices, appliances, gadgets, etc. / Internet – through which these devices are connected.</li>
<li>It cuts down human effort and paves the way for accessing the connected devices easily.</li>
<li>IoT makes things virtually smart through AI algorithms, data collection, and networks enhancing our lives.</li>
<li>Each IoT device has a unique identity and a unique identifier (IP address).</li>
<li>IoT devices support interoperable communication protocols and can communicate with other devices and infrastructure.</li>
<li>Self Configuring: allowing a large number of devices to work together to provide certain functionality.</li>
<li>Consumer IoT (CIoT) refers to the use of IoT for consumer applications and devices. Common CIoT products include smartphones, wearables, smart assistants, home appliances, etc.</li>
<li>CIoT solutions leverage Wi-Fi, Bluetooth, and ZigBee to facilitate connectivity; these are short-range technologies suitable for homes and offices.</li>
<li>Industrial IoT (IIoT) is perhaps the most dynamic wing of the IoT industry, augmenting existing industrial systems to make them more productive and efficient.</li>
<li>Infrastructure IoT is concerned with the development of smart infrastructures that incorporate IoT technologies to boost efficiency, cost savings, and maintenance.</li>
<li>IoMT is the use of IoT in military settings and battlefield situations, mainly to improve situational awareness and response times.</li>
<li>Sensors are the components that provide the actionable insights that power the IoT and enable organizations to make more effective business decisions.</li>
<li>Wi-Fi was designed for computers, and 4G LTE wireless targeted smartphones and portable devices.</li>
<li>IoT sensors will operate autonomously for years at a time, often in inaccessible places, without recharging or replacement.</li>
<li>IoT Security: Security technologies will be required to protect IoT devices and platforms from both attacks and physical tampering.</li>
<li>IoT security will be complicated by the fact that many “things” use simple processors and operating systems that may not support sophisticated security approaches.</li>
<li>Sensors are used for sensing things and devices; a sensor is a device that provides a usable output in response to a specified measurement.</li>
<li>The sensor attains a physical parameter and converts it into a signal suitable for processing (e.g. electrical, mechanical, optical).</li>
<li>Active sensors require an external power supply; passive sensors require no external power supply.</li>
<li>Invasive sensors are part of the environment they are measuring; non-invasive sensors are external to it.</li>
<li>Contact sensors require physical contact with what they are measuring; no-contact sensors do not.</li>
<li>Absolute sensors measure on an absolute scale; relative sensors measure based on a difference with a fixed or variable reference value.</li>
<li>Sensitivity is a measure of the change in output of the sensor relative to a unit change in the input (the measured quantity).</li>
<li>Resolution is the smallest amount of change in the input that can be detected and accurately indicated by the sensor.</li>
<li>Linearity is determined by the calibration curve; its degree of resemblance to a straight line describes the linearity.</li>
<li>Drift is the deviation from a specific reading of the sensor when the sensor is kept at that value for a prolonged period of time.</li>
<li>The zero drift refers to the change in sensor output if the input is kept steady at a level that initially yields a zero reading.</li>
<li>The full-scale drift is the drift if the input is maintained at a value which originally yields a full scale deflection.</li>
<li>The range of a sensor is determined by the allowed lower and upper limits of its input or output.</li>
<li>Repeatability is defined as the deviation between measurements in a sequence when the object under test is the same and approaches its value from the same direction each time.</li>
<li>Common IoT sensors include temperature sensors, pressure sensors, motion sensors, level sensors, image sensors, proximity sensors, water quality sensors, chemical sensors, gas sensors, smoke sensors, infrared sensors, and humidity sensors.</li>
<li>Smoke sensors or detectors pick up the presence of smoke conditions which could be an indication of a fire, typically using optical sensors or ionization detection.</li>
<li>Infrared sensor technologies detect infrared radiation that is emitted by objects; they are used in non-contact thermometers and in detecting blood flow or blood pressure in patients.</li>
</ul>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-layers"/></svg>Lecture 2 — IoT Architecture</h3>
<ul class="hllist">
<li>The perception layer is the physical layer hosting smart things; it converts analog signals into digital data and vice versa.</li>
<li>Function: Collect information from the physical environment or perform an action.</li>
<li>The connectivity layer is responsible for communications across devices, networks, and cloud services that make up the IoT infrastructure.</li>
<li>The processing layer accumulates and manages all data streams; it receives, stores, and processes the data.</li>
<li>The application layer provides useful services such as analytics, reporting, and device control to end users.</li>
<li>Edge computing is used to process data close to where it is generated instead of sending everything to a distant cloud server, reducing system latency.</li>
<li>The security layer is responsible for preventing data breaches and protecting the IoT system.</li>
<li>Connectivity examples include Bluetooth/BLE, Wi-Fi, NFC, Zigbee, LoRaWAN, 5G, and Ethernet.</li>
</ul>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-shield"/></svg>Lecture 3 — Challenges &amp; Networking</h3>
<ul class="hllist">
<li>Techniques to reduce bandwidth requirements include sampling less frequently, filtering, aggregation, and compression; each has its own limitations.</li>
<li>Power consumption in IoT devices can be reduced by using sleep mode, choosing efficient power sources, and optimizing communication.</li>
<li>Intermittent connectivity can be handled by buffering data locally and transmitting it once the network is available again.</li>
</ul>
</section>

<section class="block"><h3><svg class="ic" aria-hidden="true"><use href="#i-cloud"/></svg>Lectures 4–5 — IoT Levels &amp; M2M</h3>
<ul class="hllist">
<li>IoT device: the IoT device allows identification, remote sensing, actuating, and remote monitoring capabilities.</li>
<li>Resource: resources are the software components on the IoT device for accessing, processing and storing sensor information, or controlling actuators connected to the device.</li>
<li>Controller Service: controller service is a native service that runs on the device and interacts with the web services.</li>
<li>Database: database can be either local or in the cloud and stores the data generated by the IoT device.</li>
<li>Web Service: this acts as an interface between IoT device, application, database and analysis components; web services can be implemented using HTTP and REST.</li>
<li>Analysis Component: the analysis component generates results from IoT data that are easy for the user to understand.</li>
<li>Application: IoT applications provide an interface that the user can use to control and monitor aspects of the IoT system.</li>
<li>IoT Level 1: a single node/device for sensing, monitoring, actuating, storing data, performing analysis and hosting application; data is stored locally and analysis is not computationally intensive.</li>
<li>IoT Level 2: a single node does sensing, monitoring, actuating, analysis, and hosting, with the data stored in the cloud and visualized through a cloud-based application.</li>
<li>IoT Level 3: a single node senses, monitors, actuates, and hosts the application; big data is stored in the cloud and visualized through a cloud-based application.</li>
<li>IoT Level 4: multiple nodes perform sensing, monitoring, actuating, and analysis; big data is stored in the cloud and can be aggregated.</li>
<li>IoT Level 5: multiple sensing, monitoring, and actuating nodes use one coordinator node to collect and send big data to the cloud.</li>
<li>IoT Level 6: has multiple independent nodes/devices for sensing, monitoring, actuating and sending the data to the cloud by controller service. Data involved is big, so data is stored in cloud and the analysis requirement is computationally intensive.</li>
<li>M2M is a subset of IoT; IoT is the superset.</li>
<li>M2M uses point-to-point communication; IoT uses multipoint communication.</li>
<li>M2M is more hardware-based and often on-premises; IoT is more software-based and more cloud-based.</li>
</ul>
</section>
<div class="botnav" aria-label="التنقل بين الأجزاء"><button data-sub="iot-l45">‹ السابق: Lectures 4–5: IoT Levels &amp; M2M</button><button data-sub="iot-exp">التالي: Expected Questions ›</button></div>
</div>

</div>
`};

})();
