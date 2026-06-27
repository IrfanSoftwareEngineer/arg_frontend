import React from "react";
import { Link } from "react-router-dom";

import java from "../assets/Java.jpeg";
import javascript from "../assets/javascript.jpeg";
import python from "../assets/python.jpeg";
import t7 from "../assets/lami_poster.png";
import t8 from "../assets/fabric_poster.png";
import t9 from "../assets/flute_poster.png";
import t10 from "../assets/dg_poster.png";

import reactframework from "../assets/reactframework.jpeg";



import Button1 from "./Button1";

const cardData = [
  {
    title: "Lamination Glass",
text:
  "Our premium Lamination Glass offers superior safety, durability, and elegant design. " +
  "It is ideal for homes, offices, storefronts, partitions, railings, and modern architectural projects. " +
  "Designed to enhance both security and aesthetics while providing long-lasting performance.",
imgSrc: t7,
imgAlt: "Lamination Glass",
    url:"/Career",
    
    
  },
  {
    title: "Mathematic with Computer for class 8th Students",
    text:"This Course will provide extensive Knowledge that makes you alone in crowd "+
    "Sharping Excellence Fostering for your better Career Development and Skills for Job Ready.",
    imgSrc: t8,
    imgAlt: "Hollywood Sign on The Hill",
    url:"/Career",
    
    
  },
  {
    title: "Mathematic with Computer for class 9th Students",
    text:"This Course will provide extensive Knowledge that makes you alone in crowd "+
    "Sharping Excellence Fostering for your better Career Development and Skills for Job Ready.", 
    imgSrc: t9,
    imgAlt: "Hollywood Sign on The Hill",
    url:"/Career",
    
    
  },
  {
    title: "Mathematic with Computer for class 10th Students",
    text:"This Course will provide extensive Knowledge that makes you alone in crowd "+
    "Sharping Excellence Fostering for your better Career Development and Skills for Job Ready.",
    imgSrc: t10,
    imgAlt: "Hollywood Sign on The Hill",
    url:"/Career",
    
    
  }
];

const ServiceListCardView = () => {
  return (
    <>
      <h1 className="align-items-center text-center my-4">Glass Architectural</h1>
      <div
        className="row row-cols-1 row-cols-md-2 g-4"
        style={{ padding: "20px 46px 15px 60px" ,marginInlineEnd:"0px"}}
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
        <Link to="/Courses" style={{textDecoration:"none"}}>
 <Button1></Button1>
          </Link>
    </>
  );
};

export default ServiceListCardView;
