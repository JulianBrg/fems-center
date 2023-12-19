import React, { useEffect } from 'react'
import './Home.scss'

// import img1 from "../../assets/img6.webp";
// import img2 from "../../assets/img7.webp";
// import img3 from "../../assets/img8.webp";
// import img4 from "../../assets/img9.webp";

// import icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import StorefrontIcon from '@mui/icons-material/Storefront';

// import icons svg
import Facebook from '../../assets/icons/facebook-svgrepo-com.svg'
import Instagram from '../../assets/icons/instagram-svgrepo-com.svg'
import TikTok from '../../assets/icons/tiktok-logo-fill-svgrepo-com.svg'
import Tienda from '../../assets/icons/online-shop-ecommerce-svgrepo-com.svg'

const Home = () => {



  return (
    <div className='Home'>

      <div className="sectionText">
        <h2>Es tu momento de crecer</h2>
        <h1>FEMS CENTER</h1>
        <p >Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente.</p>

        <div className='redes'>
          <a
            href="https://www.facebook.com/femsenaccion"
            target="_blank"
            rel="sponsored"
            title='Facebook'
            className='icon facebook'
          >
            {/* <FacebookIcon />Facebook */}
            <img src={Facebook} alt="Facebook Icon" className='icon' />
          </a>
          <a
            href="https://www.instagram.com/femscenter/"
            target="_blank"
            rel="sponsored"
            title='Instagram'
            className='icon instagram'
          >
            {/* <InstagramIcon />Instagram */}
            <img src={Instagram} alt="Instagran" className='icon' />
          </a>
          <a
            href="https://www.tiktok.com/@aquientrefems"
            target="_blank"
            rel="sponsored"
            title='Tiktok'
            className='icon tiktok'
          >
            {/* <TikTokIcon />Tiktok */}
            <img src={TikTok} alt="Tiktok Icon" className='icon' />
          </a>
          <a
            href="https://femscenter.mitiendanube.com/"
            target="_blank"
            rel="sponsored"
            title='Showroom'
            className='icon tienda'
          >
            {/* <StorefrontIcon />Showroom */}
            <img src={Tienda} alt="Showroom Icon" className='icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home