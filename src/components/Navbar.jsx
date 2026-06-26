import React from 'react'
import Styles from '../css_modules/Navbar.module.css'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import logo from "../assets/arg_logo.jpg";


const Navbar = () => {

  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu((prevState) => !prevState);
  };

  return (
  <>
  <nav className={ ` navbar navbar-expand-lg  d-flex flex-column  ms-auto mb-lg-0 ${Styles.nav}`} >
    <div className="container">

    <Link class="navbar-brand" to="/Home">
      <img className={`${Styles.logo}`} src={logo}     alt="BoosterClasses logo"/>
    </Link>

    <li className={`nav-item ${Styles.logoName}`}>
   <Link className={ `nav-link active text-wrap text-large  text-white ${Styles.fontSize} `}  aria-current="page" to="/Home">Al Rehmat Glass</Link>
          </li>
      {/* <Link className={`navbar-brand navbar-active text-white ${Styles.textWhite}`} to="/">BoosterClasses</Link> */}
      <button className="navbar-toggler" style={{backgroundColor: '#ffffff'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-primary "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={ `d-flex justify-content-right align-items-right navbar-nav ms-auto mb-2 mb-lg-0 `} >
    
          <li className={`nav-item ${Styles.nav}`}>
            <Link className="nav-link active  text-white "  aria-current="page" to="/Home">Home</Link>
          </li>

{/* Here is the Course sub menu list items  */}
          <li className="nav-item dropdown">
          <Link
            className="nav-link text-white dropdown-toggle"
            aria-current="page"
            to="#"
            onClick={toggleSubmenu} // Toggle submenu visibility
          >
            Courses
          </Link>

{/* show is using for menu item will transform in to column when its takes item content larger */}
          {showSubmenu && ( // Conditionally render submenu
            <ul className="dropdown-menu show">
                  <li>
                <Link className="dropdown-item" to="/Courses/">
                  All_Courses
                </Link>
              </li>
                  <li>
                <Link className="dropdown-item" to="/Courses/Class_9_IT">
                  Class_9_IT
                </Link>
              </li>
                  <li>
                <Link className="dropdown-item" to="/Courses/class_10_IT">
                  Class_10_IT
                </Link>
              </li>
                  <li>
                <Link className="dropdown-item" to="/Courses/Class_11_CS">
                  Class_11_CS
                </Link>
              </li>
                  <li>
                <Link className="dropdown-item" to="/Courses/Class_12_CS">
                  Class_12_CS
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Courses/Java">
                  Java
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Courses/Python">
                  Python
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Courses/English">
                  englishSpeakingCourse
                </Link>
              </li>
            </ul>
          )}
        </li>



          {/* <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/Courses">Courses</Link>
          </li> */}
          <li className="nav-item">
            <Link className="text-white nav-link active" aria-current="page" to="/About">About</Link>
          </li>
          <li className="nav-item">
            <Link className="text-white nav-link active" aria-current="page" to="/Support">Support</Link>
          </li>
          <li className="text-white nav-item">
            <Link className="text-white nav-link active" aria-current="page" to="/Career">Career</Link>
          </li>
        
        
        </ul>
       
      </div>
    </div>
  </nav>
  </>
  );
}

export default Navbar