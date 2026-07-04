import React from "react";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/irfanullahkhan.png";
import styles from "../css_modules/Footer.module.css";


// assigning all links to the variables and use it in future

const LinkedIn = "https://www.linkedin.com/in/irfanullah-khan-46057a206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const Youtube = "https://www.youtube.com/@Irfan_Foundation";
const Github = "https://github.com/IrfanSoftwareEngineer";
const facebook = "https://www.facebook.com/CamelAcademyOnYouTube?mibextid=9idTr45qYp7jtedz";
const Instagram =
  "https://www.instagram.com/irfan_foundation_?igsh=aXFrcDZidHV3eW9h";
const Twitter = "https://twitter.com/yourusername";
const Footer = () => {
  const [hovered, setHovered] = useState("");
  const [hovered1, setHovered1] = useState("");
  return (


    //new footer just for testing
    <>
      <div id="footer">
        <div
          class="footer-main d-flex flex-direction-column mb--20px"
          style={{ background: "rgb(233 231 229)", padding: "0px 0 20px", marginBottom: "-20px" }}
        >
          <div className="container-fluid">
            <div className="row" style={{ backgroundColor: "aliceblue" }}>
              <div className="col-md-3 mt-20 ">

                <div className="footer-desc">
                  <div className="logo-footer d-flex justify-content-center align-items-center">
                    <a
                      href="https://www.youtube.com/@IrfanSoftwareEngineer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={styles.logoFooter}
                        src={logo}
                        alt="Eguru"
                        width="183"
                        height="67"
                      />
                    </a>
                  </div>


                  <p>
                    My name is IrfanUllah Khan I am software Developer builing responsive UI for better
                    Customer Interaction and ease accessibility feel free to connect us for developing
                    better softwares.
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        gap: "20px",
                        marginTop: "20px",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* Facebook */}
                      <Link
                        to={facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHovered("facebook")}
                        onMouseLeave={() => setHovered("")}
                      >
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          size="2x"
                          style={{
                            color: "#1877F2",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            transform: hovered === "facebook" ? "scale(1.2) translateY(-5px)" : "scale(1)",
                            filter:
                              hovered === "facebook"
                                ? "drop-shadow(0 0 10px rgba(24,119,242,0.7))"
                                : "none",
                          }}
                        />
                      </Link>

                      {/* Instagram */}
                      <Link
                        to={Instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHovered("instagram")}
                        onMouseLeave={() => setHovered("")}
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="2x"
                          style={{
                            color: "#E4405F",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            transform: hovered === "instagram" ? "scale(1.2) translateY(-5px)" : "scale(1)",
                            filter:
                              hovered === "instagram"
                                ? "drop-shadow(0 0 10px rgba(228,64,95,0.7))"
                                : "none",
                          }}
                        />
                      </Link>

                      {/* Twitter */}


                      {/* LinkedIn */}
                      <Link
                        to={LinkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHovered("linkedin")}
                        onMouseLeave={() => setHovered("")}
                      >
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          size="2x"
                          style={{
                            color: "#0A66C2",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            transform: hovered === "linkedin" ? "scale(1.2) translateY(-5px)" : "scale(1)",
                            filter:
                              hovered === "linkedin"
                                ? "drop-shadow(0 0 10px rgba(10,102,194,0.7))"
                                : "none",
                          }}
                        />
                      </Link>

                      {/* GitHub */}
                      <Link
                        to={Github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHovered("github")}
                        onMouseLeave={() => setHovered("")}
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="2x"
                          style={{
                            color: "#000",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            transform: hovered === "github" ? "scale(1.2) translateY(-5px)" : "scale(1)",
                            filter:
                              hovered === "github"
                                ? "drop-shadow(0 0 10px rgba(0,0,0,0.6))"
                                : "none",
                          }}
                        />
                      </Link>

                      {/* YouTube */}
                      <Link
                        to={Youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHovered("youtube")}
                        onMouseLeave={() => setHovered("")}
                      >
                        <FontAwesomeIcon
                          icon={faYoutube}
                          size="2x"
                          style={{
                            color: "#FF0000",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            transform: hovered === "youtube" ? "scale(1.2) translateY(-5px)" : "scale(1)",
                            filter:
                              hovered === "youtube"
                                ? "drop-shadow(0 0 10px rgba(255,0,0,0.7))"
                                : "none",
                          }}
                        />
                      </Link>
                    </div>
                  </p>

                </div>
              </div>
              <div class="col-md-3">
                <div class={`${styles.FooterNav}`}>
                  <h4>Quick Links</h4>
                  <ul className={`list-unstyled QuickListItems ${styles.listItem} `} >
                    <li>
                      <a className="text-decoration-none text-style-type-none" href="https://github.com/1234irfanullah">About Us</a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="https://github.com/1234irfanullah">Gallery</a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="https://github.com/1234irfanullah">Projects</a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="https://www.youtube.com/@Irfan_Foundation">
                        YouTube
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="https://instagram.com/">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="https://www.youtube.com/@Irfan_Foundation">Disclaimer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="social-media">
                  <h4 className="text-center ">Follow Us</h4>
                  <ul className={styles.SocialMediaItem}>
                    <Link
                      to={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHovered1("facebook")}
                      onMouseLeave={() => setHovered1("")}
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        size="2x"
                        style={{
                          color: "#1877F2",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          transform: hovered1 === "facebook" ? "scale(1.2) translateY(-5px)" : "scale(1)",
                          filter:
                            hovered1 === "facebook"
                              ? "drop-shadow(0 0 10px rgba(24,119,242,0.7))"
                              : "none",
                        }}
                      />
                    </Link>



                    <Link
                      to={Instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHovered1("instagram")}
                      onMouseLeave={() => setHovered1("")}
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        style={{
                          color: "#E4405F",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          transform: hovered1 === "instagram" ? "scale(1.2) translateY(-5px)" : "scale(1)",
                          filter:
                            hovered1 === "instagram"
                              ? "drop-shadow(0 0 10px rgba(228,64,95,0.7))"
                              : "none",
                        }}
                      />
                    </Link>

                    {/* Twitter */}
                    <Link
                      to={Youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHovered1("youtube")}
                      onMouseLeave={() => setHovered1("")}
                    >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        size="2x"
                        style={{
                          color: "#FF0000",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          transform: hovered1 === "youtube" ? "scale(1.2) translateY(-5px)" : "scale(1)",
                          filter:
                            hovered1 === "youtube"
                              ? "drop-shadow(0 0 10px rgba(29,161,242,0.7))"
                              : "none",
                        }}
                      />
                    </Link>

                    {/* LinkedIn */}
                    <Link
                      to={LinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHovered1("linkedin")}
                      onMouseLeave={() => setHovered1("")}
                    >
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        size="2x"
                        style={{
                          color: "#0A66C2",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          transform: hovered1 === "linkedin" ? "scale(1.2) translateY(-5px)" : "scale(1)",
                          filter:
                            hovered1 === "linkedin"
                              ? "drop-shadow(0 0 10px rgba(10,102,194,0.7))"
                              : "none",
                        }}
                      />
                    </Link>

                    {/* GitHub */}
                    <Link
                      to={Twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHovered("twitter")}
                      onMouseLeave={() => setHovered("")}
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        style={{
                          color: "#1DA1F2",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          transform: hovered === "twitter" ? "scale(1.2) translateY(-5px)" : "scale(1)",
                          filter:
                            hovered === "twitter"
                              ? "drop-shadow(0 0 10px rgba(29,161,242,0.7))"
                              : "none",
                        }}
                      />
                    </Link>


                  </ul>
                </div>
              </div>
              <div class="container-fluid col-md-3 d-flex justify-content-center align-item-center">
                <div class="footer-Support">
                  <h4 className="text-center text-large">Contact Info</h4>
                  <p>21,RIICO Industrial Area Bhiwadi Extension, Kaharani Industrail Area, Rajasthan, India</p>
                  <p>
                    <i className="fa fa-phone-square" style={{ fontSize: "24px", marginRight: "5px" }}></i>
                    <span>Phone_No_1: </span>
                    <a href="tel:+916393532872" style={{ textDecoration: "none", color: "blue" }}>
                      (+91) 9983306655
                    </a>
                  </p>
                  <p>
                    <i className="fa fa-phone-square" style={{ fontSize: "24px", marginRight: "5px" }}></i>
                    <span>Phone_No_2: </span>
                    <a href="tel:+916393532872" style={{ textDecoration: "none", color: "blue" }}>
                      (+91) 9983306685
                    </a>
                  </p>
                  <p>
                    <i className="fa fa-envelope" style={{ fontSize: "24px", marginRight: "5px" }}></i>
                    <span>E-mail: </span>
                    <a
                      className="text-center mail-link"
                      href="mailto:irfanullah2220@gmail.com"
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      Info@arglass.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-foot " style={{ background: "#b9cacf" }}>
          <div class="container">
            <p class="text-center p-3 mb-0 ">
              Copyright © 2026 - Developed by Irfan Foundation. All Rights Reserved.

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
























