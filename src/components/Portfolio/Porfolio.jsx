import React, { useEffect } from 'react'
import './Portfolio.scss'
// import assets
import icon1 from '../../assets/comunidad.webp'
import icon2 from '../../assets/infraestructura.webp'
import icon3 from '../../assets/recursos.webp'
import image from '../../assets/Infographic.webp'
// animation
import Aos from 'aos';

const Porfolio = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])


  return (
    <div className='portfolio section container'>
      <div className="secContainer grid">
        <div className="leftContainer">
          <div className="secHeading" data-aos="fade-up">
            <h3>Por qué elegirnos</h3>
            <p>
              Tenemos amplios conocimientos y experiencia en el sector.
            </p>
          </div>

          <div className="grid">
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon1} alt="icon image" />
              </div>
              <div className="infor">
                <h4>Comunidad Empresarial.</h4>
                <p>
                  Fems Center te permite formar parte de una comunidad empresarial activa y colaborativa.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon2} alt="icon image" />
              </div>
              <div className="infor">
                <h4>Infraestructura y Espacios de Trabajo</h4>
                <p>
                  Aquí encontraras espacios de trabajo compartidos, oficinas equipadas y acceso a tecnología de vanguardia.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon3} alt="icon image" />
              </div>
              <div className="infor">
                <h4>Recursos y Apoyo Especializado</h4>
                <p>
                  Ofrecemos una amplia gama de recursos y servicios diseñados específicamente para ayudar a las emprendedoras a tener éxito.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContainer" data-aos="fade-up">
          <img src={image} alt="Infographic" />
        </div>
      </div>
    </div>
  )
}

export default Porfolio