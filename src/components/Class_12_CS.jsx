import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
const Class_12_CS = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="p-4 max-w-4xl mx-auto text-gray-800">
                <header className="text-center mb-6">

                    <h2 className="text-xl">COMPUTER SCIENCE NOTEBOOK - CLASS 12<sup>th</sup></h2>
                    <p className="italic">Notes by Irfanullah Khan</p>
                    <p className="text-blue-600 font-semibold">"Struggle Today, Shine Tomorrow" - Irfan Sir</p>
                </header>

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">📘 Acknowledgement</h3>
                    <p>Thanks to Allah Almighty for having me this Opportunity for writing this NOTEBOOK for our Dear Students for fostering their Career Development. This notebook is carefully compiled by Irfanullah Khan, an MCA degree holder with hands-on experience in the IT industry. He has worked with companies such as CloudFort & Consultancy and Nexus Info Private Limited, gaining practical knowledge and industry exposure.</p>
                    <p>The purpose of this notebook is to provide clear, simplified, and student-friendly notes on Information Technology. It includes simplified explanations, examples, and key points based on the latest syllabus.</p>
                </section>

                <section className="mb-8">
                    <h3 style={{ color: "red" }} className="text-xl font-semibold mb-2">Chapter Name : Computer Networks</h3>
                    <h4 className="text-lg font-semibold">Unit - 2</h4>
                    <h4 className="text-lg font-semibold mt-4">📘 Data Communication Terminologies</h4>

                    <p className="mt-2">📌1. <strong>Concept of Communication</strong></p>
                    <ul className="list-disc pl-6">
                        <li>Communication means sharing of information between two or more people or devices.</li>
                        <li>In computers, data communication is the process of transferring digital information from one place to another.</li>
                        <li>It allows devices like computers, phones, and tablets to exchange messages, files, audio, or video.</li>
                        <li>It can happen over wires (wired) or without wires (wireless).</li>
                        <li>It is the foundation of networking and the internet.</li>
                    </ul>
                    <p>💡 <strong>Example:</strong> Sending a WhatsApp message from your mobile phone to your friend's phone is a form of data communication.</p>

                    <p className="mt-4">📌2. <strong>Components of Data Communication</strong></p>
                    <ul className="list-disc pl-6">
                        <li><strong>Sender</strong>: The device or person that sends the message. Example: Your computer when you send an email.</li>
                        <li><strong>Receiver</strong>: The device or person that receives the message. Example: Your friend's mobile when they get your email.</li>
                        <li><strong>Message</strong>: The information being communicated (text, image, audio, video, or any data).</li>
                        <li><strong>Communication Medium</strong>: The path used for transferring data (wired or wireless).</li>
                        <li><strong>Protocols</strong>: Rules and formats for understanding each other (e.g., HTTP, SMTP, FTP).</li>
                    </ul>
                    <p>💡 <strong>Real-life Example:</strong> Sending an email from your laptop to your teacher: Laptop = Sender, Email content = Message, Wi-Fi = Medium, Teacher's phone = Receiver, SMTP = Protocol</p>

                    <p className="mt-4">📌3. <strong>Measuring Capacity of Communication Media</strong></p>
                    <h4 className="font-semibold">🔹 Bandwidth</h4>
                    <ul className="list-disc pl-6">
                        <li>Maximum amount of data that can be sent in one second.</li>
                        <li>Measured in bps, Kbps, Mbps, Gbps.</li>
                    </ul>
                    <p>💡 Example: 100 Mbps broadband connection transfers 100 megabits per second.</p>
                    <h4 className="font-semibold">🔹 Data Transfer Rate</h4>
                    <ul className="list-disc pl-6">
                        <li>Actual speed at which data is transferred in real-time.</li>
                    </ul>
                    <p>💡 Example: You download at 80 Mbps on a 100 Mbps plan.</p>

                    <p className="mt-4">📌4. <strong>IP Address (Internet Protocol Address)</strong></p>
                    <ul className="list-disc pl-6">
                        <li>Every internet-connected device has a unique number called IP address.</li>
                        <li>Helps identify and locate a device.</li>
                        <li>Types: IPv4 (e.g., 192.168.1.1), IPv6 (e.g., 2400:cb00:2048:1::c629:d7a2)</li>
                    </ul>
                    <p>💡 Example: www.google.com resolves to its IP address to connect to its server.</p>

                    <p className="mt-4">📌5. <strong>Switching Techniques</strong></p>
                    <h4 className="font-semibold">🔹 Circuit Switching</h4>
                    <ul className="list-disc pl-6">
                        <li>Dedicated path between sender and receiver.</li>
                        <li>Path remains until communication ends.</li>
                        <li>Used in old telephone systems.</li>
                    </ul>
                    <p>💡 Example: Landline phone call.</p>

                    <h4 className="font-semibold">✔️ Key Points:</h4>
                    <ul className="list-disc pl-6">
                        <li>Good for continuous data like voice</li>
                        <li>Less efficient for short data transfers</li>
                        <li>Wastes resources if idle</li>
                    </ul>

                    <h4 className="font-semibold mt-4">🔹 Packet Switching</h4>
                    <ul className="list-disc pl-6">
                        <li>Data broken into packets, sent independently</li>
                        <li>Reassembled at receiver</li>
                        <li>Used in internet communication</li>
                    </ul>
                    <p>💡 Example: Watching YouTube video.</p>

                    <h4 className="font-semibold">✔️ Key Points:</h4>
                    <ul className="list-disc pl-6">
                        <li>Efficient use of resources</li>
                        <li>Supports many users</li>
                        <li>Used in emails, browsing, messaging apps</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6">📜 Summary:</h3>
                    <ul className="list-disc pl-6">
                        <li>Data communication helps devices share information</li>
                        <li>Main parts: Sender, Receiver, Message, Medium, Protocol</li>
                        <li>Measured using Bandwidth and Data Transfer Rate</li>
                        <li>IP address uniquely identifies a device</li>
                        <li>Switching: Circuit (fixed path), Packet (packets sent independently)</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6">📘 Network Devices</h3>
                    <p>Network devices are hardware tools used to connect computers and other devices together in a network so they can share data, internet, printers, and more.</p>
                </section>
                <ul className="list-disc pl-5">
                    <li>
                        ✅ <strong>Modem (MOdulator-DEModulator)</strong>
                        <ul className="list-disc pl-5">
                            <li>A modem is used to connect your home or office to the internet.</li>
                            <li>It converts digital signals (used by computers) into analog signals (used by telephone lines) and vice versa.</li>
                            <li>Without a modem, your computer cannot communicate over a telephone line or cable network.</li>
                            <li>💡 <strong>Example:</strong> The box provided by your Internet Service Provider (ISP) to access the internet is a modem.</li>
                        </ul>
                    </li>
                    <li>
                        ✅ <strong>Ethernet Card (LAN Card / NIC – Network Interface Card)</strong>
                        <ul className="list-disc pl-5">
                            <li>An Ethernet card is a hardware component fitted in a computer to connect to a network using a cable.</li>
                            <li>It has a port to plug in the RJ45 Ethernet cable.</li>
                            <li>Every Ethernet card has a unique MAC address that identifies the device on a network.</li>
                            <li>💡 <strong>Example:</strong> In most desktops and laptops, the LAN port you see is part of the Ethernet card.</li>
                        </ul>
                    </li>
                    <li>
                        ✅ <strong>RJ45 Connector (Registered Jack 45)</strong>
                        <ul className="list-disc pl-5">
                            <li>RJ45 is a type of connector used to connect Ethernet cables to computers, routers, and switches.</li>
                            <li>It looks like a wider version of a telephone plug and has 8 metal pins.</li>
                            <li>Used in wired LAN connections.</li>
                            <li>💡 <strong>Example:</strong> The cable you plug into the back of your computer or Wi-Fi router for internet access uses an RJ45 connector.</li>
                        </ul>
                    </li>
                    <li>
                        ✅ <strong>Repeater</strong>
                        <ul className="list-disc pl-5">
                            <li>A repeater is used to boost or amplify weak signals in a network.</li>
                            <li>It helps extend the range of a network over a large area.</li>
                            <li>It does not filter or direct traffic — it simply copies the signal.</li>
                            <li>💡 <strong>Example:</strong> A Wi-Fi range extender in your home is a type of repeater that helps you get internet in far rooms.</li>
                        </ul>
                    </li>
                    <li>
                        ✅ <strong>Hub</strong>
                        <ul className="list-disc pl-5">
                            <li>A hub is a simple device that connects multiple computers in a network.</li>
                            <li>When it receives data, it sends it to all connected devices, whether they need it or not.</li>
                            <li>It is slow and not secure.</li>
                            <li>💡 <strong>Example:</strong> Like a teacher announcing homework loudly — everyone hears it whether it's for them or not.</li>
                        </ul>
                    </li>
                </ul>
                ✅ <strong>Switch</strong>
                <ul className="list-disc pl-5">
                    <li>A switch is a smarter version of a hub.</li>
                    <li>It sends data only to the specific device that needs it.</li>
                    <li>It reduces traffic and is faster and more secure than a hub.</li>
                    <li>💡 <strong>Example:</strong> Like a teacher calling only the specific student who needs the homework — not the whole class.</li>
                </ul>

                <li>
                    ✅ <strong>Router</strong>
                    <ul className="list-disc pl-5">
                        <li>A router connects multiple networks together.</li>
                        <li>It directs data from your local network (LAN) to the internet (WAN).</li>
                        <li>It assigns IP addresses to devices and routes data intelligently.</li>
                        <li>Most home routers also have Wi-Fi built-in.</li>
                        <li>💡 <strong>Example:</strong> Your Wi-Fi box at home is a router that connects all your devices to the internet.</li>
                    </ul>
                </li>
                <li>
                    ✅ <strong>Gateway</strong>
                    <ul className="list-disc pl-5">
                        <li>A gateway acts as a translator between two different networks that use different communication rules (protocols).</li>
                        <li>It connects a private network to the outside world (internet).</li>
                        <li>All data leaving or entering the network passes through the gateway.</li>
                        <li>💡 <strong>Example:</strong> Like an interpreter translating between two people speaking different languages.</li>
                    </ul>
                </li>

                ✅ <strong>Wi-Fi Card / Wireless Network Card</strong>
                <ul className="list-disc pl-5">
                    <li>A Wi-Fi card allows your computer or laptop to connect to wireless networks (Wi-Fi).</li>
                    <li>It receives and sends radio signals to and from the router.</li>
                    <li>Some are built-in, while others are USB plug-in cards.</li>
                    <li>💡 <strong>Example:</strong> Your smartphone or laptop has a built-in Wi-Fi card that connects to your home Wi-Fi.</li>
                </ul>
