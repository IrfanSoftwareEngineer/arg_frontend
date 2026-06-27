import React from "react";
import classNames from "classnames";

const servicesContainer={
padding:"38px",
backgroundCcolor:"rgb(239 243 243)"

}






const services = [
  {
    name: "Annealed glass",
    iconClass: "bi bi-laptop-fill",
    description:
      "We build robust, scalable, and secure web applications tailored to your business needs.",
  },
  {
    name: "Toughening glass",
    iconClass: "bi bi-phone-fill",
    description:
      "We create powerful, user-friendly Android apps to help you reach a wider audience on mobile platforms.",
  },
  {
    name: "Insulated glass",
    iconClass: "bi bi-file-earmark-text-fill",
    description:
      "Professional resume writing services to help you stand out in the competitive job market.",
  },
  {
    name: "Heat Soaked Testing",
    iconClass: "bi bi-pencil-fill",
    description:
      "High-quality content writing that engages your audience and enhances your brand's voice.",
  },
  {
    name: "Edge Grinding and Polishing",
    iconClass: "bi bi-brush-fill",
    description:
      "Creative graphic design services that bring your vision to life with visually appealing designs.",
  },
  {
    name: "Drilling and Notching",
    iconClass: "bi bi-graph-up-arrow",
    description:
      "Improve your website's search engine rankings and drive more organic traffic to your site.",
  },
  {
    name: "CNC glass processing",
    iconClass: "bi bi-megaphone-fill",
    description:
      "Expand your reach with targeted digital marketing strategies and campaigns.",
  },
  {
    name: "Custom Fabrication",
    iconClass: "bi bi-people-fill",
    description:
      "Manage your social media presence with consistent and engaging content to build your brand.",
  },
  {
    name: "Quality Assurance",
    iconClass: "bi bi-bag-fill",
    description:
      "Build and manage online stores with our comprehensive e-commerce solutions.",
  },
  {
    name: "IT Consulting",
    iconClass: "bi bi-lightbulb-fill",
    description:
      "Expert IT consulting services to help you leverage technology for business growth and efficiency.",
  },
  {
    name: "Technical Support",
    iconClass: "bi bi-tools",
    description:
      "24/7 technical support services to ensure your systems and applications run smoothly.",
  },
];

const OurServices = () => {
  return (
    <section className=" py-3 py-md-5 py-xl-8"
    style={{padding:"38px",backgroundColor:"rgb(239 243 243)"}}
    >
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="display-5 text-center text-bold mt-0 mx-4 my-5"
            style={{fontFamily:"monospace"}}
            >Our Processing Capabilities</h2>
         
          </div>
        </div>
      </div>

      <div className="container"
    
      >
        <div className="row g-4"> {/* Added 'g-4' class for consistent gap */}
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card border-dark h-100"> {/* Added 'h-100' for full height consistency */}
                <div className="card-body text-center p-4 p-xxl-5">
                  <i className={classNames(service.iconClass, "fs-1 mb-4")}></i>
                  <h4 className="mb-4">{service.name}</h4>
                  <p className="mb-4 text-secondary">{service.description}</p>
                  <a
                    href="#!"
                    className="btn btn-outline-dark bsb-btn-circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;