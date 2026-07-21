import React, { useEffect, useRef } from "react";
import Styles from "../css_modules/YoutubeImages.module.css";
import vid5 from "../assets/vid5.mp4";

const GoogleVideos1 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Video Error:", err);
      });
    }
  }, []);

  return (
    <div className={Styles.imageContainer}>
      <video
          width="100%"
          height="100%"
          controls
          autoPlay
          loop
      >
        <source src={vid5} type="video/mp4" />
      </video>
    </div>
  );
};

export default GoogleVideos1;