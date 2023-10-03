import React, { useEffect } from 'react'
import './Suscribe.scss'
// import images
import image from '../../assets/ladyCalling.webP';
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
        <img src={image} alt="Image div" data-aos="fade-up" />
        <div className="textDiv">
          <h2 data-aos="fade-up">
            La mejor manera de empezar a desarrollar tu potencial.
          </h2>
          <p data-aos="fade-up">
            Lic. Karla Vadillo te da la bienvenida a formar parte de este proyecto llamado Fems Center.
          </p>
          <button type='button' className='btn' data-aos="fade-up">Empieza aquí</button>
        </div>
      </div>
    </div>
  )
}

export default Suscribe