import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyResume from "../components/MyResume";
import OurServices2 from "../components/OurServices2";
import img from "../assets/AyanSir.png";

export const About = () => {
  return (
    <>
      <Navbar />

      {/* Heading */}
      {/* <h1
        className="text-center mb-4"
        style={{
          fontSize: "3rem",
          fontWeight: "bolder",
          color: "#343a40",
        }}
      >
        Irfan's Portfolio
      </h1> */}

      {/* <MyResume /> */}
      {/* <hr /> */}

      {/* About Section */}
      <section className="bg-light py-5 px-2">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">

              <h2 className="mb-4 display-5">
                Welcome to Al Rehmat Glass
              </h2>

              {/* Founder Image */}
              <img
                src={img}
                alt="Ayaan Parvez"
                style={{
                  height: "300px",
                  width: "220px",
                  borderRadius: "18px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />

              <h5 className="text-primary fw-bold">
                Ayaan Parvez,CMO Al Rehmat Glass
              </h5>

              <p
                className="mt-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#444",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              >
                Welcome to Al Rehmat Glass Pvt Ltd.

                a trusted name in the glass processing
                industry, dedicated to delivering premium-quality glass
                solutions for residential, commercial, and industrial projects.
              </p>


              <p
                className="mt-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#444",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              >
                Our journey began with a simple vision to provide durable, innovative, and high-performance
                glass products that combine safety, strength, and modern aesthetics. Over the years,
                we have built a
                reputation for excellence by offering precision-engineered glass products
                that meet the highest industry standards.
              </p>



              <p
                className="mt-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#444",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              >
                At Al Rehmat Glass Pvt Ltd, We specialize in processing a wide range of architectural
                and decorative glass solutions, including Toughened(Tempered) Glass, Laminated Safety Glass,
                Double Glazed Units (DGU), Insulated Glass, Decorative Glass, Frosted Glass, Reflective Glass,
                Tinted Glass, and Custom Glass Solutions.
                Every product is manufactured using advanced technology, modern machinery,
                and strict quality control processes to ensure exceptional durability, safety, and performance.
              </p>

              <p
                className="mt-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#444",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              >   Our experienced team works closely with architects, builders, interior designers,
              contractors, and business owners to understand their unique requirements and provide
              customized glass solutions that perfectly suit every project. Whether it is a luxury
              home, a commercial building, an office space, a shopping mall, a hotel, or an
              industrial facility, we are committed to delivering products that enhance both
              functionality and visual appeal.</p>
           
              <p
                className="mt-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#444",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              >  Quality is the foundation of everything we do.
              From selecting premium raw materials to the final inspection, every stage of our
              manufacturing process is carefully monitored to ensure that our customers
              receive products they can trust. Our commitment to precision, innovation,
              and customer satisfaction has helped us become a preferred partner for clients
              across multiple industries.</p>
            
              <p
                className="mt-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#444",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              >Beyond manufacturing glass, we believe in building long-term relationships
              based on trust, transparency, and reliability. Our dedicated customer support,
              timely delivery, and continuous focus on innovation enable us to exceed customer
              expectations on every project.</p>
              
              <p
                className="mt-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#444",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              >   As the construction and architectural industries continue to evolve, Al Rehmat Glass
              remains committed to adopting the latest technologies and sustainable practices to
              deliver energy-efficient and environmentally responsible glass solutions that
              contribute to modern infrastructure.</p>
            
              <p
                className="mt-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#444",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              >  Whether you need glass for windows, doors, facades, partitions, railings, shower enclosures,
              skylights, storefronts, curtain walls, or specialized architectural applications,
              Al Rehmat Glass is your trusted partner for quality, innovation, and excellence.</p>
            
              <p
                className="mt-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#444",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              >    We don't just process glass. We create solutions that bring strength, safety,
              elegance, and lasting value to every space.</p>
          
              <p
                className="mt-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#444",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              > Thank you for choosing Al Rehmat Glass Pvt Ltd. We look forward to being a part
              of your success and helping you build spaces that inspire confidence, beauty,
              and innovation.</p>
            
              <p
                className="mt-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#444",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              ></p>

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