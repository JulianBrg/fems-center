import React from 'react'
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
            <a href="https://www.instagram.com/" target="_blank" rel="sponsored" title='Instagram'>
              <AiFillInstagram className="icon" />
            </a>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Helpful Links
          </span>
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
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contact Details</span>
          <li><a href="tel:238 168 0876">+52 238 168 0876</a></li>
          <li><a href='mailto:potencialfem@gmail.com'>potencialfem@gmail.com</a></li>

          {/* <span className="phone" href="tel:238 168 0876">+52 238 168 0876</span>
          <span className="email" href='mailto:potencialfem@gmail.com'>potencialfem@gmail.com</span> */}
        </div>


      </div>
    </div>
  )
}

export default Footer