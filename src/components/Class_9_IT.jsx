import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Styles from "../css_modules/Class_9_IT.module.css";


const Class_9_IT = () => {
  return (
    <>
      <Navbar></Navbar>
<div className={Styles.maintenanceContainer}>
  <div className={Styles.maintenanceBox}>
    <h1>🚧 Page Under Maintenance</h1>
    <p>
      We're currently working to improve this page.
      <br />
      Please check back soon. Thank you for your patience!
    </p>
  </div>
</div>
      <Footer></Footer>
    </>
  );
};

export default Class_9_IT;
