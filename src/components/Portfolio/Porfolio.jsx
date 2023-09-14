import React from 'react'
import './Portfolio.css'
// import assets
import icon1 from '../../assets/relacion.png'
import icon2 from '../../assets/destino.png'
import icon3 from '../../assets/burbuja-de-dialogo.png'
import image from '../../assets/Infographic.png'

const Porfolio = () => {
  return (
    <div className='portfolio section container'>
      <div className="secContainer grid">
        <div className="leftContainer">
          <div className="secHeading">
            <h3>Por qué elegirnos</h3>
            <p>
              Tenemos amplios conocimientos y experiencia en el sector.
            </p>
          </div>

          <div className="grid">
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="icon image" />
              </div>
              <div className="infor">
                <h4>Safety and support</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum dolore libero laboriosam? Aliquid cum, unde quam itaque eveniet nam.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon2} alt="icon image" />
              </div>
              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum dolore libero laboriosam? Aliquid cum, unde quam itaque eveniet nam.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon3} alt="icon image" />
              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum dolore libero laboriosam? Aliquid cum, unde quam itaque eveniet nam.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContainer">
          <img src={image} alt="Infographic" />
        </div>
      </div>
    </div>
  )
}

export default Porfolio