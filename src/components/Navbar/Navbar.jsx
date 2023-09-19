import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
// import icons
// import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
// imported logo
import Logo from '../../assets/fems.svg';

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

  const handleClick = (url) => {
    const navigate = useNavigate();
    navigate(url);
  }

  return (
    <div className="navBar">
      <div className="logoDiv">
        {/* <BiLogoMediumOld className="icon" /> */}
        {/* <span>Fems Center</span>1 */}
        <a href="/"><img src={Logo} alt="Fems Center" /></a>
      </div>
      <div className={navBar}>
        <ul>
          {/* <li className="navList">Inicio</li>
          <li className="navList">Membresias</li>
          <li className="navList">Servicios</li>
          <li className="navList">Actividades</li> */}
          <NavLink to="/" className="navLink">Inicio</NavLink>
          <NavLink to="/membresias" className="navLink">Membresias</NavLink>
          <NavLink to="/servicios" className="navLink">Servicios</NavLink>
          <NavLink to="/actividades" className="navLink">Actividades</NavLink>
        </ul>
        {/* Icon to remove navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNabvar} />
      </div>

      <a target="_blank" href="https://api.whatsapp.com/send?phone=+522381680876&text=Hola,%20me%20gustar%C3%ADa%20ser%20parte%20del%20equipo%20de%20Fems%20Center%20:)">
        <button className="signUpBtn btn">
          Unete</button>
      </a>

      {/* <button className="signUpBtn btn" onClick={(e) => {
        e.preventDefault();
        window.open = ('intent://scan/#Intent;scheme=whatsapp://send?phone=+522381680876&text=Hola,%20me%20gustar%C3%ADa%20pertenecer%20al%20equipo%20de%20Fems%20Center%20;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.whatsapp;end', '_blank');
      }}>
        Unete
      </button> */}

      {/* Icon toggle to navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar} />
    </div>
  );
}
export default Navbar;
