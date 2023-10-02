import React, { useEffect } from 'react'
// import "./Membership.css"
import "./Membership.scss"
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
import { Helmet } from 'react-helmet'

const Membership = () => {

    const FEMpresaria = 'https://api.whatsapp.com/send/?phone=522381440723&text=Hola.%0AVi+las+membres%C3%ADas+de+Fems+y+me+gustar%C3%ADa+contratar+la+membres%C3%ADa+de+FEMpresaria+%3C3.%0AMe+podr%C3%ADan+proporcionar+m%C3%A1s+informaci%C3%B3n+por+favor.&type=phone_number&app_absent=0';
    const FEMprendedora = 'https://api.whatsapp.com/send/?phone=522381440723&text=Hola.%0AVi+las+membres%C3%ADas+de+Fems+y+me+gustar%C3%ADa+contratar+la+membres%C3%ADa+de+FEMprendedora+%3C3.%0AMe+podr%C3%ADan+proporcionar+m%C3%A1s+informaci%C3%B3n+por+favor.&type=phone_number&app_absent=0';
    const FEMotiva = 'https://api.whatsapp.com/send/?phone=522381440723&text=Hola.%0AVi+las+membres%C3%ADas+de+Fems+y+me+gustar%C3%ADa+contratar+la+membres%C3%ADa+de+FEMotiva+%3C3.%0AMe+podr%C3%ADan+proporcionar+m%C3%A1s+informaci%C3%B3n+por+favor.&type=phone_number&app_absent=0';
    const FEMaliada = 'https://api.whatsapp.com/send/?phone=522381440723&text=Hola.%0AVi+las+membres%C3%ADas+de+Fems+y+me+gustar%C3%ADa+contratar+la+membres%C3%ADa+de+FEMaliada+%3C3.%0AMe+podr%C3%ADan+proporcionar+m%C3%A1s+informaci%C3%B3n+por+favor.&type=phone_number&app_absent=0';

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <>
            <Helmet>
                <title>Fems Center - Membresias</title>
                <meta property="description" content="Explora nuestras diferentes membresias" />
            </Helmet>

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
                            <img src={img1} alt="Image 1" data-aos="fade-down" />
                            <h2 data-aos="fade-down">FEMpresaria</h2>
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
                                <span className='fas fa-times check'>
                                    {/* <FaTimes /> */}
                                    <FaCheck />
                                </span>
                                <p>Showroom y Coworking</p>
                            </div>
                        </div>
                        {/* card price */}
                        <div className="card-price" >
                            <p><sup>$ </sup><sup className='num'>2400</sup>/mensuales</p>
                        </div>
                        {/* button */}
                        <a href={FEMpresaria} target='_blank'>
                            <button type='button' className='btn card-button' >Contratar</button>
                        </a>
                    </div>

                    {/* FEMemprendedora */}
                    <div className="card-wrapper">
                        {/* card hearder */}
                        <div className='card-header'>
                            <img src={img2} alt="img2" data-aos="fade-down" />
                            <h2 data-aos="fade-down">FEMprendedora</h2>
                        </div>
                        {/* card details */}
                        <div className="card-detail" >
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Punto de entrega</p>
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
                                <p>Showroom y Coworking</p>
                            </div>
                        </div>
                        {/* card price */}
                        <div className="card-price">
                            <p><sup>$ </sup><sup className='num'>500</sup>/mensuales</p>
                        </div>
                        {/* button */}
                        <a href={FEMprendedora} target='_blank'>
                            <button className='btn card-button'>Contratar</button>
                        </a>
                    </div>

                    {/* FEMotiva */}
                    <div className="card-wrapper">
                        {/* card hearder */}
                        <div className='card-header'>
                            <img src={img3} alt="img3" data-aos="fade-down" />
                            <h2 data-aos="fade-down">FEMotiva</h2>
                        </div>
                        {/* card details */}
                        <div className="card-detail" >
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Precios preferenciales</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-times check'>
                                    <FaCheck />
                                </span>
                                <p>Ser parte del directorio</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Mencion en redes sociales</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check nocheck'>
                                    <FaTimes />
                                </span>
                                <p>Uso de espacios</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check nocheck'>
                                    <FaTimes />
                                </span>
                                <p>Uso de espacios para eventos y activaciones</p>
                            </div>

                            <div className='parrafo'>
                                <span className='fas fa-times nocheck'>
                                    <FaTimes />
                                </span>
                                <p>Showroom y Coworking</p>
                            </div>
                        </div>
                        {/* card price */}
                        <div className="card-price">
                            <p><sup>$ </sup><sup className='num'>300</sup>/anuales</p>
                        </div>
                        {/* button */}
                        <a href={FEMotiva} target='_blank'>
                            <button className='btn card-button'>Contratar</button>
                        </a>
                    </div>

                    {/* FEMaliada */}
                    <div className="card-wrapper">
                        {/* card hearder */}
                        <div className='card-header'>
                            <img src={img4} alt="img3" data-aos="fade-down" />
                            <h2 data-aos="fade-down">FEMaliada</h2>
                        </div>
                        {/* card details */}
                        <div className="card-detail" >
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    {/* <FaCheck /> */}
                                </span>
                                <p>Membresia pensada para empresarias fuera de Fems Center</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Recomendaciones</p>
                            </div>
                            <div className='parrafo'>
                                <span className='fas fa-check check'>
                                    <FaCheck />
                                </span>
                                <p>Publicidad</p>
                            </div>
                        </div>
                        {/* card price */}
                        <div className="card-price">
                            <p><sup>$ </sup><sup className='num'>1000</sup>/anuales</p>
                        </div>
                        {/* button */}
                        <a href={FEMaliada} target='_blank'>
                            <button className='btn card-button'>Contratar</button>
                        </a>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Membership