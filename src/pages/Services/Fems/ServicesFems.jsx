import './ServicesFems.scss'
import { useEffect } from 'react';
import Footer from '../../../components/Footer/Footer'
// animation
import Aos from 'aos';
// SEO
import { Helmet } from 'react-helmet-async';
import SpacesSlider from './SpacesSlider';

const ServicesFems = () => {

    const showroom = "https://api.whatsapp.com/send?phone=5212381680876&text=Hola.%0AMe%20gustar%C3%ADa%20ser%20parte%20del%20Showroom%20%F0%9F%98%80";

    const coworking = "https://api.whatsapp.com/send?phone=5212381680876&text=Hola.%0AMe%20gustar%C3%ADa%20ser%20parte%20del%20Coworking%20%F0%9F%98%80";

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <>
            <Helmet>
                <title>Servicios FEMS</title>
                <meta
                    property="description"
                    content="Fems Center con en instalaciones diseñadas con espacios adecuados para la exhibición, venta y promoción de productos."
                />
                <link rel="canonical" href="https://femscenter.com/servicios/FEMS" />
            </Helmet>

            <div className='fems section container'>
                {/* <div className="secContainer"> */}
                    <div className="secTitle" data-aos="fade-up">
                        <h1 className="redText">
                            Servicios Fems Center
                        </h1>
                        <h2>Servicios de salud y bienestar y una amplia variedad de productos </h2>
                        <p>Fems Center es una plataforma de crecimiento en instalaciones diseñadas con espacios adecuados para la exhibición, venta y promoción de productos de emprendedoras locales, así como de servicios profesionales para la atención de sus clientes o pacientes.</p>
                    </div>
                {/* </div> */}
            </div>

            <div className='services-fems'>
                <div className="showroom" data-aos="fade-up">
                    <div className="sectionText" data-aos="fade-up">
                        <h2>Showroom</h2>
                        <p>Un espacio para exhibición, punto de venta y entrega de productos de emprendedoras locales</p>
                        <a className='btn' target='_blank' href={showroom}>Contratar</a>
                    </div>
                </div>
                <div className="coworking" data-aos="fade-up">
                    <div className="sectionText" data-aos="fade-up">
                        <h2>Coworking</h2>
                        <p>Espacios de trabajo compartidos para profesionales de servicios empresariales de salud y bienestar</p>
                        <a className='btn' target='_blank' href={coworking}>Contratar</a>
                    </div>
                </div>
            </div>

            <div className='fems section container'>
                <div className="secContainer">
                    <div className="secTitle" data-aos="fade-up">
                        <h1 className="redText">
                            Espacios Fems Center
                        </h1>
                        <h2>Conoce nuestras instalaciones</h2>
                    </div>
                </div>
            </div>
            <SpacesSlider />

            <Footer />
        </>
    )
}

export default ServicesFems