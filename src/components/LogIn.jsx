import React, { useState, useEffect } from "react";
import logo from "../assets/bird.png";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure Font Awesome CSS is imported
import "../css_modules/LogIn.css";
import api from "../url/baseUrl";
import axiosRetry from "axios-retry";
import { useNavigate, Link } from "react-router-dom";


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
  backgroundColor: "rgb(255, 0, 0)",
  color: "rgb(255, 255, 255)",
  padding: "6px 24px",
  fontFamily: "monospace",
  fontWeight: 500,
};

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
 
 
  axiosRetry(api, { retries: 3 });

  const fetchEntries = async () => {
    try {
      const response = await api.get("/SignUpPage");
      const data = response.data;
      console.log("Fetched data:", data);
      LogInUserFunction(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  const LogInUserFunction = (data) => {
    const matchedEntry = data.find(
      (entry) => entry.email === email && entry.password === password
    );

    if (matchedEntry) {
      console.log("Matching entry found:", matchedEntry);
      const { firstName, lastName } = matchedEntry;
      const fullname = firstName + " " + lastName;
      console.log(firstName, lastName);

      const successMessage = `Welcome, ${fullname}. <hr> You have successfully logged in. Wait for a moment. Redirecting to the Courses Page...`;
      setMessage(successMessage);
      showAlert(successMessage, "success");
      setShowSuccessMessage(true);

      setIsSubmitted(false);

      setTimeout(() => {
        navigate("/Home");
      }, 5000);
    } else {
      console.log("No matching entry found");
      setShowSuccessMessage(false);
      const errorMessage = "Please enter valid credentials. Password does not match";
      setMessage(errorMessage);
      showAlert(errorMessage, "danger");
    }
  };

  // useEffect(() => {
  //   if (isSubmitted) {
  //     fetchEntries();
  //   }
  // }, [isSubmitted]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill all the fields.");
      return;
    }

    // console.log({ email, password });

    setLoadingSignUp(true); // Show spinner
    try {
      const response = await api.post("/LogInPage", {
        email,
        password,
      });
console.log(response.data)
      if (response.status === 200) {
        setEmail("");
        setPassword("");
        setIsSubmitted(true);
        const successMessage = `Welcome, ${response.data[0].firstName}. <hr> You have successfully logged in. Wait for a moment. Redirecting to the Courses Page...`;

        setMessage(successMessage);
        showAlert(successMessage, "success");
        setShowSuccessMessage(true);

        setTimeout(() => {
          navigate("/Home");
        }, 5000);

      } else {
        const errorMessage = "Please enter valid credentials. Password does not match";
        setMessage(errorMessage);
        showAlert(errorMessage, "danger");
      }
    } catch (error) {
      console.error("Error inserting data:", error);
      showAlert("There was an error. Please try again.", "danger");
    } finally {
      setLoadingSignUp(false); // Hide spinner
    }
  };

  const showAlert = (message, type) => {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    alertPlaceholder.innerHTML = ""; // Clear any previous alerts

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div class="alert alert-${type} alert-dismissible d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
          <use xlink:href="#check-circle-fill"/>
        </svg>
        <div>${message}</div>
      </div>
    `;

    alertPlaceholder.append(wrapper);
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
            zIndex: 3,
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
                 LogIn to Al Rehmat Glass
                </h2>

                <form id="SignUpForm" onSubmit={handleFormSubmit}>
                  <div className="row"></div>
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
                  <Link to="/SignUpPage" style={{ textDecoration: "none" }}>
                    {" "}
                    <div className="button d-flex flex-row justify-content-center align-items-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-danger btn-xl btn-block btn-block mb-4"
                        style={btnSize1}
                      >
                        SignUp
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

export default LogIn;
