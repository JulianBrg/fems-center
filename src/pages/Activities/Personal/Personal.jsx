import Footer from '../../../components/Footer/Footer';
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
// SEO
import { Helmet } from 'react-helmet'
// IMAGES
import Img from '../../../assets/personal.webp'
import Img2 from '../../../assets/dp2.webp'
import Img3 from '../../../assets/dp3.webp'
import Img4 from '../../../assets/dp4.webp'
import Img5 from '../../../assets/dp5.webp'
import Img6 from '../../../assets/dp6.webp'
import Img7 from '../../../assets/dp7.webp'
import Img8 from '../../../assets/dp8.webp'
import Img9 from '../../../assets/dp9.webp'

const sliders = [
    {
        id: 1.1,
        title: '¡Descubre tu mejor versión con nuestras actividades de desarrollo personal!',
        description: 'En nuestro espacio acogedor y enriquecedor, te ofrecemos la oportunidad de crecer, aprender y transformarte. ',
        image: Img
    },
    {
        id: 2,
        title: 'Astrología China',
        description: 'Aprende los secretos de la astrología china, sus 12 signos, sus 5 elementos y su influencia en tu destino. Un curso práctico y fascinante para conocerte mejor.',
        image: Img2
    },
    {
        id: 3,
        title: 'LOTERIA!',
        description: 'Participa en la lotería para apoyar a Ambar y gana bonitos regalos. Solo tienes que comprar tu boleto y esperar el sorteo. ¡No te lo pierdas!',
        image: Img3
    },
    {
        id: 4,
        title: 'El diá más romántico del año',
        description: 'Regala a tu pareja un momento de relax y amor en nuestro spa. Disfruta de masajes y tratamientos especiales para San Valentín. ¡Reserva ya!',
        image: Img4
    },
    {
        id: 5,
        title: 'Promociones Spa',
        description: 'Disfruta de un día de spa con promociones increíbles. Masajes, faciales, envolventes, hidroterapia y más. Relájate, renuévate y ahorra con nuestros paquetes. ¡Agenda tu cita hoy!',
        image: Img5
    },
    {
        id: 6,
        title: 'Recaudación Dental',
        description: 'Apoya a Ambar Darian, una niña con un tumor cerebral, y cuida tu salud dental. Servicio dental con precios accesibles y calidad profesional. ¡Llama y agenda tu cita!',
        image: Img6
    },
    {
        id: 7,
        title: 'Servicio al 2x1',
        description: 'Aprovecha el servicio 2x1 en servicio dental y psicológico. Cuida tu salud bucal y emocional con profesionales calificados y precios accesibles. ¡No dejes pasar esta oportunidad!',
        image: Img7
    },
    {
        id: 8,
        title: 'Cuida de ti',
        description: 'Celebra el amor con una sonrisa radiante. Aprovecha nuestro paquete de San Valentín y obtén un descuento. ¡Llama ya!',
        image: Img8
    },
    {
        id: 9,
        title: 'Gran rifa NEMAS',
        description: '¿Quieres sorprender a tu pareja con un regalo original? Participa en nuestra rifa de San Valentín y gana una cosmetiquera y una billetera de piel. ¡Apúntate ya!',
        image: Img9
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
                    Actividades Personales
                </h1>
                <h2 data-aos="fade-down">Actividades</h2>
                <p data-aos="fade-down">"Se una persona versátil y comprometida, lista para desafíos."</p>
            </div>

            <Swiper
                autoplay={{
                    delay: 90000,
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