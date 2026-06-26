import React from "react";
import "../css_modules/MyResume.css"; // Custom CSS for the component
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo1 from '../assets/youtubelogo.png'
import Styles from '../css_modules/Navbar.module.css'

const btnSize1 = {
    fontSize: "1.3rem",
    borderRadius: "0.3rem",
    backgroundColor: "rgb(255, 0, 0)",
    color: "rgb(255, 255, 255)",
    padding: "6px 24px",
    fontFamily: "monospace",
    fontWeight: 500,
  };
  
const MyResume = () => {
  return (
    <div className="container mt-5">
      <div
        className="card p-4 mx-auto shadow"
        style={{
          maxWidth: "800px",
          backgroundColor: "#f8f9fa",
          borderRadius: "15px",
        }}
      >
        <h1
          className="text-center mb-4"
          style={{ fontSize: "3rem", fontWeight: "bolder", color: "#343a40" }}
        >
          Resume
        </h1>
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src={logo}
              alt="Irfanullah Khan"
              className="profile-img mb-3"
              style={{ width: "150px",height: "211px", borderRadius: "4%" }}
            />
            <h2
              className="mb-3"
              style={{
                fontWeight: "bold",
                color: "#343a40",
                fontFamily: "Roboto",
              }}
            >
              IRFANULLAH KHAN
            </h2>
            <p className="text-muted mb-4 "  style={{fontFamily:"math"}}>
        Hello, my name is IRFANULLAH KHAN and I had recently passed out MCA from Integral University with 80.64% I am hardworking and dedicated Person
        I always work with honesty and Dignity I am Quick Learner easily attached with newbie Technologies.
        I Create Professional Videos on Youtube. 
            </p>

            <div className="info-item text-center">
                
                   <img className={`${Styles.logo}`} src={logo1}     alt="BoosterClasses logo"/>
                <p className=" text-bolder fw-bold">
               My Youtube Channel name is <strong className="text-danger" style={{fontSize:"1.2rem"}}>Al Rehmat Glass</strong> with <strong className="text-danger"  style={{fontSize:"1.3rem"}}>7,800
                  Subscribers </strong> Click this button to redirect on Youtube.
                </p>
                <Link to="https://www.youtube.com/@Irfan_Foundation" style={{ textDecoration: "none" }}>
                    {" "}
                    <div className="button d-flex flex-row justify-content-center align-items-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-danger btn-xl btn-block btn-block mb-4"
                        style={btnSize1}
                      >
                        Click Now
                      </button>
                    </div>{" "}
                  </Link>
              </div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <a
                  href="mailto:irfanulla2220@gmail.com"
                  style={{ textDecoration: "none", color: "#007bff" }}
                >
                  irfanulla2220@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} /> +91 000 000 000
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> xyz 514 house No
                street, xyz location, and district from, UP India
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <section className="work-experience mb-4">
              <h3
                className="section-title text-center mb-4"
                style={{ color: "#007bff" }}
              >
                Work Experience
              </h3>
              <div className="info-item mb-3">
                <h4 className="text-center  text-bolder fw-bold">
                  CloudFort and Consultancy Private Ltd <strong className="text-danger">(Lucknow)</strong>
                </h4>
                <p className="text-center text-muted " style={{fontFamily:"math"}}>
                  I have completed 3 months internship as a Software Developer,
                  learning HTML 5, CSS 3, Bootstrap 5, JavaScript, and
                  currently learning React, MongoDB, Express, and Node.js.
                </p>
               
              </div>

              <div className="info-item mb-3">
                <h4 className="text-center text-bolder fw-bold">
                  Nexus Info Private Ltd <strong className="text-danger">(Banglore)</strong>
                </h4>
                <p className="text-center text-muted" style={{fontFamily:"math"}}>
                  I have completed 2-months internship as a C# Developer, learning
                  MVC Architecture and C# for developing web applications.
                </p>
              </div>
{/* 
              <div className="info-item mb-3">
                <h4 className="text-center  text-bolder fw-bold">
                  Computer and Maths Mentor at Scholar Paradise International School<strong className="text-danger">(Lucknow)</strong>
                </h4>
                <p className="text-center text-muted " style={{fontFamily:"math"}}>
                  I was joined as a mentor because I have excited to teach computer science 
                  and mathematics is my favourite subjects and I enjoyed with this profession.
                </p>
               
              </div> */}
            </section>
            <section className="projects mb-4">
              <h3
                className="section-title text-center mb-4"
                style={{ color: "#007bff" }}
              >
                Projects
              </h3>
              <div className="info-item text-center">
            <ul className="text-bolder fw-bold mx-4 my-4 mt-2 mb-3">

<li className="items mt-2">Funny Meme Share App using <strong className="text-danger">(Java and  XML)</strong></li>
<li className="items mt-2">News APP <strong className="text-danger"> (Kotlin)</strong></li>
<li className="items mt-2">Weather App <strong className="text-danger"> (Java)</strong></li>
<li className="items mt-2">Jarvis AI assistant <strong className="text-danger"> (Python)</strong></li>
<li className="items mt-2">Teaching Web App <strong className="text-danger"> (React and Express)</strong></li>


            </ul>
              </div>
            </section>
            <section className="certifications mb-4">
              <h3
                className="section-title text-center mb-4"
                style={{ color: "#007bff" }}
              >
                Certifications
              </h3>
              <div className="info-item text-center p-4">
                <p className="text-bolder fw-bold text-danger ">Bootstrap Udemy Certification</p>
                <p className="text-bolder fw-bold">
                  Elements Of AI Google Certification
                </p>
                <p className="text-bolder fw-bold text-danger " >Core Java Udemy Certification</p>
                <p className="text-bolder fw-bold">React Udemy Certification</p>
                <p className="text-bolder fw-boldtext-danger  ">JavaScript Udemy Certification</p>
                <p className="text-bolder fw-bold">Bootstrap Udemy Certification</p>
                <p className="text-bolder fw-bold text-danger ">Core Java Udemy Certification</p>
              </div>
            </section>
            <section className="education mb-4">
              <h3
                className="section-title text-center mb-4"
                style={{ color: "#007bff" }}
              >
                Education
              </h3>
              <div className="info-item text-center">
                <p className="text-bolder fw-bold text-danger ">
                  MCA from Integral University Lucknow Accredited A+ (Batch 2022-2024) with
                  80.64%.
                </p>
                <p className="text-bolder fw-bold text-success">
                  Graduation BCA from Integral University Lucknow  Accredited A+  (Batch
                  2019-2022) with 79.40%.
                </p>
                <p className="text-bolder fw-bold ">
                  Senior School Certificate Exam (2016-2018) CBSE (Class 12th)
                  with 63.9% from Crescent Convent School.
                </p>
                <p className="text-bolder fw-bold text-danger  ">
                  Senior School Certificate Exam (2014-2016) CBSE (Class 10th)
                  with 78% from Crescent Convent School.
                </p>
              </div>
            </section>
            <section className="skills mb-4">
              <h3
                className="section-title text-center mb-4"
                style={{ color: "#007bff" }}
              >
                Skills
              </h3>
              <div className="row text-center text-bolder fw-bold ">
                <div className="col-md-3 mb-2">
                  <span className="">Java</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">MVC in C#</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">C</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">HTML</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">CSS</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">Bootstrap</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">JavaScript</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">MongoDB</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">Express.js</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">Node.js</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">SQL</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">ReactJS</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">MySQL</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">Python</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">graphic Designer</span>
                </div>
                <div className="col-md-3 mb-2">
                  <span className="">Video Editing</span>
                </div>
              </div>
            </section>
            {/* <section className="achievements mb-4">
              <h3
                className="section-title text-center mb-4"
                style={{ color: "#007bff" }}
              >
                Achievements
              </h3>
              <div className="info-item text-center">
                <p className="text-muted">
                  Youtube Channel "Irfan Software Engineer" with 7.8K
                  Subscribers
                </p>
              </div>
            </section> */}
            <section className="languages mb-4">
              <h3
                className="section-title text-center mb-4"
                style={{ color: "#007bff" }}
              >
                Languages
              </h3>
              <div className="info-item text-center text-bolder fw-bold ">
                <p className="">English - Intermediate Proficiency</p>
                <p className="">Hindi - Elementary Proficiency</p>
                <p className="">Urdu - Elementary Proficiency</p>
              </div>
            </section>
            <section className="interests">
              <h3
                className="section-title text-center mb-4"
                style={{ color: "#007bff" }}
              >
                Interests
              </h3>
              <div className="info-item text-center text-bolder fw-bold ">
                <p className="">Software development</p>
                <p className="">Playing Cricket</p>
                <p className="">Reading Books</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;