import React from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Middle from './components/Middle/Middle'
import Navbar from './components/Navbar/Navbar'
import Porfolio from './components/Portfolio/Porfolio'
import Professionals from './components/Professionals/Professionals'
import Questions from './components/Questions/Questions'
import Reviews from './components/Reviews/Reviews'
import Suscribe from './components/Suscribe/Suscribe'
import { Helmet } from 'react-helmet'

const Index = () => {
    return (
        <div>
            <Helmet>
                <title itemProp="name" lang="es">Fems Center - Inicio</title>
                <meta
                    name='description'
                    content='Es tu momento de crecer. Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente.' />
                <meta name="keywords" content="Desarrollo personal, Potencial, coworking" />
                <link rel="canonical" href="https://femscenter.netlify.app/" />
            </Helmet>

            <Navbar />
            <Home />
            <Middle />
            <Professionals />
            <Porfolio />
            <Reviews />
            <Questions />
            <Suscribe />
            <Footer />
        </div>
    )
}

export default Index