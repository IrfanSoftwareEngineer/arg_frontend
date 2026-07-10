import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlertModal from "../components/AlertModal";
import api from "../url/baseUrl";
import img from "../assets/AyanSir.png";
import img1 from "../assets/m4.jpg";

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
        mobile:response.data.mobile,
        location: response.data.location,
        course: response.data.course,
      };

      setEntries((oldData) => [...oldData, newEntry]);

      const successMessage = `You have successfully Registered for ${response.data.course} Course. Our team will contact you shortly via your registered Mobile Number.`;
      setAlertMessage(successMessage);
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
      <div  style={{
    backgroundImage: `url(${img1})`, // Replace with your image path
    backgroundSize: "cover", // Ensures the image covers the entire div
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    backgroundPosition: "center", // Centers the image
  }}
  className="d-flex justify-content-center align-items-center flex-column"
>

      <img src={img} style={{ height: "187px", width:"159px", borderRadius: "77px", marginTop:"19px"}} alt="" />
        <header>

          <h1 className="py-4 mb-0">Al Rehmat Glass</h1>

        </header>
        <div className="container mt-0">
          <h1 className="text-center mb-2">Online Registration Form</h1>
          <form id="CareerForm" onSubmit={(e)=> handleSubmit(e)} className="p-24">
            <div className="form-group flex-nowrap form-control-sm">
              <label htmlFor="name">Full Name</label>
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
              <label htmlFor="mobileNo">Mobile Number</label>
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
              <label htmlFor="email">Email address</label>
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
              <label htmlFor="resume">Enter your current Location</label>
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
              <label htmlFor="jobcourse">Choose Glasses for </label>
              <select
                className="form-control"
                id="jobcourse"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option value="">Select Glasses here</option>
                <option value="Lamination Glass 6mm">Lamination Glass 6mm</option>
                <option value="Class 6 Maths Only">Lamination Glass 8mm</option>
                <option value="Class 6 Maths + Computer">Lamination Glass 8mm</option>
                <option value="Class 6 Maths + Computer">Lamination Glass 8mm</option>
                <option value="Class 6 Maths + Computer">Lamination Glass 8mm</option>
                <option value="Class 6 Maths + Computer">Lamination Glass 8mm</option>
                <option value="Class 6 Maths + Computer">Lamination Glass 8mm</option>
                <option value="Class 6 Maths + Computer">Lamination Glass 8mm</option>


              
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