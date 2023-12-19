import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Styles import
import './Personal.scss'

// animation
import Aos from 'aos';


import { Helmet } from 'react-helmet'
import Img1 from '../../../assets/personal1.webp'
import Img2 from '../../../assets/personal2.webp'
import Img3 from '../../../assets/personal3.webp'
import Img4 from '../../../assets/personal4.webp'
import Img5 from '../../../assets/personal5.webp'
import Footer from '../../../components/Footer/Footer';

const sliders = [
    {
        id: 1,
        title: '¡Descubre tu mejor versión con nuestras actividades de desarrollo personal!',
        description: 'En nuestro espacio acogedor y enriquecedor, te ofrecemos la oportunidad de crecer, aprender y transformarte. ',
        image: Img1
    },
    {
        id: 2,
        title: 'Iluminando memorias de infancia.',
        description: 'En este fascinante tema, exploraremos juntos los momentos que forjaron nuestra identidad y dejaron una huella imborrable en nuestro corazón. A través de conversaciones emotivas, fotografías, anécdotas y reflexiones, reviviremos esos instantes mágicos que moldearon nuestra visión del mundo.',
        image: Img2
    },
    {
        id: 3,
        title: 'Circulo de hombres: Nuestro masculino herido.',
        description: 'En este tema, examinaremos cómo las expectativas tradicionales de masculinidad, que a menudo promueven la fortaleza a expensas de la vulnerabilidad, han dejado una herida en el ser masculino.',
        image: Img3
    },
    {
        id: 4,
        title: 'Certificación Internacional de Barra de Access',
        description: 'En esta certificación se te enseñara a activar 32 puntos en la cabeza que liberan la energía bloqueada por pensamientos, emociones, creencias y juicios.',
        image: Img4
    },
    {
        id: 5,
        title: 'Aprende a liberar tus emociones de forma sana',
        description: 'En este taller, podrás usar técnicas como la meditación, la respiración consciente, el autoconocimiento y la aceptación para liberar la energía bloqueada en tu cuerpo y mente, y así lograr un mayor equilibrio y bienestar. ',
        image: Img5
    },
]

const Personal = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <>
            <Helmet>
                <title>Actividades Personales - Fems Center Tehuacán</title>
                <meta
                    property="description"
                    content="Explora y participa en talleres, charlas, cursos y eventos que te ayudarán a desarrollar tus habilidades personales y profesionales."
                />
                <link rel="canonical" href="https://femscenter.com/actividades/personales" />
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
                                    <img src={slider.image} alt={slider.title} title={slider.title} />
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

export default Personal