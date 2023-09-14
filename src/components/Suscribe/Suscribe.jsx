import React, { useEffect } from 'react'
import './Suscribe.css'
// import images
import image from '../../assets/ladyCalling.png';
// animation
import Aos from 'aos';
import 'aos/dist/aos.cjs';

const Suscribe = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={image} alt="Image div" data-aos="fade-right" />
        <div className="textDiv">
          <h4 data-aos="fade-left">
            La mejor manera de empezar a desarrollar tu potencial.
          </h4>
          <p data-aos="fade-left">
            Ofrecemos itinerarios personalizados adaptados a las preferencias e intereses individuales.
          </p>
          <button className='btn' data-aos="fade-left">Empieza aquí</button>
        </div>
      </div>
    </div>
  )
}

export default Suscribe