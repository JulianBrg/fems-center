import { useEffect } from 'react';
import Footer from '../../../components/Footer/Footer'
// animation
import Aos from 'aos';
// SEO
import { Helmet } from 'react-helmet'
// Gallery
import photos from "./photos";

const Gallery = () => {

    // const photos = [
    //     { src: "/src/assets/spaces/1.webp", width: 800, height: 600 },
    //     { src: "/src/assets/spaces/2.webp", width: 1600, height: 900 },
    // ];

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <>
            <Helmet>
                <title>Galería FEMS - Fems Center Tehuacán</title>
                <meta
                    property="description"
                    content="Fems Center con en instalaciones diseñadas con espacios adecuados para la exhibición, venta y promoción de productos."
                />
                <link rel="canonical" href="https://femscenter.com/servicios/FEMS" />
            </Helmet>


            <div className='gallery section container'>
                <div className="secContainer">
                    <div className="secTitle" data-aos="fade-up">
                        <h1 className="redText">
                            Galería Fems Center
                        </h1>
                        <h2>Fotos</h2>
                        <p>Conoce un poco de nuestra trayectoria</p>
                    </div>
                </div>

                <div className="secContainer">
                    
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Gallery