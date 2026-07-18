import React from "react";

import Styles from "../css_modules/YoutubeImages.module.css";

import vid2 from "../assets/vv1.mp4";
import vid4 from "../assets/vid4.mp4";
import { useEffect, useRef } from "react";




const GoogleVideos = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current?.play().catch(err => console.log(err));
  }, []);
  return (
    <>


      <div className={`${Styles.imageContainer}`}>

        <video
          width="100%"
          height="100%"
          controls
          autoPlay
          loop
        >
          <source src={vid2} type="video/mp4" />
        </video>

        <video
          width="100%"
          height="100%"
          loop
          autoPlay
          muted
        >
          <source src={vid4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>



      </div>
    </>
  );
};

export default GoogleVideos;
