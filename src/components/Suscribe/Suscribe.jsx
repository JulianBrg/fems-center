import React, { useEffect } from 'react'
import './Suscribe.scss'
// import images
import image from '../../assets/ladyCalling.webp';
// animation
import Aos from 'aos';

const Suscribe = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={image} alt="Karla Vadillo" title='Lic. Karla Vadillo' data-aos="fade-up" />
        <div className="textDiv">
          <h2 data-aos="fade-up">
            La mejor manera de empezar a desarrollar tu potencial.
          </h2>
          <p data-aos="fade-up">
            Karla Vadillo, directora general y fundadora del programa de Empoderamiento de mujeres "Potencial Fem" te da la bienvenida a formar parte a una plataforma de crecimiento personal, profesional y empresarial.
          </p>
          {/* <button type='button' className='btn' data-aos="fade-up">Empieza aquí</button> */}
        </div>
      </div>
    </div>
  )
}

export default Suscribe