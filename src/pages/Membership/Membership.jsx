import React, { useEffect } from 'react'
import "./Membership.css"
// imports assets
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
// animation
import Aos from 'aos';
import 'aos/dist/aos.css';

const Membership = () => {

    useEffect(() => {
        Aos.init({ duration: 2500 });
    }, []);

    return (
        <>
            <Navbar />
            <div className='membership section container'>
                <div className="secTitle" >
                    <span className="redText" data-aos="fade-down">
                        Servicios y Productos
                    </span>
                    <h3 data-aos="fade-down">Conoce los servicios y productos de nuestras socias</h3>
                    {/* <p>Conoce los servicios y productos de nuestras socias.</p> */}
                </div>

                <div className="pricing">
                    <div className="card-wrapper">
                        {/* card hearder */}
                        <div className='card-header' >
                            <img src={img1} alt="Image 1" />
                            <h2>FEMpresaria</h2>
                        </div>
                        {/* card details */}
                        <div className="card-detail" >
                            <p><span className='fas fa-check check'></span><b>1</b> full user</p>
                            <p><span className='fas fa-check check'></span><b>5</b> contact per client</p>
                            <p><span className='fas fa-times nocheck'></span>Lorem, ipsum dolor.</p>
                            <p><span className='fas fa-times nocheck'></span>Lorem, ipsum dolor.</p>
                        </div>
                        {/* card price */}
                        <div className="card-price" >
                            <p><sup>$ </sup><sup className='num'>2400</sup>/mensuales</p>
                        </div>
                        {/* button */}
                        <button className='btn card-button' >Contratar</button>
                    </div>

                    <div className="card-wrapper">
                        {/* card hearder */}
                        <div className='card-header'>
                            <img src={img2} alt="img2" />
                            <h2>FEMprendedora</h2>
                        </div>
                        {/* card details */}
                        <div className="card-detail">
                            <p><span className='fas fa-check check'></span><b>1</b> full user</p>
                            <p><span className='fas fa-check check'></span><b>5</b> contact per client</p>
                            <p><span className='fas fa-times nocheck'></span>Lorem, ipsum dolor.</p>
                            <p><span className='fas fa-times nocheck'></span>Lorem, ipsum dolor.</p>
                        </div>
                        {/* card price */}
                        <div className="card-price">
                            <p><sup>$ </sup><sup className='num'>500</sup>/mensuales</p>
                        </div>
                        {/* button */}
                        <button className='btn card-button'>Contratar</button>
                    </div>

                    <div className="card-wrapper">
                        {/* card hearder */}
                        <div className='card-header'>
                            <img src={img3} alt="img3" />
                            <h2>FEMotiva</h2>
                        </div>
                        {/* card details */}
                        <div className="card-detail">
                            <p><span className='fas fa-check check'></span><b>1</b> full user</p>
                            <p><span className='fas fa-check check'></span><b>5</b> contact per client</p>
                            <p><span className='fas fa-times nocheck'></span>Lorem, ipsum dolor.</p>
                            <p><span className='fas fa-times nocheck'></span>Lorem, ipsum dolor.</p>
                        </div>
                        {/* card price */}
                        <div className="card-price">
                            <p><sup>$ </sup><sup className='num'>300</sup>/anuales</p>
                        </div>
                        {/* button */}
                        <button className='btn card-button'>Contratar</button>
                    </div>

                    <div className="card-wrapper">
                        {/* card hearder */}
                        <div className='card-header'>
                            <img src={img4} alt="img3" />
                            <h2>FEMaliada</h2>
                        </div>
                        {/* card details */}
                        <div className="card-detail">
                            <p><span className='fas fa-check check'></span><b>1</b> full user</p>
                            <p><span className='fas fa-check check'></span><b>5</b> contact per client</p>
                            <p><span className='fas fa-times nocheck'></span>Lorem, ipsum dolor.</p>
                            <p><span className='fas fa-times nocheck'></span>Lorem, ipsum dolor.</p>
                        </div>
                        {/* card price */}
                        <div className="card-price">
                            <p><sup>$ </sup><sup className='num'>1000</sup>/anuales</p>
                        </div>
                        {/* button */}
                        <button className='btn card-button'>Contratar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Membership