import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
// import icons
// import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
// imported logo
import Logo from "../../assets/fems.svg";

const Navbar = () => {
    // state to track and update navbar
    const [navBar, setNavBar] = useState("menu");
    // function to show navbar
    const showNavbar = () => {
        setNavBar("menu showNavbar");
    };
    // function to close navbar
    const removeNabvar = () => {
        setNavBar("menu");
    };

    const handleClick = (url) => {
        const navigate = useNavigate();
        navigate(url);
    };

    return (
        <div className="navBar">
            <div className="logoDiv">
                <a href="/">
                    <img src={Logo} alt="Fems Center" />
                </a>
            </div>
            <div className={navBar}>
                <NavLink to="/" className="navLink">
                    Inicio
                </NavLink>
                <NavLink to="/membresias" className="navLink">
                    Membresias
                </NavLink>
                <NavLink to="/servicios" className="navLink">
                    Servicios
                </NavLink>
                <NavLink to="/actividades" className="navLink">
                    Actividades
                </NavLink>
                <NavLink to="/directorio" className="navLink">
                    Directorio
                </NavLink>
                {/* Icon to remove navbar */}
                <AiFillCloseCircle
                    className="icon closeIcon"
                    onClick={removeNabvar}
                />
            </div>

            <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=+522381680876&text=Hola,%20me%20gustar%C3%ADa%20ser%20parte%20del%20equipo%20de%20Fems%20Center%20:)">
                <button className="signUpBtn btn" type="button">
                    Unete
                </button>
            </a>

            {/* Icon toggle to navbar */}
            <PiDotsNineBold className="icon menuIcon" onClick={showNavbar} />
        </div>
    );
};
export default Navbar;