<section className="p-4 max-w-4xl mx-auto text-gray-800">
  <h2 className="text-2xl font-semibold mb-4">🔹 What is a Computer Network?</h2>
  <ul className="list-disc pl-6 space-y-1">
    <li>A computer network is a system where two or more computers are connected to each other to share data, resources, and communicate.</li>
  </ul>
  <h3 className="text-xl font-semibold mt-6 mb-2">🔹 Key Features:</h3>
  <ul className="list-disc pl-6 space-y-1">
    <li>Enables sharing of files, printers, internet, etc.</li>
    <li>Communication can be wired (using cables) or wireless (Wi-Fi).</li>
    <li>Devices like laptops, mobile phones, and tablets can all be part of a network.</li>
  </ul>
  <p className="mt-2"><strong>🔹 Real-life Example:</strong> Your school computer lab where all computers are connected to a single printer is a basic example of a Local Area Network (LAN).</p>

  <h2 className="text-2xl font-semibold mt-10 mb-4">✅ 2. Evolution of Networking</h2>
  <p>Networking didn't develop overnight—it went through several stages before becoming the modern internet we use today. Here are the key milestones:</p>

  <h3 className="text-lg font-semibold mt-6">🟪 a. ARPANET (Advanced Research Projects Agency Network)</h3>
  <ul className="list-disc pl-6 space-y-1">
    <li><strong>Year:</strong> 1969</li>
    <li><strong>Developed By:</strong> US Department of Defense (ARPA)</li>
    <li><strong>What it was:</strong>
      <ul className="list-disc pl-6">
        <li>First practical implementation of packet switching technology.</li>
        <li>First network to use TCP/IP protocols, which became the foundation of the internet.</li>
      </ul>
    </li>
    <li><strong>Features:</strong>
      <ul className="list-disc pl-6">
        <li>Connected 4 universities in the US: UCLA, Stanford, UC Santa Barbara, and the University of Utah.</li>
        <li>Allowed researchers to communicate and share data remotely.</li>
      </ul>
    </li>
  </ul>
  <p className="mt-2">💡 <strong>Real-Life Impact:</strong> ARPANET proved that digital communication between distant computers was possible. It laid the foundation of the internet.</p>

  <h3 className="text-lg font-semibold mt-6">🟪 b. NSFNET (National Science Foundation Network)</h3>
  <ul className="list-disc pl-6 space-y-1">
    <li><strong>Year:</strong> 1986</li>
    <li><strong>Developed By:</strong> National Science Foundation (USA)</li>
    <li><strong>What it was:</strong>
      <ul className="list-disc pl-6">
        <li>Built to replace ARPANET and expand network access to more research and educational institutions.</li>
        <li>Connected supercomputers and universities across the USA.</li>
      </ul>
    </li>
    <li><strong>Features:</strong>
      <ul className="list-disc pl-6">
        <li>Allowed much higher data speed than ARPANET.</li>
        <li>Was a backbone that helped connect many smaller networks.</li>
      </ul>
    </li>
  </ul>
  <p className="mt-2">💡 <strong>Real-Life Impact:</strong> NSFNET helped spread networking beyond military and research, making it accessible to education and public institutions.</p>

  <h3 className="text-lg font-semibold mt-6">🟪 c. INTERNET</h3>
  <ul className="list-disc pl-6 space-y-1">
    <li><strong>Year:</strong> 1990 onward</li>
    <li><strong>What is the Internet?</strong>
      <ul className="list-disc pl-6">
        <li>A worldwide system of interconnected computer networks that use the TCP/IP protocol to communicate.</li>
        <li>Allows services like email, websites, video streaming, social media, and more.</li>
      </ul>
    </li>
    <li><strong>Features:</strong>
      <ul className="list-disc pl-6">
        <li>Connects billions of devices worldwide.</li>
        <li>Supports technologies like HTML, HTTP/HTTPS, DNS, Web Hosting.</li>
        <li>Gave rise to e-commerce, e-learning, online banking, and much more.</li>
      </ul>
    </li>
  </ul>
  <p className="mt-2">💡 <strong>Real-Life Example:</strong> When you search something on Google, use WhatsApp, or shop from Amazon, you’re using the Internet.</p>

  <h3 className="text-xl font-semibold mt-10 mb-2">📝 Summary Points</h3>
  <ul className="list-disc pl-6 space-y-1">
    <li><strong>🔹 What is Networking?</strong>
      <ul className="list-disc pl-6">
        <li>Connection of multiple computers/devices to share data/resources.</li>
        <li>Enables communication using protocols like TCP/IP.</li>
      </ul>
    </li>
    <li><strong>🔹 Evolution Timeline:</strong>
      <ul className="list-disc pl-6">
        <li>1969 – ARPANET: First packet-switched network; military and research use.</li>
        <li>1986 – NSFNET: Academic use; expanded access to universities and researchers.</li>
        <li>1990 onwards – INTERNET: Commercial and global use; open to everyone.</li>
      </ul>
    </li>
  </ul>
