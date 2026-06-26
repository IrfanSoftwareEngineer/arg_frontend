import React from "react";
import styles from "../css_modules/CourseCardView.module.css";
import { Link } from "react-router-dom";

export const CourseCardView = (props) => {
  return (
    <div className={` ${styles.card} row`}>
      <div class={`col p-3 `}>
        <div class={`col p-3 `}>
          {/* <div class="card h-100 w-45"> */}
          <div class="card h-100 w-45">
            <img src={props.image} class="card-img-top" alt="Courses" />

            <div class="card-body">
  <h5 class="card-title">{props.title}</h5>
  <p class="card-text">{props.cardText}</p>
  <div class="text-center">
    <Link to="/Career">
      <button class="btn btn-dark">Register Now</button>
    </Link>
  </div>
</div>

            {/* <div class="card-footer text-center"> */}
   
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
