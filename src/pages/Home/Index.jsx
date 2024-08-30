import '../../index.scss'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer/Footer'
import Home from '../../components/Home/Home'
import Middle from '../../components/Middle/Middle'
import Porfolio from '../../components/Portfolio/Porfolio'
import Questions from '../../components/Questions/Questions'
import Reviews from '../../components/Reviews/Reviews'
import Suscribe from '../../components/Suscribe/Suscribe'
import Vision from '../../components/Vision/Vision'
import SliderProfessional from '../../components/Professionals/Slider/SliderProfessional'
import Entrepreneurs from '../../components/Entrepreneurs/Entrepreneurs'

const Index = () => {
    return (
        <div>
            {/* <Helmet>
                <title>Fems Center - Espacios coworking en Tehuacán.</title>
                <meta name='description'
                    content='Plataforma de crecimiento profesional. Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente.' />
                {/* <!-- Facebook Meta Tags --> */}
            {/*     <meta property="og:url" content="https://femscenter.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Fems Center Tehuacán" />
                <meta property="og:description"
                    content="Plataforma de crecimiento profesional. Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente." />
                <meta property="og:image" content="/apple-touch-icon.png" />
                <meta property="og:locale" content="es_MX" />
                <meta property="og:site_name" content="Fems Center Tehuacán" />

                <meta charset="UTF-8" />
                <meta name="author" content="M.A. Karla Marinee Vadillo Martínez" />
                <meta name="publisher" content="M.A. Karla Marinee Vadillo Martínez" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="msapplication-TileColor" content="#f070ca" />
                <meta name="theme-color" content="#f070ca" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta name="google-site-verification" content="ryRBIpM7cufbg3Jk_6Ag3PsSKiuCoUVRpoMd4SqWpiQ" />
                <meta name="keywords" content="fems tehuacán, fems, espacios coworking, showroom, emprendedoras" />
            </Helmet> */}

            <Home />
            <Vision />
            <Middle />
            <Suscribe />
            <SliderProfessional />
            <Entrepreneurs />
            <Porfolio />
            <Reviews />
            <Questions />
            <Footer />
        </div>
    )
}

export default Index