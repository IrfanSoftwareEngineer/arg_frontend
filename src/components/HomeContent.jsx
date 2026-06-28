import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Styles from "../css_modules/HomeContent.module.css";
import GoogleVideos from "../components/GoogleVideos";
import img1 from "../assets/ArsadSirbgimage.png";
import img2 from "../assets/ArsadSirbgimage1.png";
import img3 from "../assets/ArsadSirbgimage2.png";
// import sm1 from "../assets/sm1.jpg";
// import sm3 from "../assets/sm3.jpg";
import sm1 from "../assets/ArsadSirArg_5.png";
import sm2 from "../assets/ArsadSirArg_4.png";
import sm3 from "../assets/ArsadSirArg_6.png";
import gift from "../assets/phone_gift_arg.jpeg";
import logo from "../assets/arg_logo.jpg";

//importing medium images here 
import md1 from "../assets/ArsadSirbgimage2_medium.png";
import md2 from "../assets/ArsadSirbgimage1_medium.png";
import md3 from "../assets/ArsadSirbgimage2_medium.png";

const HomeContent = () => {
  //taking three different arrays for large, medium and small images to display based on screen size
const largeImages = [img1, img2, img3];
const mediumImages = [md1, md2, md3];
const smallImages = [sm1, sm2, sm3];

const [backgroundColor, setBackgroundColor] = useState("");
const [currentImage, setCurrentImage] = useState(0);
const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };
//here we are storing the active images based on the screen size, 
// if screen size is less than 400px then small images will be displayed, 
// if screen size is less than 640px then medium images will be displayed and 
// if screen size is greater than 640px then large images will be displayed
  const activeImages =
  screenWidth <= 400
    ? smallImages
    : screenWidth <= 640
    ? mediumImages
    : largeImages;

const changeImage = useCallback(() => {
  setCurrentImage((prev) => (prev + 1) % activeImages.length);
}, [activeImages]);

  useEffect(() => {
  const intervalId1 = setInterval(generateRandomColor, 1000);
  const intervalId2 = setInterval(changeImage, 4000);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setCurrentImage(0); // Reset image when screen size changes
  };

  window.addEventListener("resize", handleResize);

  return () => {
    clearInterval(intervalId1);
    clearInterval(intervalId2);
    window.removeEventListener("resize", handleResize);
  };
}, [changeImage]);


 const BackgroundDiv = styled.div`
  height: 100vh;
  position: relative;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${activeImages[currentImage]});
`;

  const CenteredH1 = styled.h1`
  color: white;
    inset: 63% 58% 54% 28%;
    position: absolute;
    margin: -67px;
    font-size: 26px;
    font-weight: 800;
    white-space: nowrap;
    font-family: "Baloo 2";
  `;

  

  const PhoneGift = styled.div`
    height: 100%;
    width: 100%;
    
    position: relative;
    z-index: -1;
    background-size: cover;
    background-image: url(${gift});
  `;

  return (
    <>  
      <BackgroundDiv>
        <CenteredH1 className={Styles.TextScreen}> Managing Director <br></br> at alrehmat glass
         
        </CenteredH1>
      </BackgroundDiv>
<PhoneGift />
      <GoogleVideos />
   
 
      <div
        style={{ backgroundColor }}
        id="background"
        className={`${Styles.HomeContainer}`}
      >
        <img
          id="logo"
          className={`${Styles.logo}`}
          src={logo}
          alt="logoRenderingwhenPageLoad"
        />
        <h1 className={`text-center ${Styles.Text1}`}>
          Our Services to build top-notch Softwares.
        </h1>
          <h1 className={`text-center ${Styles.Text}`}>
          Welcome to Alrehmat Glass.
        </h1>
        <h1 className={`text-center ${Styles.Text1}`}>
          Alrehmat Glass में आपका स्वागत है।
        </h1>
       
      </div>
    </>
  );
};

export default HomeContent;