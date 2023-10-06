import { useEffect } from "react"
import "./Activities.scss"
import Navbar from '../../components/Navbar/Navbar'
import { Helmet } from 'react-helmet'
import Footer from "../../components/Footer/Footer"

import showroom from '../../assets/showroom.webp'
import coworking from '../../assets/coworking.webp'
import Aos from 'aos';

const Activities = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <>
            <Helmet>
                <title>Actividades | Fems Center</title>
                <meta
                    property="description"
                    content="Explora las actividades que ofrecemos"
                />
            </Helmet>

            <Navbar />
            <div className='Activities'>
                <div className="videoBg">
                    <img src={showroom} alt="background" />
                </div>

                <div className="sectionText">
                    <h1 data-aos="fade-down">Actividades de desarrollo profesional</h1>
                    {/* <h2 data-aos="fade-down">Es tu momento de crecer</h2> */}
                    <p data-aos="fade-down">Exhibición y venta de productos de emprendedoras locales. Skincare, moda, belleza, artesanías, bolsos, joyería, accesorios, artículos de regalo y productos para toda la familia.</p>

                    <div data-aos="fade-down">
                        <a
                            href="https://www.facebook.com/femsenaccion"
                            target="_blank"
                            title='verMas'
                        >
                            <button className="btn">Ver más</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='Activities'>
                <div className="videoBg">
                    <img src={coworking} alt="background" />
                </div>

                <div className="sectionText">
                    <h1 data-aos="fade-down">Actividades de desarrollo personal</h1>
                    {/* <h2 data-aos="fade-down">Es tu momento de </h2> */}
                    <p data-aos="fade-down">Espacios de trabajos compartidos que se ofrecen a profesionales de servicios de la salud física, emocional, bienestar, profesionales de marketing, de comunicación, entre otros.</p>

                    <div data-aos="fade-down">
                        <a
                            href="https://www.facebook.com/femsenaccion"
                            target="_blank"
                            title='verMas'
                        >
                            <button className="btn">Ver más</button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Activities