</section>
<section className="my-8">
  <h2 className="text-xl font-bold mb-4">📘 Network Protocols</h2>
  <p className="mb-4">
    ✅ <strong>What is a Protocol?</strong><br />
    A protocol is a set of rules that computers follow to communicate with each other over a network or the internet.<br />
    Think of it like grammar rules in language – without rules, communication would not make sense.<br />
    Each protocol has a specific purpose, such as sending emails, browsing websites, transferring files, etc.
  </p>
  <ul className="list-disc pl-5 space-y-4">
    <li>
      📌 <strong>HTTP (HyperText Transfer Protocol)</strong><br />
      • Used for browsing websites.<br />
      • Helps transfer webpages (text, images, links) between web servers and web browsers.<br />
      • It works over the internet using port 80.<br />
      💡 <strong>Example:</strong> When you visit a website like http://example.com, HTTP is used to display the page.
    </li>
    <li>
      📌 <strong>HTTPS (HyperText Transfer Protocol Secure)</strong><br />
      • A secure version of HTTP.<br />
      • It uses encryption (SSL/TLS) to protect the data from hackers.<br />
      • Works over port 443.<br />
      • Used for secure websites like online banking, shopping, or email login pages.<br />
      💡 <strong>Example:</strong> https://www.amazon.in uses HTTPS to safely handle payments and your personal info.
    </li>
    <li>
      📌 <strong>FTP (File Transfer Protocol)</strong><br />
      • Used to upload or download files between a client and a server over a network.<br />
      • Commonly used by web developers to update websites.<br />
      • Can be accessed using FTP software or commands.<br />
      💡 <strong>Example:</strong> A web developer uploads files to a hosting server using FTP.
    </li>
    <li>
      📌 <strong>PPP (Point-to-Point Protocol)</strong><br />
      • Used to establish a direct connection between two computers over phone lines or serial cables.<br />
      • Mostly used in dial-up internet connections (older technology).<br />
      • Handles authentication, error detection, and compression.<br />
      💡 <strong>Example:</strong> In early internet days, PPP was used to connect a computer to the internet via telephone.
    </li>
    <li>
      📌 <strong>SMTP (Simple Mail Transfer Protocol)</strong><br />
      • Used to send emails from a client to a mail server or between mail servers.<br />
      • Works on port 25.<br />
      • It does not receive emails – only sends.<br />
      💡 <strong>Example:</strong> When you click "send" in Gmail, SMTP helps deliver your message to the recipient's mail server.
    </li>
    <li>
      📌 <strong>POP3 (Post Office Protocol version 3)</strong><br />
      • Used to receive emails from a mail server to a computer.<br />
      • Downloads the emails and removes them from the server.<br />
      • Works on port 110.<br />
      💡 <strong>Example:</strong> If you check email using Outlook or Thunderbird, POP3 can download the email to your system.
    </li>
    <li>
      📌 <strong>TCP/IP (Transmission Control Protocol / Internet Protocol)</strong><br />
      • It is the basic communication protocol of the internet.<br />
      • TCP breaks data into small packets, ensures they arrive correctly.<br />
      • IP handles the addressing and delivery of those packets.<br />
      • Together, they ensure reliable communication.<br />
      💡 <strong>Example:</strong> When you stream a video or open a website, TCP/IP helps break and deliver the data correctly.
    </li>
    <li>
      📌 <strong>TELNET (Telecommunication Network Protocol)</strong><br />
      • Used to remotely access and control a computer using a command line.<br />
      • Works over port 23.<br />
      • It is not secure, so it's not commonly used anymore (replaced by SSH).<br />
      💡 <strong>Example:</strong> A network admin accessing a remote computer to fix a server problem.
    </li>
    <li>
      📌 <strong>VoIP (Voice over Internet Protocol)</strong><br />
      • Used to make voice calls over the internet instead of a telephone line.<br />
      • Converts voice into digital packets, sends over the internet, and plays it back as sound.<br />
      • Requires microphone, speaker, internet, and VoIP software.<br />
      💡 <strong>Example:</strong> WhatsApp calls, Zoom audio, Google Meet voice – all use VoIP.
    </li>
  </ul>
