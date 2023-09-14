import React from 'react'
import './Professionals.css'
// Imported icons
import { BiSearchAlt, BiUser } from 'react-icons/bi'
//Imported images
import image2 from '../../assets/img2.webp'
import image3 from '../../assets/img3.webp'
import image1 from '../../assets/img1.webp'
import image4 from '../../assets/img4.webp'
import image5 from '../../assets/img4-1.webp'

// Lets create an array that is gonna contain all destination data an we loop through
const professionals = [
  {
    id: 1,
    img: image1,
    name: 'Dds. Sagrario Aguilar',
    description: 'Espacialista en limpieza bucal',
    rating: 4.9,
  },
  {
    id: 2,
    img: image2,
    name: 'Ft. Zamira Carrea Rodriguez',
    description: 'Lorem ipsum',
    rating: 4.9,
  },
  {
    id: 3,
    img: image3,
    name: 'Nut. Yerenci G. Menchaca',
    description: 'Dietas y ejercicio',
    rating: 4.9,
  },
  {
    id: 4,
    img: image4,
    name: 'Stylist. Atenea Natividad',
    description: 'Masajista corporal',
    rating: 4.9,
  },
  {
    id: 5,
    img: image5,
    name: 'Dra. Atenea Natividad',
    description: 'Masajista corporal',
    rating: 4.9,
  },
]

const Professionals = () => {
  return (
    <div className='professionals section container'>
      <div className="secContainer">

        <div className="secTitle">
          <span className="redText">
            Áreas
          </span>
          <h3>Conoce a nuestros profesionales</h3>
          <p>Conoce los servicios de nuestras socias.</p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <BiUser className="icon" />
            <input type="text" placeholder='Profesional' />
          </div>

          <button className='btn flex'>
            <BiSearchAlt /> Buscar
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex">
            <li className="active">Todos</li>
            <li>Dentista</li>
            <li>Fisioterapeuta</li>
            <li>Nutriologa</li>
            <li>Masajista</li>
          </ul>
        </div>

        <div className="professionalsContainer grid">
          {
            professionals.map((professional) => {
              return (
                <div className="singleDestination" key={professional.id}>
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