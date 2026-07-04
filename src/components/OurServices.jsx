import React from "react";
import classNames from "classnames";


const servicesContainer = {
  padding: "38px",
  backgroundCcolor: "rgb(239 243 243)"

}






const services = [
  {
    name: "Annealed Glass",
    iconClass: "bi bi-laptop-fill",
    description:
      "High-quality flat glass offering excellent clarity, versatility, and precision for various architectural and interior applications.",
  },
  {
    name: "Toughening Glass",
    iconClass: "bi bi-phone-fill",
    description:
      "Strong, safety-enhanced glass processed to withstand high impact, thermal stress, and demanding environments.",
  },
  {
    name: "Insulated Glass",
    iconClass: "bi bi-file-earmark-text-fill",
    description:
      "Energy-efficient double-glazed glass designed to improve thermal insulation, reduce noise, and enhance indoor comfort.",
  },
  {
    name: "Heat Soaked Testing",
    iconClass: "bi bi-pencil-fill",
    description:
      "Advanced heat soak testing process that minimizes the risk of spontaneous glass breakage for maximum safety.",
  },
  {
    name: "Edge Grinding and Polishing",
    iconClass: "bi bi-brush-fill",
    description:
      "Precision edge finishing services that deliver smooth, polished edges for enhanced safety and premium appearance.",
  },
  {
    name: "Drilling and Notching",
    iconClass: "bi bi-graph-up-arrow",
    description:
      "Accurate drilling and custom notching solutions for seamless installation in architectural and structural applications.",
  },
  {
    name: "CNC glass processing",
    iconClass: "bi bi-megaphone-fill",
    description:
      "State-of-the-art CNC machining providing precise cutting, shaping, engraving, and customized glass fabrication.",
  },
  {
    name: "Custom Fabrication",
    iconClass: "bi bi-people-fill",
    description:
      "Tailor-made glass solutions manufactured to meet unique project specifications with exceptional quality and precision.",
  },
  {
    name: "Quality Assurance",
    iconClass: "bi bi-bag-fill",
    description:
      "Rigorous quality control processes ensuring every glass product meets the highest industry standards and customer expectations.",
  },
  {
    name: "IT Consulting",
    iconClass: "bi bi-lightbulb-fill",
    description:
      "Providing expert technology consulting services to optimize business operations, digital transformation, and IT infrastructure.",
  },
  {
    name: "Technical Support",
    iconClass: "bi bi-tools",
    description:
      "Reliable technical assistance and after-sales support to ensure smooth installation, maintenance, and long-term performance.",
  },
];

const OurServices = () => {
  return (<>
    <section className=" py-3 py-md-5 py-xl-8"
      style={{ padding: "38px", backgroundColor: "rgb(239 243 243)" }}
    >
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="display-5 text-center text-bold mt-0 mx-4 my-5"
              style={{ fontFamily: "monospace" }}
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

  </>
  );
};

export default OurServices;