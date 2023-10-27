import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// // import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// animation
import Aos from 'aos';


import { Helmet } from 'react-helmet';

import Img1 from '../../../assets/professional1.webp';
import Img2 from '../../../assets/professional2.webp';
import Img3 from '../../../assets/professional3.webp';
import Img4 from '../../../assets/professional4.webp';
import Footer from '../../../components/Footer/Footer';

const sliders = [
    {
        id: 1,
        title: '¡Potencia tu carrera con nuestras actividades de desarrollo profesional!',
        description: 'En nuestro entorno dinámico y enriquecedor, te ofrecemos la oportunidad de adquirir nuevas habilidades, avanzar en tu carrera y alcanzar tus metas laborales.',
        image: Img1
    },
    {
        id: 2,
        title: '"Aprende a costear tus productos"',
        description: 'Te sumergirás en el arte de calcular los costos de producción y determinar precios competitivos para tus productos o servicios ademas de comprender cómo estos afectan tus márgenes de ganancia.',
        image: Img2
    },
    {
        id: 3,
        title: 'Title 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quidem et iusto beatae perspiciatis aliquid tenetur sit natus tempore!',
        image: Img3
    },
    {
        id: 4,
        title: 'Title 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quidem et iusto beatae perspiciatis aliquid tenetur sit natus tempore!',
        image: Img4
    },
]


const Professional = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <>
            <Helmet>
                <title>Actividades | Profesionales</title>
                <meta
                    property="description"
                    content="Explora las actividades profesionales que ofrecemos"
                />
            </Helmet>

            <div className="secTitle container" >
                <h1 className="redText" data-aos="fade-down">
                    Actividades
                </h1>
                <h2 data-aos="fade-down">Actividades</h2>
                <p data-aos="fade-down">"Se una persona versátil y comprometida, lista para desafíos."</p>
            </div>

            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[
                    Autoplay,
                    Pagination,
                    Navigation,
                ]}
                className="mySwiper"
            >
                {
                    sliders.map((slider) => (
                        <SwiperSlide key={slider.id}>
                            <div className='content'>
                                <div className="image">
                                    <img src={slider.image} alt="1" />
                                </div>
                                <div className="info">
                                    <h2>{slider.title}</h2>
                                    <p>{slider.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Footer />
        </>
    )
}

export default Professional