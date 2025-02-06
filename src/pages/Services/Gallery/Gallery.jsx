import { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer'
// animation
import Aos from 'aos';
// SEO
import { Helmet } from 'react-helmet-async';
// Gallery
import photos from "./photos";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const Gallery = () => {

    const [index, setIndex] = useState(-1);

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <>
            <Helmet>
                <title>Galería FEMS</title>
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
                    <PhotoAlbum layout="columns" photos={photos} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
                    <Lightbox
                        slides={photos}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        // enable optional lightbox plugins
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Gallery