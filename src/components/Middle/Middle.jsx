import React, { useEffect } from 'react'
import './Middle.css'
// animation
import Aos from 'aos';
import 'aos/dist/aos.cjs';


const Middle = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className='middle section'>
      <div className="secContainer container">
        <div className="grid">

          <span className="flex" data-aos="fade-up">
            <h2>10+</h2>
            <p>Años de Experiencia</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h2>2k+</h2>
            <p>Asesorias Impartidas</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h2>10k+</h2>
            <p>Opiniones de clientes</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h2>4.8</h2>
            <p>Valoración global</p>
          </span>

        </div>
      </div>
    </div>
  )
}

export default Middle