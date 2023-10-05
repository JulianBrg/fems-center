import React, { useEffect } from 'react'
import './Home.scss'
// import assets
import background from "../../assets/back.svg";
import img1 from "../../assets/img6.webp";
import img2 from "../../assets/img7.webp";
import img3 from "../../assets/img8.webp";
import img4 from "../../assets/img9.webp";
// imported icons

// animation
import Aos from 'aos';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <div className='Home'>
      <div className="videoBg">
        {/* <video src={Video} autoPlay loop muted></video> */}
        <img src={background} alt="background" />
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-down">Fems Center</h1>
        <h2 data-aos="fade-down">Es tu momento de crecer</h2>
        <p data-aos="fade-down">Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente.</p>

        <div data-aos="fade-down">
          <a
            href="https://www.facebook.com/femsenaccion"
            target="_blank"
            rel="sponsored"
            title='Facebook'
          >
            <FacebookIcon className='icon' />
          </a>
          <a
            href="https://www.instagram.com/femscenter/"
            target="_blank"
            rel="sponsored"
            title='Instagram'
          >
            <InstagramIcon className='icon' />
          </a>
        </div>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Fotos</h3>
          <div className="images flex" data-aos="fade-up">
            <img src={img1} alt="Images blog" />
            <img src={img2} alt="Images blog" />
            <img src={img3} alt="Images blog" />
            <img src={img4} alt="Images blog" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home