</section>
<section className="my-8">
  <h2 className="text-xl font-bold mb-4">🟪 What is a Network?</h2>
  <p className="mb-4">
    A computer network is a group of two or more connected computers/devices that share data, resources (like printers), or internet.<br />
    The connection can be wired (using cables) or wireless (Wi-Fi, Bluetooth, etc.).
  </p>

  <h3 className="text-lg font-semibold mb-2">📌 Types of Networks</h3>
  <ul className="list-disc pl-5 space-y-4">
    <li>
      ✅ <strong>PAN (Personal Area Network)</strong><br />
      • Covers a small area – typically a few meters.<br />
      • Used for personal devices like phone, laptop, smartwatch.<br />
      • Usually wireless (Bluetooth, infrared).<br />
      💡 <strong>Example:</strong> Connecting your smartphone to Bluetooth headphones is an example of PAN.
    </li>
    <li>
      ✅ <strong>LAN (Local Area Network)</strong><br />
      • Covers a small area like a room, office, school, or building.<br />
      • Devices are connected using cables or Wi-Fi.<br />
      • Very fast and private network.<br />
      💡 <strong>Example:</strong> Computers in a school computer lab connected to a single printer and server form a LAN.
    </li>
    <li>
      ✅ <strong>MAN (Metropolitan Area Network)</strong><br />
      • Covers a city or town.<br />
      • Made up of several LANs.<br />
      • Often managed by government or large companies.<br />
      💡 <strong>Example:</strong> A network that connects all schools in a city to the education department is a MAN.
    </li>
    <li>
      ✅ <strong>WAN (Wide Area Network)</strong><br />
      • Covers a large area, like countries or continents.<br />
      • Connects multiple LANs and MANs.<br />
      • Usually uses satellite or telephone lines.<br />
      • The Internet is the biggest example of WAN.<br />
      💡 <strong>Example:</strong> A bank with offices across India connected together forms a WAN.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mt-8 mb-2">📌 Network Topologies</h3>
  <p className="mb-4">Topology means the arrangement of computers/devices in a network – how they are connected.</p>
  <ul className="list-disc pl-5 space-y-4">
    <li>
      ✅ <strong>Bus Topology</strong><br />
      • All computers are connected to a single central cable (called backbone).<br />
      • Data travels in both directions.<br />
      • If the main cable fails, the entire network fails.<br />
      💡 <strong>Example:</strong> Old LAN setups in offices or classrooms used bus topology.<br />
      ✔️ <strong>Pros:</strong> Easy to set up, Requires less cable<br />
      ❌ <strong>Cons:</strong> Difficult to find faults, Cable failure affects entire network
    </li>
    <li>
      ✅ <strong>Star Topology</strong><br />
      • All devices are connected to a central device (like a switch or hub).<br />
      • Data goes to the central hub and then to the target device.<br />
      💡 <strong>Example:</strong> Modern schools and offices use star topology.<br />
      ✔️ <strong>Pros:</strong> Easy to manage and troubleshoot, One computer failure does not affect others<br />
      ❌ <strong>Cons:</strong> If the central hub fails, the whole network stops
    </li>
    <li>
      ✅ <strong>Tree Topology</strong><br />
      • It is a combination of star and bus topologies.<br />
      • Has groups of star-connected devices linked to a main cable (backbone).<br />
      • Looks like a tree with branches.<br />
      💡 <strong>Example:</strong> Used in large universities or companies with multiple departments.<br />
      ✔️ <strong>Pros:</strong> Scalable (can grow easily), Easy to manage<br />
      ❌ <strong>Cons:</strong> Complex to set up, Main cable failure affects all branches
    </li>
  </ul>
