import React from 'react'
// import './App.css'
import '../../index.scss'
import Footer from '../../components/Footer/Footer'
import Home from '../../components/Home/Home'
import Middle from '../../components/Middle/Middle'
import Porfolio from '../../components/Portfolio/Porfolio'
import Professionals from '../../components/Professionals/Professionals'
import Questions from '../../components/Questions/Questions'
import Reviews from '../../components/Reviews/Reviews'
import Suscribe from '../../components/Suscribe/Suscribe'
import { Helmet } from 'react-helmet'
import Navbar2 from '../../components/Navbar/Nabvar2'

const Index = () => {
    return (
        <div>
            <Helmet>
                <title itemProp="name" lang="es">Inicio | Fems Center</title>
                <meta
                    name='description'
                    content='Es tu momento de crecer. Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente.' />
                <link
                    rel="canonical"
                    href="https://femscenter.netlify.app/" />

            </Helmet>
            {/* <Navbar2 /> */}
            <Home />
            <Middle />
            <Suscribe />
            <Professionals />
            <Porfolio />
            <Reviews />
            <Questions />
            <Footer />
        </div>
    )
}

export default Index