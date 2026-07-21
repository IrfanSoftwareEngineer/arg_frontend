import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import ArgsalesTeam from "../components/ArgSalesTeam";
import OurServices from "../components/OurServices";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";
import ServiceListCardView from "../components/ServiceListCardView";
import { useNavigate } from "react-router-dom";
import AppName from "../components/AppName";
import GoogleVideos1 from "../components/GoogleVideos1";
import ArgAdminTeam from "../components/ArgAdminTeam";

import BuildingImages from "../data/TypesOfGlass";
import Employee from "../data/Employee";
import TextCard from "../data/TextCard";
import ImageSlider from "../ImageSlider/ImageSlider";
import ImageSlider1 from "../ImageSlider/ImageSlider1";
import TypesOfGlass from "../data/TypesOfGlass";

import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {

  const minutes = 5; // for 2 minutes
  const milliseconds = minutes * 60 * 1000;
  const navigate = useNavigate();
  const [isLogIn, setIsLogIn] = useState(() => {

    const loginStatus = localStorage.getItem("isLogIn");
    return loginStatus === "true";
  });

  useEffect(() => {
    if (!isLogIn) {

      localStorage.setItem("isLogIn", "false");

      // Redirect to login page after 8 seconds
      const changeInterval = setTimeout(() => {
        navigate("/LogInPage");
      }, 60000);

      return () => clearTimeout(changeInterval);
    } else {
      // User is logged in, set a timeout for 1 minute before prompting for login again
      const changeInterval2 = setTimeout(() => {
        navigate("/LogInPage");
      }, milliseconds);

      return () => clearTimeout(changeInterval2);
    }
  }, [isLogIn, navigate]);

  return (
    <>
      {/* <AppName title="Al Rehmat Glass" /> */}
      <Navbar />
      <HomeContent></HomeContent>



      <ImageSlider
        data={TypesOfGlass}
        slidesPerView={1}
        autoplay={true}
        navigation={false}
      />


   
      <ServiceListCardView />
      <OurServices />

 <ImageSlider1
  data={TextCard}
  slidesPerView={1}
  navigation={false}
  pagination={true}
  autoplay={true}
  loop={true}
/>

    
      <ArgAdminTeam />
      <ArgsalesTeam />
   
   <ImageSlider
        data={Employee}
        slidesPerView={1}
        autoplay={true}
        navigation={false}
      />

  <GoogleVideos1 />

      <Footer />
    </>
  );
};

export default Home;