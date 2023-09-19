import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Services.css'
// Imported icons
import { BiSearchAlt, BiUser } from 'react-icons/bi'
//Imported images
import image2 from '../../assets/img2.webp'
import image3 from '../../assets/img3.webp'
import image1 from '../../assets/img1.webp'
import image4 from '../../assets/img4.webp'
import image5 from '../../assets/img4-1.webp'
import image6 from '../../assets/img4-2.webp'
import image7 from '../../assets/img4-3.webp'
import image8 from '../../assets/img4-4.webp'
import image9 from '../../assets/img8.webp'
// animation
import Aos from 'aos';
import 'aos/dist/aos.cjs';
import Footer from '../../components/Footer/Footer'

// Lets create an array that is gonna contain all destination data an we loop through
const professionals = [
    {
        id: 1,
        img: image1,
        name: 'Dra. Sagrario Aguilar',
        description: 'Dentista',
        rating: 4.9,
    },
    {
        id: 2,
        img: image2,
        name: 'Lft. Zamira Carrea Rodriguez',
        description: 'Fisioterapeuta',
        rating: 4.9,
    },
    {
        id: 3,
        img: image3,
        name: 'Lnc. Yerenci G. Menchaca',
        description: 'Nutriologa',
        rating: 4.9,
    },
    {
        id: 4,
        img: image4,
        name: 'Stylist. Ale Amieva',
        description: 'Belleza y Maquillaje',
        rating: 4.9,
    },
    {
        id: 5,
        img: image5,
        name: 'Lic. Nohemi Nava',
        description: 'Psicologa',
        rating: 4.9,
    },
    {
        id: 6,
        img: image6,
        name: 'Aida Cancino',
        description: 'Healting Coach - Yoga',
        rating: 4.9,
    },
    {
        id: 7,
        img: image7,
        name: 'Mirna Maron',
        description: 'Coach Workout',
        rating: 4.9,
    },
    {
        id: 9,
        img: image9,
        name: '',
        description: '',
        rating: 4.9,
    },
    {
        id: 10,
        img: image9,
        name: '',
        description: '',
        rating: 4.9,
    },
    {
        id: 11,
        img: image9,
        name: '',
        description: '',
        rating: 4.9,
    },
    {
        id: 12,
        img: image9,
        name: '',
        description: '',
        rating: 4.9,
    },
    {
        id: 13,
        img: image9,
        name: '',
        description: '',
        rating: 4.9,
    },
    {
        id: 14,
        img: image9,
        name: '',
        description: '',
        rating: 4.9,
    },
    {
        id: 15,
        img: image9,
        name: '',
        description: '',
        rating: 4.9,
    },
    {
        id: 16,
        img: image9,
        name: '',
        description: '',
        rating: 4.9,
    },
    {
        id: 17,
        img: image9,
        name: '',
        description: '',
        rating: 4.9,
    },
]


const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);


    return (
        <>
            <Navbar />
            <div className='professionals section container'>
                <div className="secContainer">

                    <div className="secTitle" data-aos="fade-up">
                        <span className="redText">
                            Servicios y Productos
                        </span>
                        <h3>Conoce los servicios y productos de nuestras socias</h3>
                        {/* <p>Conoce los servicios y productos de nuestras socias.</p> */}
                    </div>

                    <div className="searchField grid">
                        <div className="inputField flex" data-aos="fade-up">
                            <BiUser className="icon" />
                            <input type="text" placeholder='Profesional' />
                        </div>

                        <button className='btn flex' data-aos="fade-up">
                            <BiSearchAlt /> Buscar
                        </button>
                    </div>

                    <div className="secMenu">
                        <ul className="flex" data-aos="fade-up">
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
            <Footer />
        </>
    )
}

export default Services