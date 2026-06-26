import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../css_modules/Footer.module.css";

// assigning all links to the variables and use it in future

const LinkedIn = "https://www.linkedin.com/in/irfanullah-khan-46057a206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const Youtube = "https://www.youtube.com/@Irfan_Foundation";
const Github = "https://github.com/IrfanSoftwareEngineer";
const facebook = "https://www.facebook.com/CamelAcademyOnYouTube?mibextid=9idTr45qYp7jtedz";
const Instagram =
  "https://www.instagram.com/IrfanSpeak_?igsh=aXFrcDZidHV3eW9h";

const Footer = () => {
  return (


    //new footer just for testing
    <>
      <div id="footer">
        <div
          class="footer-main d-flex flex-direction-column mb--20px"
          style={{ background: "rgb(233 231 229)", padding: "0px 0 20px", marginBottom: "-20px" }}
        >
          <div class="container-fluid">
            <div class="row" style={{ backgroundColor: "aliceblue" }}>
              <div class="col-md-3 mt-20 pl-18">


                <div class="footer-desc">
                  <div class="logo-footer">
                    <a href="https://www.youtube.com/@IrfanSoftwareEngineer">
                      <img className={styles.logoFooter}
                        src={logo}
                        width="183"
                        height="67"
                        alt="Eguru"
                      />
                    </a>
                  </div>
                  <p>
                    My name is IrfanUllah Khan I am software Engineer builing responsive UI for better
                    Customer Interaction and ease accessibility feel free to connect us for developing
                    better softwares.
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
                      <a className="text-decoration-none" href="https://www.youtube.com/@IrfanSoftware">
                        YouTube
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="https://instagram.com/">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="https://www.youtube.com/@IrfanSoftware">Disclaimer</a>
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
                      className="m-9"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        size="2x"
                        style={{ color: "blue", margin: "9px" }}

                      />
                    </Link>

                    <Link to={Instagram}
                      target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"

                        style={{ color: "#e4405f", margin: "9px" }}
                        className=" me-4"
                      />
                    </Link>

                    <Link href="#!">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        style={{ color: "#1DA1F2", margin: "9px" }}
                        className="me-4"
                      />
                    </Link>

                    <Link to={LinkedIn}
                      target="_blank" rel="noopener noreferrer"
                    >

                      <FontAwesomeIcon

                        icon={faLinkedinIn}
                        size="2x"
                        style={{ color: " #0762C8", margin: "9px" }}
                        className="me-4"
                      />

                    </Link>
                    <Link to={Github}
                      target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        style={{ color: "black", margin: "9px" }}
                        className="me-4"
                      />
                    </Link>
                    <Link to={Youtube}
                      target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        size="2x"
                        style={{ color: "Red", margin: "9px" }}
                      />
                    </Link>


                  </ul>
                </div>
              </div>
              <div class="container-fluid col-md-3 d-flex justify-content-center align-item-center">
                <div class="footer-Support">
                  <h4 className="text-center text-large">Contact Info</h4>
                  <p>Right Street from Random Road, Default Road, UP(India)</p>
                  <p>
                    <i className="fa fa-phone-square" style={{ fontSize: "24px", marginRight: "5px" }}></i>
                    <span>Phone No: </span>
                    <a href="tel:+916393532872" style={{ textDecoration: "none", color: "blue" }}>
                      (+91) 123456789
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
                      irfanullah2220@gmail.com
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
              Copyright © 2024 - Developed by Irfan Sir. All Rights Reserved.

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
























