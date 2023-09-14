import React from 'react'
import './Suscribe.css'
// import images
import image from '../../assets/ladyCalling.png';

const Suscribe = () => {
  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={image} alt="Image div" />
        <div className="textDiv">
          <h4>
            La mejor manera de empezar desarrollar tu potencial
          </h4>
          <p>
            Ofrecemos itinerarios personalizados adaptados a las preferencias e intereses individuales.
          </p>
          <button className='btn'>Empieza aquí</button>
        </div>
      </div>
    </div>
  )
}

export default Suscribe