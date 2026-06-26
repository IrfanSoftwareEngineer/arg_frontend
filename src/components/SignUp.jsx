import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../assets/bird3.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css_modules/LogIn.css";
import api from "../url/baseUrl";
import axiosRetry from "axios-retry";
import { Link } from "react-router-dom";

const btnSize = {
  fontSize: "1.5rem",
  borderRadius: "0.3rem",
  backgroundColor: "rgb(254, 254, 255)",
  color: "#070000",
  padding: "6px 24px",
  fontFamily: "monospace",
  fontWeight: 500,
};

const btnSize1 = {
  fontSize: "1.5rem",
  borderRadius: "0.3rem",
  backgroundColor: "rgb(58 2 243)",
  padding: "6px 24px",
  fontFamily: "monospace",
  fontWeight: 500,
};

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const [pageChanger, setpageChanger] = useState(false);

  
  axiosRetry(api, { retries: 3 });


  useEffect(() => {
    if (pageChanger) {
      setTimeout(() => {
        navigate("/LogInPage");
      }, 5000);
    }
  }, [isSubmitted, pageChanger, showSuccessMessage, navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
   
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoadingSignUp(true);
    try {
      const response = await api.post("/SignUpPage", {
        firstName,
        lastName,
        email,
        password,
      });

      console.log("Response data:", response.data);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      setIsSubmitted(true);
      setShowSuccessMessage(true);
      const fullName = response.data.firstName +" "+ response.data.lastName;
      const message="Well Done ,";

      showAlert(message, "success", fullName);
    } catch (error) {
      console.error("Error inserting data:", error);
      showAlert("There was an error. Please try again.", "danger");
      setIsSubmitted(false);
      setpageChanger(false);
     
    } finally {
      setLoadingSignUp(false); 
    }
  };

  const showAlert = (message, type, name) => {
    // Function to show alert
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
   <div class="alert alert-${type} alert-dismissible d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
          <use xlink:href="#check-circle-fill"/>
        </svg>
        <div>${message} ${name}</div>
      </div>
  <h1>Wait for a moment Redirecting to the LogIn Page.......</h1>
    `;
    alertPlaceholder.append(wrapper);

    setTimeout(() => {
      setpageChanger(true);
    }, 5000);
  };

  return (
    <>
      <section
        className="text-center position-relative"
        style={{ marginBottom: "44px", overflow: "hidden" }}
      >
        <div
          className="bg-image"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${logo})`,
            left: "37%",
            right: "50%",
            height: "258px",
            width: "289px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translate(0%, -2%) rotate(16deg)",
          }}
        ></div>

        <div
          className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
          style={{
            marginTop: "45px",
            backdropFilter: "blur(30px)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="LoginFormCard card-body py-5 px-md-5"
            style={{ backgroundColor: "aliceblue" }}
          >
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bolder mb-5" style={{ fontSize: "3.2rem" }}>
                  SignUp
                </h2>

                <form id="SignUpForm" onSubmit={handleFormSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="firstName">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="lastName">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                  </div>
                  <div id="liveAlertPlaceholder"></div>{" "}
                  {/* Placeholder for alerts */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-dark btn-block mb-4 me-4"
                      disabled={setLoadingSignUp} // Disable button while loading
                      style={btnSize}
                    >
                      {loadingSignUp ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="checkbox"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="checkbox">
                      Subscribe to our newsletter
                    </label>
                  </div>
                  <Link to="/LogInPage" style={{ textDecoration: "none" }}>
                    {" "}
                    <div className="button d-flex flex-row justify-content-center align-items-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-danger btn-xl btn-block btn-block mb-4"
                        style={btnSize1}
                       
                      >
                        
                        LogIn
                      </button>
                    </div>{" "}
                  </Link>
                  <div className="signupwith text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
