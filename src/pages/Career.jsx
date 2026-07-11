import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlertModal from "../components/AlertModal";
import api from "../url/baseUrl";
import img from "../assets/AyanSir.png";
import img1 from "../assets/m4.jpg";
import Styles from "../css_modules/career.module.css";

export const Career = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");
  const [entries, setEntries] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertName, setAlertName] = useState("");
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await api.get("/Career");
        setEntries(response.data);
        // console.log(response.data)
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchEntries();
  }, [isSubmitted]); // Only re-fetch entries when isSubmitted changes

  // useEffect(() => {
  //   const button = document.getElementById("submitButton");
  //   const spinner = button.querySelector(".spinner-border");

  //   const clickHandler = () => {
  //     if (isLoading) {
  //       spinner.style.display = "inline-block";
  //     } else {
  //       spinner.style.display = "none";
  //     }
  //   };

  //   button.addEventListener("click", clickHandler);

  //   return () => {
  //     button.removeEventListener("click", clickHandler);
  //   };
  // }, [isLoading]); // Update spinner visibility when isLoading changes

  const handleSubmit = async (e) => {
    // console.log(name);
    e.preventDefault();
    setIsLoading(true);
    try {
      //here we are sending the data to the backend using axios post method,
      // and then we are storing the response data in the state variable entries
      // and then we are showing the alert modal with the success message
      // and then we are resetting the form fields to empty strings
      // and then we are setting isSubmitted to true to re-fetch the entries from the backend    
      const response = await api.post("/Career", {
        name,
        mobile,
        email,
        location,
        course,
      });
      // console.log(name);
      // here we are creating a new entry object with the response data and adding it
      //  to the entries state variable
      const newEntry = {
        id: response.data._id,
        email: response.data.email,
        name: response.data.name,
        mobile: response.data.mobile,
        location: response.data.location,
        course: response.data.course,
      };

      setEntries((oldData) => [...oldData, newEntry]);


      //     const successMessage = `
      // You have successfully applied for the selected job position
      // <span class="highlight">${response.data.course}</span>
      // at Al Rehmat Glass Pvt. Ltd.<br>
      // Thank you for your interest in joining our team.<br>
      // Our recruitment team will review your application and contact you shortly.
      // `;







      setAlertMessage(
      <>
        You have successfully applied for the selected job position{" "}
        <span className="bg-warning text-dark fw-bold px-2 rounded">
          {response.data.course}
        </span>{" "}
        at Al Rehmat Glass Pvt. Ltd.
        <br />
        Thank you for your interest in joining our team.
        <br />
        Our recruitment team will review your application and contact you shortly.
      </>
      );
      
      setAlertName(response.data.name);
      setShowAlertModal(true);

      setName("");
      setEmail("");
      setLocation("");
      setCourse("");
      setMobile("");

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error inserting data:", error);
      setAlertMessage("There was an error. Please try again.");
      setShowAlertModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{
        backgroundImage: `url(${img1})`, // Replace with your image path
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundPosition: "center", // Centers the image
      }}
        className="d-flex justify-content-center align-items-center flex-column"
      >

        <img src={img} style={{ height: "187px", width: "159px", borderRadius: "77px", marginTop: "19px" }} alt="" />
        <header>

          <h1 className={` ${Styles.companyTitle} py-3 mb-0`}>
            Al Rehmat Glass Pvt Ltd
          </h1>

        </header>
        <div className="container mt-0">
          <h1 className="text-center text-white text-bold mb-2">Apply for Open Roles</h1>
          <form id="CareerForm" onSubmit={(e) => handleSubmit(e)} className="p-24">
            <div className="form-group flex-nowrap form-control-sm">
              <label className="m-1" htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                placeholder="Enter your full name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group flex-nowrap form-control-sm">
              <label className="m-1" htmlFor="mobileNo">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                placeholder="Enter your Mobile Number"

                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form-group flex-nowrap form-control-sm">
              <label className="m-1" htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Email (optional)"

                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group flex-nowrap form-control-sm">
              <label className="m-1" htmlFor="resume">Enter your current Location</label>
              <input
                type="text"
                className="form-control"
                id="resume"
                placeholder="Enter your current Address"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group flex-nowrap form-control-sm">
              <label className="m-1" htmlFor="jobcourse">Which Position Are You Applying For?</label>
              <select
                className="form-control"
                id="jobcourse"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option value="">Select a Position</option>


                <optgroup label="Administration">
                  <option value="HR Executive">HR Executive</option>
                  <option value="Accounts Executive">Accounts Executive</option>
                  <option value="Office Administrator">Office Administrator</option>
                </optgroup>
                <optgroup label="Sales & Marketing">
                  <option value="Sales Executive">Sales Executive</option>
                  <option value="Marketing Executive">Marketing Executive</option>
                  <option value="Business Development Executive">Business Development Executive</option>
                  <option value="Customer Support Executive">Customer Support Executive</option>
                </optgroup>

                <optgroup label="Production">
                  <option value="Production Operator">Production Operator</option>
                  <option value="Machine Operator">Machine Operator</option>
                  <option value="Glass Cutting Operator">Glass Cutting Operator</option>
                  <option value="Tempering Furnace Operator">Tempering Furnace Operator</option>
                  <option value="Laminated Glass Operator">Laminated Glass Operator</option>

                </optgroup>

                <optgroup label="Quality">
                  <option value="Quality Control Inspector">Quality Control Inspector</option>
                  <option value="Quality Assurance Executive">Quality Assurance Executive</option>
                </optgroup>
                <optgroup label="IT Department">
                  <option value="IT Support Executive">IT Support Executive</option>
                  <option value="Software Developer">Software Developer</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Network Administrator">Network Administrator</option>
                  <option value="System Administrator">System Administrator</option>
                  <option value="Database Administrator">Database Administrator</option>
                  <option value="Data Entry Operator">Data Entry Operator</option>
                </optgroup>
                <optgroup label="Engineering & Maintenance">
                  <option value="Production Engineer">Production Engineer</option>
                  <option value="Glass Process Engineer">Glass Process Engineer</option>
                  <option value="PLC & Automation Engineer">PLC & Automation Engineer</option>
                  <option value="Machine Maintenance Technician">Machine Maintenance Technician</option>
                  <option value="Utility Engineer">Utility Engineer</option>
                  <option value="Plant Engineer">Plant Engineer</option>

                </optgroup>



                <optgroup label="Operations">
                  <option value="Purchase Executive">Purchase Executive</option>
                  <option value="Store Executive">Store Executive</option>
                  <option value="Warehouse Supervisor">Warehouse Supervisor</option>
                  <option value="Dispatch Coordinator">Dispatch Coordinator</option>
                  <option value="other">Other</option>
                </optgroup>







              </select>
            </div>
            <div className="d-flex align-items-center justify-content-center m-3">
              <button
                id="submitButton"
                type="submit"
                className="btn btn-danger text-center p-3 mb-4"
              >
                <span
                  className="spinner-border spinner-border-sm"
                  course="status"
                  aria-hidden="true"
                  style={{ display: isLoading ? "inline-block" : "none" }}
                ></span>
                <span className="visually-hidden">Loading...</span>
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />

      <AlertModal
        show={showAlertModal}
        onHide={() => setShowAlertModal(false)}
        message={alertMessage}
        name={alertName}


      ></AlertModal>
    </>
  );
};