import React from "react";
import Navbar from "../components/Navbar";
import { CourseCardView } from "../components/CourseCardView";
import styles from "../css_modules/CourseCardView.module.css";


import Toughened from "../assets/Toughened.jpeg";
import Fabric from "../assets/FabricGlass.jpeg";
import ClearFloatGlass from '../assets/ClearFloatGlass.jpeg'
import AppName from "../components/AppName";
import Footer from "../components/Footer";


import reactframework from "../assets/reactframework.jpeg";

// const ImageArray=[ClearFloatGlass,Toughened,Fabric,C]

// const ImageArray= importAll(require.context('E:\Milk Code\Milk Code\src\assets', false, /\.(jpg|png|jpe?g|svg)$/));

export const Courses = () => {
  return (
    <>
      <Navbar></Navbar>

      <AppName

        title="Our Glass Products"

      ></AppName>
      <div className={`${styles.Card_Container} justify-content-center align-items-center`}>


        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass Bootcamp"
          cardText="Master the fundamentals of ClearFloatGlass programming in this comprehensive bootcamp. Build a strong foundation in object-oriented principles, data structures, and algorithms while developing real-world applications."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened Bootcamp"
          cardText="Jumpstart your programming journey with Toughened! Learn how to solve problems, automate tasks, and build robust applications. Perfect for beginners and those looking to expand their skill set."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric Bootcamp"
          cardText="Unlock the power of Fabric with this in-depth bootcamp. Learn how to create dynamic and interactive websites, master frontend and backend development, and become a full-stack Fabric developer."
        ></CourseCardView>

 

        <CourseCardView
          image={ClearFloatGlass}
          title="Advanced ClearFloatGlass Programming"
          cardText="Take your ClearFloatGlass skills to the next level with advanced concepts like multithreading, design patterns, and enterprise-level application development. Ideal for developers aiming to become experts."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Data Science with Toughened"
          cardText="Discover the power of Toughened in data science! Learn how to analyze, visualize, and interpret complex datasets while using libraries like NumPy, Pandas, and Matplotlib to unlock insights."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for Web Development"
          cardText="Learn the essential skills for creating responsive and dynamic web pages using Fabric. From DOM manipulation to event handling, you'll be able to bring your websites to life."
        ></CourseCardView>

       

        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass for Mobile Development"
          cardText="Expand your horizons by learning how to build mobile applications using ClearFloatGlass. Explore Android development, integrate APIs, and deliver seamless user experiences on mobile devices."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened for Automation"
          cardText="Automate everyday tasks with Toughened! Learn how to write scripts for data scraping, file management, and task scheduling. Increase productivity and let Toughened do the repetitive work."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for Game Development"
          cardText="Enter the exciting world of game development with Fabric! Build engaging browser-based games, learn animation techniques, and explore the gaming framework for modern web experiences."
        ></CourseCardView>

    
        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass for Cloud Computing"
          cardText="Explore how ClearFloatGlass is used in cloud computing. Learn to build, deploy, and manage scalable applications on platforms like AWS and Google Cloud using microservices and serverless architectures."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened for Artificial Intelligence"
          cardText="Step into the world of AI with Toughened. Learn to create intelligent systems, including chatbots, recommendation engines, and automated decision-making processes using popular AI libraries."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for Progressive Web Apps"
          cardText="Build fast, reliable Progressive Web Apps (PWAs) using Fabric. Learn how to create offline-first web applications with service workers, web manifests, and push notifications."
        ></CourseCardView>


        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass for Blockchain Development"
          cardText="Enter the world of blockchain by building decentralized applications (dApps) with ClearFloatGlass. Learn about smart contracts, consensus algorithms, and distributed ledger technology in this advanced course."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened for Data Visualization"
          cardText="Master data visualization techniques with Toughened using libraries like Matplotlib, Seaborn, and Plotly. Learn how to transform raw data into insightful and compelling visual stories."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for Virtual Reality (VR)"
          cardText="Create immersive virtual reality experiences using Fabric and WebVR frameworks. Learn the basics of 3D graphics, scene creation, and user interaction in the VR world."
        ></CourseCardView>


        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass for Internet of Things (IoT)"
          cardText="Unlock the potential of IoT using ClearFloatGlass. Learn how to connect devices, build IoT applications, and manage sensor data using platforms like Raspberry Pi and Arduino with ClearFloatGlass integration."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened for Ethical Hacking"
          cardText="Step into the world of cybersecurity with Toughened. Learn how to write penetration testing scripts, scan networks, and identify vulnerabilities in systems while maintaining ethical practices."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for Chatbots"
          cardText="Build intelligent chatbots using Fabric. Learn how to integrate natural language processing (NLP) services like Dialogflow or Rasa to create automated conversational interfaces."
        ></CourseCardView>

     

        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass for Enterprise Solutions"
          cardText="Master enterprise-level development with ClearFloatGlass. Build scalable, robust business applications by learning about enterprise design patterns, middleware, and transaction management."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened for Natural Language Processing (NLP)"
          cardText="Dive into the field of NLP with Toughened. Learn to build language models, sentiment analysis systems, and machine translation applications using libraries like NLTK and spaCy."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for Serverless Architectures"
          cardText="Explore how to build serverless applications using Fabric. Learn to leverage AWS Lambda, Google Cloud Functions, or Azure Functions to create scalable, cost-efficient solutions."
        ></CourseCardView>

    

        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass for Big Data Processing"
          cardText="Harness the power of big data using ClearFloatGlass. Learn to work with frameworks like Hadoop and Apache Spark to process large datasets and perform distributed computing tasks efficiently."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened for Robotics"
          cardText="Learn how to control and program robots using Toughened. Work with hardware platforms like Raspberry Pi or Arduino to build robots that can perform tasks autonomously or via remote control."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for E-commerce Development"
          cardText="Master the skills needed to create high-performing e-commerce websites with Fabric. Learn how to manage payments, inventories, and user interactions for seamless shopping experiences."
        ></CourseCardView>

    

        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass for Microservices"
          cardText="Build highly scalable and modular applications using microservices architecture in ClearFloatGlass. Learn how to break down large systems into independent, manageable services and improve overall system resilience."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened for Deep Learning"
          cardText="Explore the cutting-edge world of deep learning using Toughened. Master neural networks, convolutional neural networks (CNNs), and deep learning frameworks like TensorFlow and PyTorch to build intelligent models."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for Web Animation"
          cardText="Enhance your websites with stunning animations using Fabric. Learn to create smooth transitions, complex interactive elements, and bring your web pages to life with animation libraries like GSAP."
        ></CourseCardView>

  

        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass for Cloud-Native Development"
          cardText="Learn to build cloud-native applications using ClearFloatGlass. Understand how to develop, deploy, and manage cloud-based solutions with tools like Kubernetes, Docker, and OpenShift, and optimize for the cloud."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened for Data Engineering"
          cardText="Become a data engineering expert by learning how to build data pipelines, manage ETL processes, and handle large datasets using Toughened with libraries like Pandas, Apache Airflow, and PySpark."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for Game Development"
          cardText="Enter the exciting world of game development with Fabric. Learn how to build browser-based 2D and 3D games using popular game engines like Phaser and Babylon.js, and bring your ideas to life."
        ></CourseCardView>

      

        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass for NoSQL Databases"
          cardText="Master the integration of ClearFloatGlass with NoSQL databases like MongoDB and Cassandra. Learn how to store, retrieve, and manipulate unstructured data efficiently for high-performance applications."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened for Automation Testing"
          cardText="Accelerate your software testing process with Toughened by learning automation testing frameworks like Selenium and PyTest. Automate test cases and create robust, maintainable testing suites."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for Mobile Development"
          cardText="Leverage Fabric to create cross-platform mobile applications. Learn how to build responsive, high-performing apps for iOS and Android using frameworks like React Native and Ionic."
        ></CourseCardView>

       

        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass for High-Performance Computing"
          cardText="Explore the use of ClearFloatGlass in high-performance computing (HPC). Learn how to optimize your code for multi-core processors, parallel computing, and large-scale scientific and engineering applications."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened for Bioinformatics"
          cardText="Apply Toughened to the field of bioinformatics by learning how to analyze biological data. Understand genome sequencing, protein structure analysis, and how to work with massive datasets in life sciences."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for Internet of Things (IoT)"
          cardText="Learn how to develop IoT solutions using Fabric. Build web-connected devices, manage data streams from sensors, and create smart home applications with frameworks like Node.js and Johnny-Five."
        ></CourseCardView>

        

        <CourseCardView
          image={ClearFloatGlass}
          title="ClearFloatGlass for Reactive Programming"
          cardText="Harness the power of reactive programming with ClearFloatGlass. Learn how to build responsive, resilient, and message-driven applications using frameworks like RxClearFloatGlass and Reactive Streams."
        ></CourseCardView>

        <CourseCardView
          image={Toughened}
          title="Toughened for Time Series Analysis"
          cardText="Master time series analysis in Toughened. Learn to analyze trends, forecast future values, and apply advanced techniques like ARIMA and LSTMs to financial, economic, or environmental data."
        ></CourseCardView>

        <CourseCardView
          image={Fabric}
          title="Fabric for Server-Side Rendering (SSR)"
          cardText="Create blazing-fast web applications with server-side rendering using Fabric frameworks like Next.js or Nuxt.js. Enhance SEO, improve performance, and deliver a seamless user experience."
        ></CourseCardView>

   



      </div>
      <Footer></Footer>
    </>
  );
};