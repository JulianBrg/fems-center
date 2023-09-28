import React, { useEffect } from 'react'
import './Footer.css'
// imported logo
import logo from '../../assets/fems.svg';
// imported icons
import { ImFacebook } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {


  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <img className="logoFems" src={logo} alt="fems logo" />
          </div>

          <div className="socials flex">
            <a href="https://www.facebook.com/femsenaccion" target="_blank" rel="sponsored" title='Facebook'>
              <ImFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com/femscenter/" target="_blank" rel="sponsored" title='Instagram'>
              <AiFillInstagram className="icon" />
            </a>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Principales
          </span>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/membresias">Membresias</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="#">Actividades</a>
            </li>
          </ul>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Helpful Links
          </span>
          <ul>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Información de contacto</span>
          <ul>
            <li><a href="tel:238 168 0876">+52 238 168 0876</a></li>
            <li><a href='mailto:potencialfem@gmail.com'>potencialfem@gmail.com</a></li>
            <li><a href='https://www.google.com.mx/maps/place/C.+Gardenia+532,+Jacarandas,+75730+Tehuac%C3%A1n,+Pue./@18.4711957,-97.3995079,17z/data=!3m1!4b1!4m6!3m5!1s0x85c5bd2ae5a705d3:0x8add4bccb2b2a7c2!8m2!3d18.4711957!4d-97.3969276!16s%2Fg%2F11cp9dgj64?entry=ttu'>C. Gardenia 532, Jacarandas, 75730 Tehuacán, Pue.</a></li>
          </ul>

          {/* <span className="phone" href="tel:238 168 0876">+52 238 168 0876</span>
          <span className="email" href='mailto:potencialfem@gmail.com'>potencialfem@gmail.com</span> */}
        </div>


      </div>
    </div>
  )
}

export default Footer