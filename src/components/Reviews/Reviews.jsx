import React, { useEffect } from 'react'
import './Reviews.css'
// imported icons
import { AiFillStar } from 'react-icons/ai'
// imported images
import image1 from '../../assets/avatar1.jpg'
import image2 from '../../assets/avatar2.jpg'
import image3 from '../../assets/avatar3.jpg'
import image4 from '../../assets/avatar4.jpg'
import image5 from '../../assets/img5.webp'
// animation
import Aos from 'aos';
import 'aos/dist/aos.cjs';

const Reviews = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <div className='review section container'>
            <div className="secContainer grid">
                <div className="textDiv">
                    <span className="redText" data-aos="fade-up">
                        DE NUESTROS CLIENTES
                    </span>
                    <h3 data-aos="fade-up">
                        Historia real de una de nuestras queridas clientas
                    </h3>
                    <p data-aos="fade-up">
                        Fems Center desempeñó un papel fundamental en mi camino hacia el éxito. Desde el primer día que me acerqué a sus puertas, encontré un ambiente cálido y acogedor, lleno de personas dedicadas a ayudar y motivar.
                    </p>
                    <span className="stars flex" data-aos="fade-up">
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                    </span>

                    <div className="clientsImages flex" data-aos="fade-up">
                        <img src={image1} alt="Avatar Image" />
                        <img src={image2} alt="Avatar Image" />
                        <img src={image3} alt="Avatar Image" />
                        <img src={image4} alt="Avatar Image" />
                    </div>
                </div>

                <div className="imgDiv" data-aos="fade-up">
                    <img src={image5} alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default Reviews