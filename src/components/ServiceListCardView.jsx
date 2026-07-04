import React from "react";
import { Link } from "react-router-dom";

import java from "../assets/Java.jpeg";
import javascript from "../assets/javascript.jpeg";
import python from "../assets/python.jpeg";
import t7 from "../assets/w6.jpeg";
import t8 from "../assets/w7.jpeg";
import t9 from "../assets/w10.jpeg";
import t10 from "../assets/w2.jpeg";

import reactframework from "../assets/reactframework.jpeg";



import Button1 from "./Button1";

const cardData = [
  {
    title: "Insulated (DGU) Glass",
    text:
      "Our premium Insulated (DGU) Glass is engineered with double glazing technology to provide outstanding thermal insulation, energy efficiency, and noise reduction. It is ideal for commercial buildings, villas, offices, hotels, and modern residential projects. Designed to improve indoor comfort while reducing energy costs and enhancing architectural beauty.",
    imgSrc: t7,
    imgAlt: "Lamination Glass",
    url: "/Career",


  },
  {
    title: "Fabric Glass",
    text: "Our premium Fabric Glass combines decorative fabric layers with high-quality glass to create stylish and modern interiors. It is perfect for office partitions, doors, wardrobes, hotels, restaurants, and luxury residential spaces. Designed to provide privacy, elegance, and a unique aesthetic appeal while maintaining durability.",
    imgSrc: t8,
    imgAlt: "Hollywood Sign on The Hill",
    url: "/Career",


  },
  {
    title: "Tinted Glass",
    text: "Our premium Tinted Glass offers excellent solar control by reducing heat and glare while adding a stylish appearance to buildings. It is perfect for windows, facades, doors, and commercial structures. Designed to improve privacy, comfort, and energy efficiency with long-lasting performance.",
    imgSrc: t9,
    imgAlt: "Hollywood Sign on The Hill",
    url: "/Career",


  },
  {
    title: "Tempered Glass",
    text: "Our premium Tempered Glass is heat-treated to deliver exceptional strength, safety, and impact resistance. It is widely used for doors, shower enclosures, facades, railings, windows, and office partitions. Designed to withstand heavy loads and break into small harmless fragments for enhanced safety.",
    imgSrc: t10,
    imgAlt: "Hollywood Sign on The Hill",
    url: "/Career",


  }
];

const ServiceListCardView = () => {
  return (
    <>
      <h1 className="align-items-center text-center my-4">Our Glass Products</h1>
      <div
        className="row row-cols-1 row-cols-md-2 g-4"
        style={{ padding: "20px 46px 15px 60px", marginInlineEnd: "0px" }}
      >

        {cardData.map((card, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img
                src={card.imgSrc}
                className="card-img-top"
                alt={card.imgAlt}
              />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title text-center">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <Link to={card.url}>
                  <button type="button" className="btn btn-danger text-center">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}



      </div>
      <Link to="/Courses" style={{ textDecoration: "none" }}>
        <Button1></Button1>
      </Link>
    </>
  );
};

export default ServiceListCardView;
