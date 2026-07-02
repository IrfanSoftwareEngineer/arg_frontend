import React from 'react';
import '../css_modules/OurTeam.css';
import KamruzamaTeamLogo from "../assets/KamruzamaTeamLogo.jpg";
import ArmanTeamLogo from "../assets/download1.jfif";
import img1 from "../assets/ArsadSirArg_7.png";
import img2 from "../assets/arg_men_avatar.png";
import img3 from "../assets/HuzefaTeamLogo.jpg";

import arg_men_avatar from "../assets/arg_men_avatar.png";

const ArgAdminTeam = () => {

    const Ourservices = {
      
        backgroundColor: '#c7d4e1'

      };

    return (

        
        <section className="OurServices padding-lg" style={Ourservices}>

            <div className="container">
                <div className="row heading heading-icon">
                    <h2 style={{fontSize:"2rem",fontFamily:"monospace",color:"black"}}>Managing Director</h2>
                </div>
                <ul className="row">
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className="cnt-block equal-hight" style={{ height: '349px' }}>
                            <figure><img src={img1} className="img-responsive" alt="" /></figure>
                            <h3><a href="#">Mr. Arshad pervej</a></h3>
                            <p>Chief Executive Officer</p>
                            <ul className="follow-us clearfix">
                                <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                            </ul>

                        </div>
                    </li>
                   <li className="col-12 col-md-6 col-lg-3">
                        <div className="cnt-block equal-hight" style={{ height: '349px' }}>
                            <figure><img src={img2} className="img-responsive" alt="" /></figure>
                            <h3><a href="#">Mr. Gupta</a></h3>
                            <p>Director</p>
                            <ul className="follow-us clearfix">
                                <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                            </ul>

                        </div>
                    </li>
               <li className="col-12 col-md-6 col-lg-3">
                        <div className="cnt-block equal-hight" style={{ height: '349px' }}>
                            <figure><img src={img3} className="img-responsive" alt="" /></figure>
                            <h3><a href="#">Mr. Aggarwal</a></h3>
                            <p>Director</p>
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

export default ArgAdminTeam;