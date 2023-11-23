import React, { useEffect } from 'react'
import './Middle.scss'
// animation
import Aos from 'aos';


const Middle = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className='middle section'>
      <div className="secContainer container">
        <div className="grid" data-aos="fade-up">

          <span className="flex" data-aos="fade-up">
            <h4>318</h4>
            <p>Emprendedoras practicaron Networking</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h4>017</h4>
            <p>Expos como plataforma de Venta</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h4>528</h4>
            <p>Mujeres se han desarrollado Personalmente</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h4>588</h4>
            <p>Mujeres se han formado Profesionalmente</p>
          </span>

        </div>
      </div>
    </div>
  )
}

export default Middle