import '../../index.scss'
import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async
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
        <>
            <Helmet>
                <title>Fems Center - Espacios coworking en Tehuacán.</title>
                <meta name='description' content='Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente.' />
                <meta property="og:type" content="website" />
                <meta property="canonical" content="https://femsenaccion.com/" />
                <meta property="og:title" content="Fems Center Tehuacán" />
                <meta property="og:description" content="Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente." />
                <meta property="og:image" content="/apple-touch-icon.png" />
                <meta property="og:locale" content="es_MX" />
                <meta property="og:site_name" content="Fems Center Tehuacán" />

                <meta charset="UTF-8" />
                <meta name="author" content="M.A. Karla Marinee Vadillo Martínez" />
                <meta name="publisher" content="M.A. Karla Marinee Vadillo Martínez" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                <meta name="msapplication-TileColor" content="#f070ca" />
                <meta name="theme-color" content="#f070ca" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta name="google-site-verification" content="ryRBIpM7cufbg3Jk_6Ag3PsSKiuCoUVRpoMd4SqWpiQ" />
                <meta name="keywords" content="fems tehuacán, fems, espacios coworking, showroom, emprendedoras" />
                <link rel="preload" as="image" type="image/svg+xml" href="./src/assets/mobile-background.webp" />
                <link rel="preload" as="image" type="image/svg+xml" href="./src/assets/destop-background.webp" />
                <link rel="preload" as="image" type="image/svg+xml" href="./src/assets/fems.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f070ca" />
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                <link rel="alternate" hreflang="es-MX" href="https://femscenter.com/servicios/FEMS" />
            </Helmet>

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
        </>
    )
}

export default Index