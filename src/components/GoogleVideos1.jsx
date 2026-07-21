import React from "react";

import Styles from "../css_modules/YoutubeImages.module.css";

import vid5 from "../assets/vid5.mp4";

const GoogleVideos1 = () => {
  return (
    <>


      <div className={`${Styles.imageContainer}`}>
    


        <video

          width="100%"
          height="100%"
          loop
          autoPlay
          muted
        >
          <source src={vid5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>





      </div>
    </>
  );
};

export default GoogleVideos1;