</section>
<section className="my-8">
  <h2 className="text-xl font-bold mb-4">📘 Transmission Media</h2>
  <p className="mb-4">
    🟪 <strong>What is Transmission Media?</strong><br />
    • Transmission media refers to the path through which data travels from one device to another in a network.<br />
    • It can be wired (using physical cables) or wireless (using air or space to transmit signals).
  </p>

  <h3 className="text-lg font-semibold mb-2">📌 1. Wired Communication Media (Physical Media)</h3>
  <ul className="list-disc pl-5 space-y-4">
    <li>
      🔹 <strong>a. Twisted Pair Cable</strong><br />
      • Most commonly used cable in LANs (Local Area Networks).<br />
      • Made of two copper wires twisted around each other to reduce interference.<br />
      • Comes in two types:<br />
      o UTP (Unshielded Twisted Pair)<br />
      o STP (Shielded Twisted Pair)<br />
      💡 <strong>Example:</strong> Internet cable connecting your computer to the router.<br />
      ✔️ <strong>Advantages:</strong> Cheap and flexible, Easy to install<br />
      ❌ <strong>Disadvantages:</strong> Limited speed and distance, Prone to electrical noise
    </li>
    <li>
      🔹 <strong>b. Coaxial Cable</strong><br />
      • Has a central copper wire with insulation and a metal shield.<br />
      • Used for TV signals, CCTV, and early computer networks.<br />
      • Better at reducing interference than twisted pair cables.<br />
      💡 <strong>Example:</strong> Cable TV connection or broadband line.<br />
      ✔️ <strong>Advantages:</strong> Better shielding than twisted pair, Good for longer distances than UTP<br />
      ❌ <strong>Disadvantages:</strong> Bulkier and harder to install, More expensive
    </li>
    <li>
      🔹 <strong>c. Fiber Optic Cable</strong><br />
      • Made of glass or plastic fibers that carry data as light signals.<br />
      • Supports very high speed and long-distance communication.<br />
      • Used in backbone networks, high-speed internet, and data centers.<br />
      💡 <strong>Example:</strong> JioFiber, Airtel Fiber connections.<br />
      ✔️ <strong>Advantages:</strong> Very fast and secure, Not affected by electromagnetic interference, Long-distance coverage<br />
      ❌ <strong>Disadvantages:</strong> Expensive, Difficult to install and repair
    </li>
  </ul>

  <h3 className="text-lg font-semibold mt-8 mb-2">📌 2. Wireless Communication Media (Unguided Media)</h3>
  <ul className="list-disc pl-5 space-y-4">
    <li>
      🔹 <strong>a. Radio Waves</strong><br />
      • Used for wireless communication over short and long distances.<br />
      • Pass easily through walls and buildings.<br />
      • Used in FM radio, mobile phones, Wi-Fi.<br />
      💡 <strong>Example:</strong> Your phone connects to the internet using radio waves in Wi-Fi.<br />
      ✔️ <strong>Advantages:</strong> Wireless and portable, Covers large areas<br />
      ❌ <strong>Disadvantages:</strong> Can be affected by interference, Less secure without encryption
    </li>
    <li>
      🔹 <strong>b. Microwaves</strong><br />
      • Used for line-of-sight communication (no obstacles between sender and receiver).<br />
      • Travel in straight lines and used for satellite communication and mobile phones.<br />
      • Common in long-distance wireless transmission.<br />
      💡 <strong>Example:</strong> Mobile towers sending signals between cities.<br />
      ✔️ <strong>Advantages:</strong> High data transmission, Ideal for long distances<br />
      ❌ <strong>Disadvantages:</strong> Affected by weather (rain, fog), Needs clear line of sight
    </li>
    <li>
      🔹 <strong>c. Infrared Waves</strong><br />
      • Used for short-distance wireless communication.<br />
      • Cannot pass through walls.<br />
      • Common in TV remotes, wireless mouse, or IR sensors.<br />
      💡 <strong>Example:</strong> When you press a button on your TV remote, infrared signals are used.<br />
      ✔️ <strong>Advantages:</strong> Secure (short range), No radio interference<br />
      ❌ <strong>Disadvantages:</strong> Needs direct line of sight, Works only for short distances
    </li>
  </ul>

  <h3 className="text-lg font-semibold mt-8 mb-2">📝 Summary</h3>
  <p className="mb-2 font-semibold">🔸 Wired Media:</p>
  <ul className="list-disc pl-5 mb-4">
    <li>Twisted Pair Cable – Basic internet cables; cheap but slow.</li>
    <li>Coaxial Cable – Used in cable TV and broadband.</li>
    <li>Fiber Optic Cable – Very fast and secure; used in modern internet services.</li>
  </ul>
  <p className="mb-2 font-semibold">🔸 Wireless Media:</p>
  <ul className="list-disc pl-5">
    <li>Radio Waves – Used in Wi-Fi, FM, Bluetooth, etc.</li>
    <li>Microwaves – Used for mobile networks and satellite links.</li>
    <li>Infrared Waves – Used in TV remotes and close-range sensors.</li>
  </ul>
