import React, { useEffect } from 'react'
import "./Membership.css"
// imports assets
import img1 from '../../assets/1.webP'
import img2 from '../../assets/2.webP'
import img3 from '../../assets/3.webP'
import img4 from '../../assets/4.webP'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
// animation
import Aos from 'aos';
import 'aos/dist/aos.css';
// icons
import { FaCheck, FaTimes } from 'react-icons/fa'

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
                        Membresias
                    </span>
                    <h3 data-aos="fade-down">Adquiere una membresia</h3>
                    <p data-aos="fade-down">Forma parte del equipo Fems</p>
                </div>

                <div className="pricing">
                    {/* FEMEMPRESARIA */}
                    <div className="card-wrapper">
                        {/* card hearder */}
                        <div className='card-header' >
                            <img src={img1} alt="Image 1" />
                            <h2>FEMpresaria</h2>
                        </div>
                        {/* card details */}
                        <div className="card-detail" >
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Uso de espacios</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Publicidad</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Precios preferenciales</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Uso de espacios para eventos y activaciones</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-times check'>
                                    <FaCheck />
                                </span>
                                <p>Ser parte del directorio</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-times nocheck'>
                                    <FaTimes />
                                </span>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        {/* card price */}
                        <div className="card-price" >
                            <p><sup>$ </sup><sup className='num'>2400</sup>/mensuales</p>
                        </div>
                        {/* button */}
                        <button className='btn card-button' >Contratar</button>
                    </div>

                    {/* FEMemprendedora */}
                    <div className="card-wrapper">
                        {/* card hearder */}
                        <div className='card-header'>
                            <img src={img2} alt="img2" />
                            <h2>FEMprendedora</h2>
                        </div>
                        {/* card details */}
                        <div className="card-detail" >
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Uso de espacios</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Publicidad</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Precios preferenciales</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Uso de espacios para eventos y activaciones</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-times check'>
                                    <FaCheck />
                                </span>
                                <p>Ser parte del directorio</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-times nocheck'>
                                    <FaTimes />
                                </span>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        {/* card price */}
                        <div className="card-price">
                            <p><sup>$ </sup><sup className='num'>500</sup>/mensuales</p>
                        </div>
                        {/* button */}
                        <button className='btn card-button'>Contratar</button>
                    </div>

                    {/* FEMotiva */}
                    <div className="card-wrapper">
                        {/* card hearder */}
                        <div className='card-header'>
                            <img src={img3} alt="img3" />
                            <h2>FEMotiva</h2>
                        </div>
                        {/* card details */}
                        <div className="card-detail" >
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Uso de espacios</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Publicidad</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Precios preferenciales</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Uso de espacios para eventos y activaciones</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-times check'>
                                    <FaCheck />
                                </span>
                                <p>Ser parte del directorio</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-times nocheck'>
                                    <FaTimes />
                                </span>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        {/* card price */}
                        <div className="card-price">
                            <p><sup>$ </sup><sup className='num'>300</sup>/anuales</p>
                        </div>
                        {/* button */}
                        <button className='btn card-button'>Contratar</button>
                    </div>

                    {/* FEMaliada */}
                    <div className="card-wrapper">
                        {/* card hearder */}
                        <div className='card-header'>
                            <img src={img4} alt="img3" />
                            <h2>FEMaliada</h2>
                        </div>
                        {/* card details */}
                        <div className="card-detail" >
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Uso de espacios</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Publicidad</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Precios preferenciales</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Uso de espacios para eventos y activaciones</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-times check'>
                                    <FaCheck />
                                </span>
                                <p>Ser parte del directorio</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-times nocheck'>
                                    <FaTimes />
                                </span>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
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