import React, { useEffect } from 'react'
import './Home.css'
// import assets
import Video from "../../assets/video.mp4";
import img1 from "../../assets/img6.webp";
import img2 from "../../assets/img7.webp";
import img3 from "../../assets/img8.webp";
import img4 from "../../assets/img9.webp";
// imported icons
// import { AiOutlineSwapRight } from 'react-icons/ai';

import Aos from 'aos';
import 'aos/dist/aos.cjs';

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2500 })
  }, [])

  return (
    <div className='Home'>
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-up">Fems Center</h1>
        <h3 data-aos="fade-up">Es tu momento de crecer</h3>
        <p data-aos="fade-up">Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente.</p>
        {/* <button className='btn flex'>Uneté <AiOutlineSwapRight className='icon' /></button> */}
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Temas Interesantes</h3>
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