</section>
📘 Introduction to Web Services
<section className="mb-8">
  <h3 className="text-xl font-semibold mb-2">📘 Introduction to Web Services</h3>
  <p>Web services allow us to access websites, share information, or communicate over the internet using special tools, rules, and systems.</p>

  <ul className="list-disc pl-5 mt-4 space-y-4">
    <li>
      <strong>✅ WWW (World Wide Web)</strong><br />
      - It is a system of web pages connected to each other using the internet.<br />
      - These pages are written in HTML and can include text, images, videos, and links.<br />
      - It uses HTTP/HTTPS protocols to access content.<br />
      - Invented by Tim Berners-Lee.<br />
      💡 <strong>Example:</strong> When you open www.google.com, you're accessing a part of the WWW.
    </li>

    <li>
      <strong>✅ HTML (HyperText Markup Language)</strong><br />
      - It is the main language used to design webpages.<br />
      - HTML uses tags like &lt;h1&gt;, &lt;p&gt;, &lt;img&gt; to format content.<br />
      - It tells the browser what to show and how to display it.<br />
      💡 <strong>Example:</strong> <code>&lt;h1&gt;Hello&lt;/h1&gt;</code> makes the word "Hello" appear in a large heading on a webpage.
    </li>

    <li>
      <strong>✅ XML (Extensible Markup Language)</strong><br />
      - XML is used to store and carry data, not to display it.<br />
      - It uses custom tags created by the user.<br />
      - XML makes it easy to exchange data between systems, apps, or websites.<br />
      💡 <strong>Example:</strong> An XML file can store student records like this:
      <pre className="bg-gray-100 p-2 rounded"><code>{`<student>
  <name>Ali</name>
  <age>16</age>
</student>`}</code></pre>
    </li>

    <li>
      <strong>✅ Domain Name</strong><br />
      - A domain name is the easy-to-remember address of a website.<br />
      - It replaces the IP address (like 192.168.1.1) with a name.<br />
      - Ends with .com, .in, .org, etc.<br />
      💡 <strong>Example:</strong> www.cbse.gov.in is the domain name of the CBSE website.
    </li>

    <li>
      <strong>✅ URL (Uniform Resource Locator)</strong><br />
      - A URL is the full address used to access a webpage.<br />
      - It includes:<br />
        • Protocol (https)<br />
        • Domain (google.com)<br />
        • Path (/search)<br />
      - <strong>Example:</strong> https://www.google.com/search<br />
      💡 <strong>Example:</strong> URL of your school's website might be: https://www.my-school-name.in/admissions
    </li>

    <li>
      <strong>✅ Website</strong><br />
      - A website is a collection of web pages that are related and connected under a single domain name.<br />
      - Every website has a homepage (main entry page).<br />
      - It can be static (fixed content) or dynamic (changing content).<br />
      💡 <strong>Example:</strong> www.wikipedia.org is a website with millions of pages of knowledge.
    </li>

    <li>
      <strong>✅ Web Browser</strong><br />
      - A web browser is software used to open and view websites.<br />
      - It translates HTML into readable pages.<br />
      - Examples include:<br />
        • Google Chrome<br />
        • Mozilla Firefox<br />
        • Safari<br />
        • Microsoft Edge<br />
      💡 <strong>Example:</strong> When you type www.youtube.com in Chrome, it shows you the YouTube website.
    </li>

    <li>
      <strong>✅ Web Server</strong><br />
      - A web server is a computer that stores and delivers websites to users over the internet.<br />
      - It runs 24/7 and responds to browser requests.<br />
      - When you visit a site, the server sends HTML, images, etc. to your browser.<br />
      💡 <strong>Example:</strong> When you open Amazon, its web server sends the data to your browser.
    </li>

    <li>
      <strong>✅ Web Hosting</strong><br />
      - Web hosting means storing website files on a web server so that they can be accessed from anywhere.<br />
      - Hosting companies rent space on their servers.<br />
      - Common web hosting providers:<br />
        • GoDaddy<br />
        • Hostinger<br />
        • Bluehost<br />
        • Google Cloud<br />
      💡 <strong>Example:</strong> When you create your own website and want others to see it online, you need to host it using a hosting service.
    </li>
  </ul>

  <h4 className="mt-6 font-semibold">📝 Summary (Bullet Recap):</h4>
  <ul className="list-disc pl-5 mt-2">
    <li>WWW – System of web pages on the internet.</li>
    <li>HTML – Language to design web pages.</li>
    <li>XML – Language to store and transfer data.</li>
    <li>Domain Name – Human-readable address of a website.</li>
    <li>URL – Full address (including domain and path).</li>
    <li>Website – Collection of related web pages.</li>
    <li>Web Browser – Software to open/view websites.</li>
    <li>Web Server – Computer that hosts websites.</li>
    <li>Web Hosting – Service to put websites on the internet.</li>
  </ul>
