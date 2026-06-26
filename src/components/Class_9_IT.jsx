import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Class_9_IT = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="p-4 max-w-4xl mx-auto text-gray-800">
        <header className="text-center mb-6">

          <h2 className="text-xl">INFORMATION TECHNOLOGY NOTEBOOK - CLASS 9<sup>th</sup></h2>
          <p className="italic">Notes by Irfanullah Khan</p>
          <p className="text-blue-600 font-semibold">"Struggle Today, Shine Tomorrow" - Irfan Sir</p>
        </header>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">📘 Acknowledgement</h3>
          <p>Thanks to Allah Almighty for having me this Opportunity for writing this NOTEBOOK for our Dear Students for fostering their Career Development This notebook is carefully compiled by Irfanullah Khan, an MCA degree holder with hands-on experience in the IT industry. He has worked with companies such as CloudFort & Consultancy and Nexus Info Private Limited, gaining practical knowledge and industry exposure.</p>
          <p>The purpose of this notebook is to provide clear, simplified, and student-friendly notes on Information Technology. It includes simplified explanations, examples, and key points based on the latest syllabus.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold">PART – A: Employability Skills [Unit -3 ICT Skills -1]</h3>
          <h4 className="text-lg font-semibold mt-4">🎮 Input Devices</h4>
          <p><strong>📘 Definition:</strong> Input devices are hardware components that are used to enter data or instructions into a computer. They allow users to communicate with the computer system by feeding it raw information for processing.</p>
          <p><strong>🧠 Explanation:</strong> Input devices convert human-readable data (like text, sound, or actions) into machine-readable format (binary), which the computer can process. Without input devices, the user cannot give commands or data to the computer.</p>
          <ul className="list-disc ml-6">
            <li>Keyboard – Used to type letters, numbers, and commands into the computer.</li>
            <li>Mouse – A pointing device used to move the cursor, click, and drag items on the screen.</li>
            <li>Scanner – Used to scan physical documents or photos and convert them into digital format.</li>
            <li>Microphone – Captures voice or sound and sends it to the computer as audio input.</li>
            <li>Webcam – Used to record videos or take pictures; also used for video conferencing.</li>
            <li>Touchscreen – Allows the user to give input by touching the screen directly, often used in tablets and mobile phones.</li>
            <li>Joystick – Mostly used for playing games and controlling objects in simulations.</li>
          </ul>
          <p><strong>📌 Real-life Examples:</strong></p>
          <ol className="list-decimal ml-6">
            <li>Typing a school project using a keyboard</li>
            <li>Drawing on a touchscreen in a design app</li>
            <li>Clicking on an icon using a mouse</li>
            <li>Speaking in an online class using a microphone</li>
          </ol>
        </section>

        <section className="mb-8">
          <h4 className="text-lg font-semibold mt-4">🖥️ Output Devices</h4>
          <p><strong>📘 Definition:</strong> Output devices are hardware components that display or present the result of the data processed by the computer. They allow the user to view or receive the final output in a readable form.</p>
          <p><strong>📖 Explanation:</strong> After the computer processes the input data, the result needs to be shown to the user. Output devices convert the machine’s digital signals into human-readable form such as text, images, sounds, or printed documents.</p>
          <p><strong>💡 Examples of Output Devices:</strong></p>
          <ul className="list-disc ml-6">
            <li>Monitor – Displays text, images, videos, and software interface on the screen. It is also known as VDU (Visual Display Unit).</li>
            <li>Printer – Produces a hard copy of digital documents or images on paper.</li>
            <li>Speakers – Output audio such as music, sounds, or voice from the computer.</li>
            <li>Headphones – Used to listen to sound privately without disturbing others.</li>
            <li>Projector – Displays the computer screen content on a large surface like a wall or screen.</li>
            <li>Plotter – Used for printing large drawings, maps, or technical designs. Mostly used by engineers and architects.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h4 className="text-lg font-semibold mt-4">🧠 What is CPU?</h4>
          <p><strong>📘 Definition:</strong> The CPU (Central Processing Unit) is known as the brain of the computer. It controls all operations inside the computer and performs all data processing tasks. It takes instructions from the user, processes them, and gives output.</p>
          <p><strong>📖 Explanation:</strong> The CPU handles everything the computer does. It follows a cycle called the Instruction Cycle which includes four main steps:</p>
          <p><strong>Fetch → Decode → Execute → Write Back</strong></p>
          <p>These steps help the computer understand and complete any task given to it.</p>
          <h5 className="font-semibold mt-4">⚙️ Working of CPU – The 4 Main Steps</h5>
          <ul className="list-disc ml-6">
            <li><strong>1. Fetch:</strong> The CPU picks (or fetches) the instruction from the memory (RAM). This instruction is usually a part of a program that is running.<br />📌 Example: The computer fetches an instruction to add two numbers.</li>
            <li><strong>2. Decode:</strong> The fetched instruction is then decoded by the CPU. It understands what action is needed — like addition, display, comparison, etc.<br />📌 Example: CPU understands it has to add 2 numbers.</li>
            <li><strong>3. Execute:</strong> The CPU now performs the actual task or operation — like addition, moving data, or displaying a result.<br />📌 Example: CPU adds 5 + 2 and gets 7.</li>
            <li><strong>4. Write Back (or Store):</strong> The final result is written back to memory or sent to an output device (like monitor).<br />📌 Example: The result 7 is shown on the screen.</li>
          </ul>
          <p><strong>✅ Key Points:</strong></p>
          <ul className="list-disc ml-6">
            <li>CPU repeats these steps millions of times per second.</li>
            <li>This is called the Instruction Cycle or Fetch-Execute Cycle.</li>
            <li>Without the CPU, the computer cannot run any program.</li>
          </ul>
          <h5 className="font-semibold mt-4">✅ The CPU has 3 Main Components:</h5>
          <ol className="list-decimal ml-6">
            <li><strong>CU – Control Unit</strong></li>
            <li><strong>ALU – Arithmetic Logic Unit</strong></li>
            <li><strong>MU – Memory Unit</strong></li>
          </ol>
          <h5 className="font-semibold mt-4">1⃣ Control Unit (CU)</h5>
          <p><strong>🧠 Function:</strong> The Control Unit controls and directs the operations of the computer. It tells the computer what to do and when to do it.</p>
          <p><strong>📌 Key Responsibilities:</strong></p>
          <ul className="list-disc ml-6">
            <li>Fetch instructions from memory.</li>
            <li>Decode the instructions (understand them).</li>
            <li>Send signals to other parts of the CPU to execute instructions.</li>
            <li>Controls input/output devices and memory unit.</li>
          </ul>
          <p><strong>🎓 Example:</strong></p>
          <ul className="list-disc ml-6">
            <li>If you're typing on a keyboard:</li>
            <li>CU receives the key press signal.</li>
            <li>It sends commands to ALU or MU if needed.</li>
            <li>It also tells the monitor to display the character.</li>
          </ul>

          <h5 className="font-semibold mt-4">2⃣ Arithmetic Logic Unit (ALU)</h5>
          <p><strong>🧠 Function:</strong> The ALU performs all arithmetic (math) and logical operations.</p>
          <p><strong>📌 Arithmetic operations:</strong> Addition, Subtraction, Multiplication, Division</p>
          <p><strong>📌 Logical operations:</strong> Comparisons like greater than (&gt;), equal to (=), less than (&lt;), etc.</p>
          <p><strong>🎓 Example:</strong></p>
          <ul className="list-disc ml-6">
            <li>If you enter 5 + 2 in a calculator app:</li>
            <li>CU fetches and decodes the instruction.</li>
            <li>ALU does the calculation: 5 + 2 = 7</li>
            <li>Result is sent to MU or displayed as output.</li>
          </ul>
          <h5 className="font-semibold mt-4">3⃣ Memory Unit (MU)</h5>
          <p><strong>💾 Function:</strong> The Memory Unit stores data, instructions, and results. It is used to store both temporary and permanent information.</p>
          <p><strong>📌 It has two types:</strong></p>
          <ul className="list-disc ml-6">
            <li>Primary Memory – RAM, ROM (fast, small)</li>
            <li>Secondary Memory – HDD, SSD (large, slow)</li>
          </ul>
          <p><strong>🎓 Example:</strong></p>
          <ul className="list-disc ml-6">
            <li>When you run a game:</li>
            <li>The game data is stored in memory.</li>
            <li>Instructions are sent to CU and ALU for processing.</li>
            <li>Final result (like game score) may be saved in memory.</li>
          </ul>

          <h5 className="font-semibold mt-4">🔁 How Do These Work Together?</h5>
          <p><strong>🔸 Suppose you type 10 + 5 and press enter:</strong></p>
          <ol className="list-decimal ml-6">
            <li>CU fetches the instruction “add 10 and 5”.</li>
            <li>CU sends the numbers to the ALU.</li>
            <li>ALU performs the addition → gets result = 15.</li>
            <li>MU stores the result.</li>
            <li>CU tells output device (monitor) to display 15.</li>
          </ol>

        </section>
        <section className="mb-8">
          <h4 className="text-lg font-semibold mt-4">💾 Computer Memory</h4>
          <p><strong>🔹 What is Computer Memory?</strong></p>
          <ul className="list-disc ml-6">
            <li>Memory is used to store data, instructions, and programs.</li>
            <li>It helps the CPU to quickly access and process information.</li>
            <li>Like our brain stores information, computers use memory for work.</li>
            <li>Memory can be temporary (RAM) or permanent (Hard Disk, SSD).</li>
            <li>Data in memory is stored as 0s and 1s (binary form).</li>
            <li>It plays a big role in how fast and smooth a computer works.</li>
            <li>Memory is measured in bits and bytes – commonly in KB, MB, GB, and TB.</li>
            <li>Without memory, the computer cannot run programs or store anything.</li>
          </ul>

          <h5 className="text-lg font-semibold mt-6">🔹 Types of Computer Memory</h5>
          <ul className="list-disc ml-6">
            <li>Memory is divided into two types: Primary Memory and Secondary Memory.</li>
            <li>Primary Memory is fast and stores data temporarily (e.g., RAM, ROM).</li>
            <li>Secondary Memory stores data permanently and is used for long-term storage (e.g., HDD, SSD, CD, DVD, pen drive).</li>
            <li>Both types are essential for a computer's operation.</li>
            <li>Primary Memory is directly accessible by the CPU for fast processing.</li>
            <li>Secondary Memory is used to store large data files, software, and backups.</li>
            <li>Examples of Primary Memory: RAM (Random Access Memory), ROM (Read Only Memory).</li>
            <li>Examples of Secondary Memory: Hard Disk Drive (HDD), Solid State Drive (SSD), Compact Disc (CD), Digital Versatile Disc (DVD), Pen Drive.</li>
          </ul>

        </section>
        <section className="mb-8">
          <h5 className="text-lg font-semibold mt-6">🔹 Primary Memory</h5>
          <ul className="list-disc ml-6">
            <li>Primary memory stores data that the CPU is currently using.</li>
            <li>It is very fast but stores only a limited amount of data.</li>
            <li>Essential for smooth and efficient computer performance.</li>
            <li>Most of it is volatile, meaning data is lost when power is off.</li>
            <li>Includes RAM and ROM.</li>
            <li>RAM is temporary memory used during program execution.</li>
            <li>ROM is permanent memory used during system startup.</li>
            <li>Without primary memory, the CPU cannot function properly.</li>
          </ul>

          <h5 className="text-lg font-semibold mt-6">🔹 RAM (Random Access Memory)</h5>
          <ul className="list-disc ml-6">
            <li>RAM stores data and instructions while the computer is powered on.</li>
            <li>It is temporary and gets cleared when the computer shuts down.</li>
            <li>Used for quick access to running files, games, and applications.</li>
            <li>More RAM allows for faster and smoother performance.</li>
            <li>Data can be accessed from any location (randomly).</li>
            <li>It is known as volatile memory.</li>
            <li>Supports multitasking by handling multiple applications.</li>
            <li>Files in RAM must be saved to permanent storage before shutdown.</li>
          </ul>

          <h5 className="text-lg font-semibold mt-6">🔹 ROM (Read Only Memory)</h5>
          <ul className="list-disc ml-6">
            <li>ROM stores permanent instructions required for booting the computer.</li>
            <li>It is non-volatile, so it retains data even after power is off.</li>
            <li>It is read-only and cannot be easily modified by users.</li>
            <li>Contains BIOS (Basic Input Output System) instructions.</li>
            <li>Starts functioning automatically when the computer is powered on.</li>
            <li>Ensures system checks and initial startup processes run correctly.</li>
            <li>Installed by the computer manufacturer.</li>
            <li>No user input is needed to execute ROM instructions.</li>
          </ul>

          🔹 Secondary Memory
          <ul className="list-disc ml-6">
            <li>It stores data permanently even when the power is off.</li>
            <li>It holds a large amount of data like videos, files, and software.</li>
            <li>It is slower than primary memory.</li>
            <li>CPU does not use it directly – data is first copied to RAM.</li>
            <li>It includes hard disk, SSD, CD, DVD, pen drive, etc.</li>
            <li>It is also called external or auxiliary memory.</li>
            <li>It is cheaper compared to primary memory.</li>
            <li>It is used for backup and long-term storage.</li>
          </ul>

          🔹 Hard Disk Drive (HDD)
          <ul className="list-disc ml-6">
            <li>HDD is the most common storage device inside computers.</li>
            <li>It stores data using magnetic disks that rotate.</li>
            <li>It can store large data like 500GB, 1TB, etc.</li>
            <li>Data is read/written using a mechanical head.</li>
            <li>It is slower than SSD but cheaper.</li>
            <li>It stores operating systems, files, videos, and apps.</li>
            <li>All saved data stays even after shutdown.</li>
            <li>It is installed inside desktops and laptops.</li>
          </ul>

          🔹 Solid State Drive (SSD)
          <ul className="list-disc ml-6">
            <li>SSD is a modern storage device faster than HDD.</li>
            <li>It uses flash memory (no moving parts).</li>
            <li>It is more durable and energy-efficient.</li>
            <li>SSD helps computers boot faster and run smoothly.</li>
            <li>It is expensive but gives better performance.</li>
            <li>It is widely used in new laptops and phones.</li>
            <li>Files are loaded and saved faster on SSD.</li>
            <li>It is more resistant to physical damage.</li>
          </ul>

          🔹 CD (Compact Disc)
          <ul className="list-disc ml-6">
            <li>CD is a round plastic disc used to store data.</li>
            <li>It can store around 700 MB of data.</li>
            <li>It was used to store songs, videos, and software.</li>
            <li>CD-R can be written once; CD-RW can be written multiple times.</li>
            <li>It is read using a laser in CD drive.</li>
            <li>It is not used much nowadays.</li>
            <li>Used earlier in music players and software sharing.</li>
            <li>It needs a CD/DVD drive to be used.</li>
          </ul>

          🔹 DVD (Digital Versatile Disc)
          <ul className="list-disc ml-6">
            <li>A DVD looks like a CD but stores more data (up to 4.7 GB).</li>
            <li>It is used to store movies, games, and software.</li>
            <li>It is also read using a laser.</li>
            <li>Data on DVDs can be read-only or rewritable.</li>
            <li>It was popular for watching videos and storing educational content.</li>
            <li>Still used in some schools and homes.</li>
            <li>DVD drives are built into many old laptops.</li>
            <li>It can store videos in high quality.</li>
          </ul>

          🔹 Pen Drive (USB Flash Drive)
          <ul className="list-disc ml-6">
            <li>A pen drive is a portable storage device.</li>
            <li>It connects through the USB port.</li>
            <li>It is small and easy to carry.</li>
            <li>It is used to transfer and store files like photos, documents, etc.</li>
            <li>Comes in sizes like 4GB, 8GB, 16GB, 32GB, etc.</li>
            <li>It is faster than CD/DVD and reusable.</li>
            <li>Widely used by students and teachers.</li>
            <li>It does not require any power supply or setup.</li>
          </ul>

          🔹 Memory Card
          <ul className="list-disc ml-6">
            <li>Memory cards are small storage chips used in phones and cameras.</li>
            <li>They store photos, videos, and apps.</li>
            <li>Also called SD card or MicroSD card.</li>
            <li>Comes in various sizes: 2GB, 16GB, 64GB, 128GB, etc.</li>
            <li>It helps expand the memory of a device.</li>
            <li>Used in mobile phones, tablets, and digital cameras.</li>
            <li>Can be inserted and removed easily.</li>
            <li>Files can be moved from memory card to computer using card readers.</li>
          </ul>
          📘 Assignment Questions – Class 9 IT

          Q. Long Answer Questions – (3 marks each)
          <ol className="list-decimal ml-6">
            <li>Explain the instruction cycle of the CPU with an example.</li>
            <li>Write any five differences between RAM and ROM.</li>
            <li>What is the function of input devices? List any four examples with their use.</li>
            <li>What are output devices? Explain the function of monitor and speakers.</li>
            <li>Describe any three types of secondary storage devices and their uses.</li>
            <li>Explain how SSD is better than HDD.</li>
            <li>What are the roles of RAM and ROM in a computer system?</li>
            <li>Differentiate between primary and secondary memory with two examples of each.</li>
            <li>Explain how a projector works and where it is used.</li>
            <li>Why is CPU called the brain of the computer? Write its four main operations.</li>
          </ol>

        </section>

      </div>
      <Footer></Footer>
    </>
  );
};

export default Class_9_IT;
