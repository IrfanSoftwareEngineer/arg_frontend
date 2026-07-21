import React from "react";

import Styles from "../css_modules/YoutubeImages.module.css";

import vid5 from "../assets/vid5.mp4";

const GoogleVideos1 = () => {
  return (
    <>


      <div className={`${Styles.imageContainer}`}>
    


        <video

         autoPlay
  muted
  loop
  playsInline
  preload="auto"
  controls
        >
          <source src={vid5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>





      </div>
    </>
  );
};

export default GoogleVideos1;
