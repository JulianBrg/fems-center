import './Links.scss'
// animation
import Aos from 'aos';
import Avatar from '../../assets/ladyCalling.webp'

import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Github,
    Mail,
    Phone,
    Globe,
    MessageCirclePlus
} from 'lucide-react';



const Links = () => {

    const socialLinks = [
        { icon: Facebook, url: 'https://www.facebook.com/femsenaccion', label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: Instagram, url: 'https://www.instagram.com/centrofems?igsh=YnUxbTk1NnR0Z285', label: 'Instagram', color: 'hover:bg-pink-600' },
        { icon: MessageCirclePlus, url: 'https://api.whatsapp.com/send/?phone=522381680876', label: 'WhatsApp', color: 'hover:bg-red-600' },
        { icon: Mail, url: 'mailto:potencialfem@gmail.com', label: 'Correo', color: 'hover:bg-green-600' },
        { icon: Globe, url: '/', label: 'Sitio Web', color: 'hover:bg-indigo-600' }
    ];

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <>
            <Helmet>
                <title>Redes Sociales</title>
                <meta property="description" content="Si eres una mujer que quiere iniciar o hacer crecer su propio negocio, entonces necesitas una membresía de Fems Center." />
                <link rel="canonical" href="https://femscenter.com/membresias" />
            </Helmet>


            <div className='links'>
                <div className="secTitle" >
                    <h2 className="redText" data-aos="fade-down">
                        Redes Sociales
                    </h2>
                </div>

                <div className="social-profile-container">
                    <div className="profile-card">
                        {/* Foto circular */}
                        <div className="photo-container">
                            <div className="photo-wrapper">
                                <div className="photo-placeholder">
                                    {/* <span className="avatar-icon">👤</span> */}
                                    <img src={Avatar} alt="Karla Vadillo" title='Lic. Karla Vadillo' />
                                </div>
                            </div>
                        </div>

                        {/* Nombre de la persona */}
                        <h2 className="name">
                            Karla Vadillo
                        </h2>

                        {/* Cargo */}
                        <p className="position">
                            Directora general Centro Fems
                        </p>

                        {/* Grid de redes sociales 3x3 */}
                        <div className="social-grid">
                            {socialLinks.map((social, index) => (
                                <div className='social-item'>
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        className="social-link"
                                        title={social.label}
                                        style={{ '--hover-color': social.color }}
                                    >
                                        <social.icon size={24} />
                                    </a>
                                    <span className='social-label'>{social.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Información adicional */}
                        <div className="footer-text">
                            <p>¡Síguenos en las redes sociales!</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Links