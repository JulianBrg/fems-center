// import './App.css'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ScrollToTop from './components/Scroll/ScrollToTop'
import Navbar2 from './components/Navbar/Nabvar2'


// import Index from "./pages/Home/Index"
const Index = lazy(() => import("./pages/Home/Index"))
const Membership = lazy(() => import("./pages/Membership/Membership"))
const ServicesFems = lazy(() => import("./pages/Services/Fems/ServicesFems"))
const Services = lazy(() => import("./pages/Services/Services"))
const Personal = lazy(() => import("./pages/Activities/Personal/Personal"))
const Professional = lazy(() => import("./pages/Activities/Professional/Professional"))
const Directory = lazy(() => import("./pages/Directory/Directory"))
const Sedes = lazy(() => import("./pages/Directory/Sedes/Sedes"))
const Politicas = lazy(() => import("./components/Footer/Privacidad/Politicas"))
const Terminos = lazy(() => import("./components/Footer/Privacidad/Terminos"))

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar2 />
        <Suspense fallback={<div className='lds-hourglass'></div>}>
          <Routes>
            <Route path='/' element={<Index />} index />
            <Route path='/membresias' element={<Membership />} />

            <Route path='/servicios/FEMS' element={<ServicesFems />} />
            <Route path='/servicios/asociadas' element={<Services />} />

            <Route path='/actividades/personales' element={<Personal />} />
            <Route path='/actividades/profesionales' element={<Professional />} />

            <Route path='/directorio/socias' element={<Directory />} />
            <Route path='/directorio/sedes' element={<Sedes />} />

            <Route path='/políticas-de-privacidad' element={<Politicas />} />
            <Route path='/términos-y-condiciones' element={<Terminos />} />

            <Route path='*' element={<Index />} />
          </Routes>
        </Suspense>


      </BrowserRouter>
    </ >
  )
}

export default App