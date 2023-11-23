import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar2.scss";
// import icons
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// imported logo
import Logo from "../../assets/fems.svg";

const Navbar2 = () => {

    const linkWhats = "https://api.whatsapp.com/send?phone=+522381680876&text=Hola,%20me%20gustar%C3%ADa%20ser%20parte%20del%20equipo%20de%20Fems%20Center%20:)";
    // const blog = 'https://issuu.com/';
    const tienda = 'https://femscenter.mitiendanube.com/';

    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    const closeMenu = () => {
        setIsChecked(false);
    }

    return (
        <header>
            <div className="Container">
                <input
                    type="checkbox"
                    id="check" name="menu"
                    title="menu"
                    checked={isChecked}
                    onChange={checkHandler}
                />
                <div className="logo-container">
                    <a href="/"><img className="logo" src={Logo} alt="Fems Center" title="Fems center Inicio"/></a>
                </div>

                <div className="nav-btn">
                    <div className="nav-links">
                        <ul>
                            <li className="nav-link">
                                <NavLink to="/" className="a" onClick={closeMenu}>
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to="/membresias" className="a" onClick={closeMenu}>
                                    Membresías
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink className="a">Servicios<ArrowDropDownIcon className="i" /></NavLink>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <NavLink to="/servicios/FEMS" className="a" onClick={closeMenu}>
                                                FEMS
                                            </NavLink>
                                        </li>
                                        <li className="dropdown-link">
                                            <NavLink to="/servicios/asociadas" className="a" onClick={closeMenu}>
                                                Asociadas
                                            </NavLink>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-link">
                                <NavLink className="a">Actividades<ArrowDropDownIcon className="i" /></NavLink>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <NavLink to="/actividades/personales" className="a" onClick={closeMenu}>
                                                Personales
                                            </NavLink>
                                        </li>
                                        <li className="dropdown-link">
                                            <NavLink to="/actividades/profesionales" className="a" onClick={closeMenu}>
                                                Profesionales
                                            </NavLink>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-link">
                                <NavLink className="a">Directorio<ArrowDropDownIcon className="i" /></NavLink>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <NavLink to="/directorio/socias" className="a" onClick={closeMenu}>
                                                Socias
                                            </NavLink>
                                        </li>
                                        <li className="dropdown-link">
                                            <NavLink to="/directorio/sedes" className="a" onClick={closeMenu}>
                                                Sedes
                                            </NavLink>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>

                            </li>

                        </ul>
                    </div>

                    <div className="log-sign">
                        <a href={linkWhats} className="btnNav solid" target="_blank">Únete</a>
                        <a href={tienda} className="btnNav transparent" target="_blank">Showroom</a>
                        {/* <a href={blog} className="btnNav transparent" target="_blank">Blog</a> */}
                    </div>
                </div>

                <div className="hamburger-menu-container">
                    <div className="hamburger-menu">
                        <div></div>
                    </div>
                </div>
            </div>
        </header >
    );
};
export default Navbar2; 2