</section>
<section className="mb-8">
  <h3 className="text-xl font-semibold mb-2">CBSE Class 12 - Computer Networks Previous Year Questions</h3>
  <ol className="list-decimal pl-5 space-y-4">
    <li>
      <strong>What is the difference between PAN and LAN?</strong><br />
      📅 <em>CBSE 2019 – 2 Marks</em><br />
      Explain with at least one example of each.
    </li>
    <li>
      <strong>What is the role of a modem in a network?</strong><br />
      📅 <em>CBSE 2020 – 1 Mark</em><br />
      Explain its function briefly.
    </li>
    <li>
      <strong>Identify the type of network (PAN, LAN, MAN, WAN) for the following situations:</strong><br />
      📅 <em>CBSE 2022 – 3 Marks</em>
      <ul className="list-disc pl-5">
        <li>a. A network inside a school building</li>
        <li>b. A network connecting branches of a bank in different cities</li>
        <li>c. A network used by a single person with Bluetooth-enabled devices</li>
      </ul>
    </li>
    <li>
      <strong>Differentiate between switch and hub.</strong><br />
      📅 <em>CBSE 2018 – 2 Marks</em><br />
      Mention any two differences.
    </li>
    <li>
      <strong>What is the difference between guided and unguided transmission media? Give one example of each.</strong><br />
      📅 <em>CBSE 2017 – 3 Marks</em>
    </li>
    <li>
      <strong>Expand the following terms:</strong><br />
      📅 <em>CBSE 2023 – 1 Mark Each</em>
      <ul className="list-disc pl-5">
        <li>a. URL</li>
        <li>b. HTTP</li>
        <li>c. IP</li>
        <li>d. ISP</li>
      </ul>
    </li>
    <li>
      <strong>Define the term MAC address and how it is different from an IP address.</strong><br />
      📅 <em>CBSE 2016 – 2 Marks</em>
    </li>
    <li>
      <strong>Name the topology where each node is connected to a central device. Mention one advantage of this topology.</strong><br />
      📅 <em>CBSE 2019 – 2 Marks</em><br />
      Also name the central device used.
    </li>
    <li>
      <strong>What are cookies? Why are they used in Internet communication?</strong><br />
      📅 <em>CBSE 2020 – 2 Marks</em>
    </li>
    <li>
      <strong>Write one difference between the following:</strong><br />
      📅 <em>CBSE 2023 – 3 Marks</em>
      <ul className="list-disc pl-5">
        <li>a. HTTP and FTP</li>
        <li>b. Wi-Fi and Bluetooth</li>
        <li>c. IPv4 and IPv6</li>
      </ul>
    </li>
  </ol>
</section>


            </div>
            <Footer></Footer>
        </>
    )
}

export default Class_12_CS;
