import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../url/baseUrl";
import axiosRetry from "axios-retry";

const Support = () => {
  // Configure axios to use retry logic
  axiosRetry(api, { retries: 3 });

  const [name, setName] = useState("irfan");// just for testing purpose i set default value of name to irfan but in real time it should be empty string like this useState("") and also for email and message state variable.
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {

    let spinTimer;
    const fetchEntries = async () => {
      try {
        const response = await api.get("/Support");
      //  console.log(response.data);
        setEntries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEntries();


    const button = document.getElementById('submitButton');
    const spinner = button.querySelector('.spinner-border');


    const clickHandler = () => {
      spinner.style.display = 'inline-block';
      spinTimer = setTimeout(() => {
        // Perform some operation after 2000ms
        console.log("Spinner timeout complete");
        spinner.style.display = 'none'; // Example of hiding the spinner after 2 seconds
      }, 1000);
    };

    
    button.addEventListener('click', clickHandler);

    return () => {
      clearTimeout(spinTimer);
      // button.removeEventListener('click', () => {
      //   spinner.style.display = 'none';
      // });
    };

  }, []);


  // Handle form submission side effects
  useEffect(() => {
    if (isSubmitted) {
      setShowSuccessMessage(true);
     
      
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
        setIsSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/Support", { name, email, message });

      /*here only current data are coming in the form of object which is just posted data name,email,
       message in the form of respone and that data will going to add in the array by using creation of 
       
       newEntry Object block that store the current data coming from the server .*/
      // console.log(response.data);
      // setEntries(response.data);

      const newEntry = {
        id: response.data._id,
        name: response.data.name,
        email: response.data.email,
        message: response.data.message,
      };

      setEntries((prevEntries) => prevEntries.concat(newEntry));
      // console.log(entries);
      setName("");
      setEmail("");
      setMessage("");

      setIsSubmitted(true);
      // Show alert message
      showAlert("Your Query has been Submitted Successfully!", "success", response.data.name);
    } catch (error) {
      console.log("Error inserting data:", error);
      showAlert("There was an error. Please try again.", "danger");
    }
  };

  const showAlert = (message, type, name) => {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    alertPlaceholder.innerHTML = ""; // Clear any previous alerts

    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div><h1>"Thanks ${name} "</h1>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex align-items-center justify-content-center color1 p-2 min-vh-100"
        style={{ backgroundColor: "aliceblue" }}
      >
        <main className="container">
          <section>
            <h2 className="text-center">Drop Your Message</h2>
            <p className="text-center">
              Please Enter Your Query, Doubt, And Valuable Feedback. Our Team
              Will Consider And Respond Back to You with Your Registered Email
              Account.
            </p>
         

          <div id="liveAlertPlaceholder"></div>

            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter Your Name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message:
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder=""
                  autoComplete="off"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-danger"
                  id="submitButton"
                >
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{display:"none"}}></span>
                  <span class="visually-hidden">Loading...</span>

                  Submit Now
                </button>
              </div>
            </form>
               {showSuccessMessage && (
              <div
                style={{ fontFamily: "monospace", fontSize: "3rem" }}
                className="text-center"
                id="formSubmission"
              >
                Form Submitted Successfully
                
              </div>
              
            )}
          </section>

          {/* <section>
            <h2 className="text-center mb-5">Our Students Feedback</h2>
            <ul className="list-unstyled">
              {entries.map((item, index) => (
                <li key={index} className="mb-3">
                  <div
                    className="card"
                    style={{ 

                      backgroundColor: "#dedced",
                      color: "black"

                     }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.message}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section> */}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Support;
