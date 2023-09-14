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

const Index = () => {
    return (
        <div>
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