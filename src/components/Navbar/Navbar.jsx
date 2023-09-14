import React, { useState } from "react";
import "./Navbar.css";
// import icons
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
// imported logo
import Logo from '../../assets/fems.svg';
import { NavLink } from "react-router-dom";
import Membership from "../../pages/Membership/Membership";

const Navbar = () => {


  
  // state to track and update navbar
  const [navBar, setNavBar] = useState("menu");
  // function to show navbar
  const showNavbar = () => {
    setNavBar("menu showNavbar")
  }
  // function to close navbar
  const removeNabvar = () => {
    setNavBar("menu")
  }

  return (
    <div className="navBar">
      <div className="logoDiv">
        {/* <BiLogoMediumOld className="icon" /> */}
        {/* <span>Fems Center</span>1 */}
        <img src={Logo} alt="Fems Center" />
      </div>
      <div className={navBar}>
        <ul>
          {/* <li className="navList">Inicio</li> */}
          {/* <li className="navList">Membresias</li> */}
          {/* <li className="navList">Servicios</li> */}
          {/* <li className="navList">Actividades</li> */}
          <NavLink to="/" className="navList">Inicio</NavLink>
          <NavLink to="/membresias" className="navList">Membresias</NavLink>
          <NavLink to="/servicios" className="navList">Servicios</NavLink>
          <NavLink to="/actividades" className="navList">Actividades</NavLink>
        </ul>
        {/* Icon to remove navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNabvar} />
      </div>

      <button className="signUpBtn btn">Unete</button>
      {/* Icon toggle to navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar} />
    </div>
  );
};

export default Navbar;
