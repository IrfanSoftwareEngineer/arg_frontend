import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Styles from "../css_modules/HomeContent.module.css";
import GoogleVideos from "../components/GoogleVideos";
import img1 from "../assets/ArsadSirArg_1.jpg";
import img2 from "../assets/ArsadSirArg_2.jpg";
// import sm1 from "../assets/sm1.jpg";
// import sm3 from "../assets/sm3.jpg";
import sm1 from "../assets/ArsadSirArg_5.png";
import sm2 from "../assets/ArsadSirArg_4.png";
import sm3 from "../assets/ArsadSirArg_6.png";
import gift from "../assets/phone_gift_arg.jpeg";
import logo from "../assets/arg_logo.jpg";

const HomeContent = () => {
  const largeImages = [img1, img2];
  const smallImages = [sm1, sm2, sm3];

  const [backgroundColor, setBackgroundColor] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 495);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  const changeImage = useCallback(() => {
    setCurrentImage((prevValue) => {
      if (isSmallScreen) {
        return (prevValue + 1) % smallImages.length;
      } else {
        return (prevValue + 1) % largeImages.length;
      }
    });
  }, [isSmallScreen, largeImages.length, smallImages.length]);

  useEffect(() => {
    const intervalId1 = setInterval(generateRandomColor, 9000);
    const intervalId2 = setInterval(changeImage, 4000);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 495);
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
    background-image: url(${isSmallScreen
      ? smallImages[currentImage]
      : largeImages[currentImage]});
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

  // bottom: 50%;
  // left: 45%;
  // position: absolute;
  // right: 50%;
  // top: 74%;
  // padding: -29px;
  // margin: -67px;
  // font-size: 14px;
  // font-weight: 800;
  
  // white-space: nowrap;
  
  
  // font-family: 'Baloo 2';






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
          Alrehmat Glass में आपका स्वागत है।
        </h1>
       
      </div>
    </>
  );
};

export default HomeContent;