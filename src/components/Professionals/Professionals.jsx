import React, { useEffect } from 'react'
import './Professionals.scss'
//Imported images
import image2 from '../../assets/img2.webp'
import image3 from '../../assets/img3.webp'
import image1 from '../../assets/img1.webp'
import image4 from '../../assets/img4.webp'
import image5 from '../../assets/img4-1.webp'
import image6 from '../../assets/img4-2.webp'
import image7 from '../../assets/img4-3.webp'
import image8 from '../../assets/img4-4.webp'
// animation
import Aos from 'aos';
import 'aos/dist/aos.cjs';

// Lets create an array that is gonna contain all destination data an we loop through
const professionals = [
  {
    id: 1,
    img: image1,
    name: 'Dra. Sagrario Aguilar',
    description: 'Dentista',
    rating: '4.9⭐',
  },
  {
    id: 2,
    img: image2,
    name: 'Lft. Zamira Carrera Rodriguez',
    description: 'Fisioterapeuta',
    rating: '4.9⭐',
  },
  {
    id: 3,
    img: image3,
    name: 'Lnc. Yerenci G. Menchaca',
    description: 'Nutrióloga',
    rating: '4.9⭐',
  },
  {
    id: 4,
    img: image4,
    name: 'Stylist. Ale Amieva',
    description: 'Belleza y Maquillaje',
    rating: '4.9⭐',
  },
  {
    id: 5,
    img: image5,
    name: 'Lic. Nohemi Nava',
    description: 'Psicóloga',
    rating: '4.9⭐',
  },
  {
    id: 6,
    img: image6,
    name: 'Aida Cancino',
    description: 'Healting Coach - Yoga',
    rating: '4.9⭐',
  },
  {
    id: 7,
    img: image7,
    name: 'Mirna Marón',
    description: 'Coach Workout',
    rating: '4.9⭐',
  },
  {
    id: 8,
    img: image8,
    name: 'Psic. Silvia Lezama',
    description: 'Psicóloga',
    rating: '4.9⭐',
  },
]

const Professionals = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])


  return (
    <div className='professionals section container'>
      <div className="secContainer">

        <div className="secTitle" data-aos="fade-up">
          <span className="redText">
            Áreas
          </span>
          <h3>Conoce a nuestros profesionales</h3>
          <p>Conoce los servicios de nuestras socias.</p>
        </div>

        <div className="professionalsContainer grid">
          {
            professionals.map((professional) => {
              return (
                <div className="singleDestination" key={professional.id} data-aos="fade-up">
                  <div className="imgDiv">
                    <img src={professional.img} alt={professional.name} />
                    <div className="descInfo flex">
                      <div className="text">
                        <span className="name">
                          {professional.name}
                        </span>
                        <p className='flex'>
                          {professional.description}
                        </p>
                      </div>
                      <span className="rating">
                        {professional.rating}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Professionals