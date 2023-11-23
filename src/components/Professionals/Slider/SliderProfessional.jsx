import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// animation
import Aos from 'aos';
// datos
import data from '../../../data/data'


const SliderProfessional = () => {

    let dataNew = data.slice(0, 14)

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <div className="section container">
            <div className="secContainer">
                <div className="secTitle" data-aos="fade-up">
                    <span className="redText">
                        Áreas
                    </span>
                    <h3>Conoce a nuestros profesionales</h3>
                    <p>Conoce los servicios de nuestras socias.</p>
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
                        dataNew.map((slider) => (
                            <SwiperSlide key={slider.id}>
                                <div className='content'>
                                    <div className="image">
                                        <img src={slider.img} alt={slider.name} title={slider.name} />
                                    </div>
                                    <div className="info">
                                        <h2>{slider.name}</h2>
                                        <p>{slider.description}</p>
                                        <ul className="products">
                                            {
                                                slider.productos.map((producto, index) => {
                                                    return (
                                                        <li key={index}>{producto}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default SliderProfessional