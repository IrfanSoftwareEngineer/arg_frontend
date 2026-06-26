import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyResume from "../components/MyResume";
import OurServices2 from "../components/OurServices2";
import img from "../assets/logo.png";

export const About = () => {
  return (
    <>
      <Navbar />

      {/* Heading */}
      <h1
        className="text-center mb-4"
        style={{
          fontSize: "3rem",
          fontWeight: "bolder",
          color: "#343a40",
        }}
      >
        Irfan's Portfolio
      </h1>

      <MyResume />
      <hr />

      {/* About Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">

              <h2 className="mb-4 display-5">
                Welcome to Al Rehmat Glass
              </h2>

              {/* Founder Image */}
              <img
                src={img}
                alt="Irfanullah Khan"
                style={{
                  height: "300px",
                  width: "220px",
                  borderRadius: "150px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />

              <h5 className="text-primary fw-bold">
                IRFANULLAH KHAN
              </h5>

              <p className="text-secondary lead mt-4">
                Welcome to Al Rehmat Glass — an Ed-Tech company focused on
                Online Education and Software Development Training.
              </p>

              <p className="text-secondary">
                Our journey started with a simple yet powerful vision:
                helping students and businesses grow through technology.
                We provide modern learning solutions, practical training,
                and industry-ready skills.
              </p>

              <p className="text-secondary">
                Whether you are a beginner learning programming or a
                business looking for software solutions, Al Rehmat Glass is
                committed to delivering reliable, innovative, and
                high-quality services.
              </p>

              <p className="text-secondary">
                We are not just a service provider — we are your partner
                in success. Thank you for being part of our journey.
              </p>

            </div>
          </div>
        </div>
      </section>

      <OurServices2 />

      <Footer />
    </>
  );
};

export default About;