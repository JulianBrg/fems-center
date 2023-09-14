import React from 'react'
import './Reviews.css'
// imported icons
import { AiFillStar } from 'react-icons/ai'
// imported images
import image1 from '../../assets/avatar1.jpg'
import image2 from '../../assets/avatar2.jpg'
import image3 from '../../assets/avatar3.jpg'
import image4 from '../../assets/avatar4.jpg'
import image5 from '../../assets/img5.webp'

const Reviews = () => {
    return (
        <div className='review section container'>
            <div className="secContainer grid">
                <div className="textDiv">
                    <span className="redText">
                        DE NUESTROS CLIENTES
                    </span>
                    <h3>
                        Historia real de nuestros queridos clientes
                    </h3>
                    <p>
                        Fems Center desempeñó un papel fundamental en mi camino hacia el éxito. Desde el primer día que me acerqué a sus puertas, encontré un ambiente cálido y acogedor, lleno de personas dedicadas a ayudar y motivar.
                    </p>
                    <span className="stars flex">
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                    </span>

                    <div className="clientsImages flex">
                        <img src={image1} alt="Avatar Image" />
                        <img src={image2} alt="Avatar Image" />
                        <img src={image3} alt="Avatar Image" />
                        <img src={image4} alt="Avatar Image" />
                    </div>
                </div>

                <div className="imgDiv">
                    <img src={image5} alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default Reviews