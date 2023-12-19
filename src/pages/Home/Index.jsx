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
            <Helmet>
                <title>Fems Center - Espacios coworking en Tehuacán.</title>
                <meta name='description'
                    content='Plataforma de crecimiento profesional. Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente.' />
                <link rel="canonical" href="https://femscenter.com" />
                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://femscenter.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Fems Center Tehuacán" />
                <meta property="og:description"
                    content="Plataforma de crecimiento profesional. Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente." />
                <meta property="og:image" content="/apple-touch-icon.png" />
                <meta property="og:locale" content="es_MX" />
                <meta property="og:site_name" content="femscenter.com" />
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
        </div>
    )
}

export default Index