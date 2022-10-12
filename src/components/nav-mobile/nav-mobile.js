import React from "react";
import pic from './logo.png'
import './navmob.css'

import Hamburger from "hamburger-react";

// import component 👇
import Drawer from "react-modern-drawer";


import "react-modern-drawer/dist/index.css";

const Navmob = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="mob-header">
        <div className="mob-nav-hamburger">
        
          <img className="himg" src={pic} />
      
        {/* <div className="mobnav-hamburer"> */}
        <Hamburger  toggled={isOpen} toggle={setIsOpen} />
        {/* </div> */}
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div className="navmob-headul">
            <ul className="navmob-hul">
              <li>OUR SOLOUTIONS</li>
              <li>PRODUCTS & BRANDS</li>
              <li>CASE STUDIES</li>
              <li>SERVICE PORTAL</li>
              <li>ACADEMY</li>
              <li>ABOUT COM</li>
            </ul>
          </div>
          <div className="navmob-hbuton">
            <button className="navmob-hbut">Hello</button>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Navmob;
