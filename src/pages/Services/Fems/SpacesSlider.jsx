import { useState } from 'react';
import './SpacesSlider.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// images swiper
import img1 from "../../../assets/spaces/1.webp"
import img2 from "../../../assets/spaces/2.webp"
import img3 from "../../../assets/spaces/3.webp"
import img4 from "../../../assets/spaces/4.webp"
import img5 from "../../../assets/spaces/5.webp"
import img6 from "../../../assets/spaces/6.webp"
import img7 from "../../../assets/spaces/7.webp"
import img8 from "../../../assets/spaces/8.webp"
import img9 from "../../../assets/spaces/9.webp"
import img10 from "../../../assets/spaces/10.webp"
import img11 from "../../../assets/spaces/11.webp"
import img12 from "../../../assets/spaces/12.webp"
import img13 from "../../../assets/spaces/13.webp"
import img14 from "../../../assets/spaces/14.webp"
import img15 from "../../../assets/spaces/15.webp"
import img16 from "../../../assets/spaces/16.webp"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

const SpacesSlider = () => {
    return (
        <div className='spaces'>
            <Swiper
                loop={true}
                zoom={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Zoom, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img1} alt="Sala Fems Center" title="Sala Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img2} alt="Yoga" title="Yoga Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img3} alt="Yoga 2" title="Yoga 2 Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img4} alt="Fisioterapia" title="Fisioterapia Fems center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img5} alt="Fisioterapia 2" title="Fisioterapia 2 Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img6} alt="Dental" title="Dental Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img7} alt="Capacitación" title="Capacitación Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img8} alt="Nutrición" title="Nutrición Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img9} alt="Sala de espera Spa" title="Sala de espera Spa" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img10} alt="Spa" title="Spa Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img11} alt="Spa 2" title="Spa 2 Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img12} alt="Spa 3" title="Spa 3 Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img13} alt="Temazcal" title="Temazcal Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img14} alt="Temazcal 2" title="Temazcal 2 Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img15} alt="Temazcal 2" title="Temazcal 2 Fems Center" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={img16} alt="Temazcal 2" title="Temazcal 2 Fems Center" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SpacesSlider