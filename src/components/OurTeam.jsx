import React from 'react';
import '../css_modules/OurTeam.css';
// import BackgroudImg from '../assets/ArtificialIntelligence.jpg';

import KamruzamaTeamLogo from "../assets/KamruzamaTeamLogo.jpg";
// import joya from "../assets/joya.jpeg";
import ArmanTeamLogo from "../assets/download1.jfif";
import irfan from "../assets/logo.png";
import ahsan from "../assets/ahsan.jpg";
import Huzefa from "../assets/HuzefaTeamLogo.jpg";



const OurTeam = () => {

    const Ourservices = {
      
        backgroundColor: 'white'

      };

    return (

        
        <section className="OurServices padding-lg" style={Ourservices}>

            <div className="container">
                <div className="row heading heading-icon">
                    <h2 style={{fontSize:"2rem",fontFamily:"monospace",color:"black"}}>Our Trainers</h2>
                </div>
                <ul className="row">
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className="cnt-block equal-hight" style={{ height: '349px' }}>
                            <figure><img src={irfan} className="img-responsive" alt="" /></figure>
                            <h3><a href="#">Mr. Irfan</a></h3>
                            <p>Software Engineer</p>
                            <ul className="follow-us clearfix">
                                <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                            </ul>

                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className="cnt-block equal-hight" style={{ height: '349px' }}>
                            <figure><img src={Huzefa} className="img-responsive" alt="" /></figure>
                            <h3><a href="">Mr. Huzefa</a></h3>
                            <p>Cloud Engineer</p>
                            <ul className="follow-us clearfix">
                                <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                            </ul>

                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className="cnt-block equal-hight" style={{ height: '349px' }}>
                            <figure><img src={KamruzamaTeamLogo} className="img-responsive" alt="" /></figure>
                            <h3><a href="#">Kamruzama Ansari</a></h3>
                            <p>Frontend Developer</p>
                            <ul className="follow-us clearfix">
                                <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                            </ul>

                        </div>
                    </li> 
                                  
                </ul>
            </div>
        </section>
    );
}

export default OurTeam;