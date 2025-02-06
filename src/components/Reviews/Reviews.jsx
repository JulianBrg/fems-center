import React, { useEffect } from 'react'
import './Reviews.scss'
// imported icons
import StarIcon from '@mui/icons-material/Star';

// imported images
import image1 from '../../assets/avatar1.webp'
import image2 from '../../assets/avatar2.webp'
import image3 from '../../assets/avatar3.webp'
import image4 from '../../assets/avatar4.webp'
import image5 from '../../assets/img5.webp'
// animation
import Aos from 'aos';

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
                        <StarIcon className="icon" />
                        <StarIcon className="icon" />
                        <StarIcon className="icon" />
                        <StarIcon className="icon" />
                        <StarIcon className="icon" />
                    </span>

                    <div className="clientsImages flex" data-aos="fade-up">
                        <img src={image1} alt="Avatar Image 1" title='Avatar Image 1' loading="lazy" />
                        <img src={image2} alt="Avatar Image 2" title='Avatar Image 2' loading="lazy" />
                        <img src={image3} alt="Avatar Image 3" title='Avatar Image 3' loading="lazy" />
                        <img src={image4} alt="Avatar Image 4" title='Avatar Image 4' loading="lazy" />
                    </div>
                </div>

                <div className="imgDiv" data-aos="fade-up">
                    <img src={image5} alt="Image" title='Clientas'/>
                    {/* <div>
                        <iframe width="370" height="315" src="https://www.youtube.com/embed/fOW8Y09GVek?si=Wvzpd8oza16ZVmEC" title="Nuestras Clientas" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Reviews