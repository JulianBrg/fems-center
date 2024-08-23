import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import data from '../../data/data'
// animation
import Aos from 'aos';
// SEO
import { Helmet } from 'react-helmet'
// icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const CardListDetails = () => {
    const params = useParams();
    const getOnj = (id) => data.find(dato => dato.name === id)
    const dato = getOnj(params.id)

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <>
            <Helmet>
                <title>{dato.name} - Fems Center Tehuacán</title>
                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:title" content={`${dato.name} | Fems Center Tehuacán`}></meta>
                <meta property="og:description" content={`${dato.description}`} />
                <meta property="og:image" content={`https://femscenter.com/${dato.img}`} />
                <meta property="og:url" content={`https://femscenter.com/servicios/asociadas/${dato.name}`} />
            </Helmet>

            <div className='cardListDetails section container'>
                {
                    <div className='details'>

                        <div className='photo' data-aos="fade-up">
                            <img src={dato.img} alt={dato.name} />
                        </div>
                        <div className='text'>
                            <h1 className='name' data-aos="fade-up">{dato.name}</h1>
                            <div className='logo' data-aos="fade-up">
                                <img src={dato.logo} alt={`Logo de: ${dato.name}`} />
                            </div>
                            <p className='description' data-aos="fade-up">{dato.description}</p>
                            <p className='paragraph' data-aos="fade-up">{dato.paragraph}</p>
                            <ul className='products' data-aos="fade-up">
                                {
                                    dato.productos.map((producto, index) => {
                                        return (
                                            <li key={index}>{producto}</li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className='info' data-aos="fade-up">
                                {
                                    dato.info.map((inf, index) => {
                                        return (
                                            <li key={index}><span className='asterisco'>*</span>{inf}</li>
                                        )
                                    })
                                }
                            </ul>
                            {
                                dato.category == "Servicio" ?
                                    <a href={`https://api.whatsapp.com/send?phone=+52${dato.phone}&text=Hola,%20quisiera%20saber%20de%20sus%20servicios.%20Gracias`} className='btn whatsapp' target='_blank'><WhatsAppIcon className='icon' />WhatsApp</a>
                                    :
                                    <a href={`https://api.whatsapp.com/send?phone=+52${dato.phone}&text=Hola,%20quisiera%20saber%20de%20sus%20productos.%20Gracias`} className='btn whatsapp' target='_blank'><WhatsAppIcon className='icon' />WhatsApp</a>
                            }
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </>
    )
}

export default CardListDetails