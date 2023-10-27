// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/Scroll/ScrollToTop'

import Membership from './pages/Membership/Membership'
import Services from './pages/Services/Services'
import Directory from './pages/Directory/Directory'
import Index from './pages/Home/Index'
import Navbar2 from './components/Navbar/Nabvar2'
import Personal from './pages/Activities/Personal/Personal'
import Professional from './pages/Activities/Professional/Professional'
import Sedes from './pages/Directory/Sedes/Sedes'
import { Politicas } from './components/Footer/Privacidad/Politicas'
import Terminos from './components/Footer/Privacidad/Terminos'


function App() {

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar2 />
        <Routes>
          <Route path='/' element={<Index />} index />
          <Route path='/membresias' element={<Membership />} />
          <Route path='/servicios' element={<Services />} />
          <Route path='/actividades/personales' element={<Personal />} />
          <Route path='/actividades/profesionales' element={<Professional />} />
          <Route path='/directorio/socias' element={<Directory />} />
          <Route path='/directorio/sedes' element={<Sedes />} />

          <Route path='/políticas-de-privacidad' element={<Politicas />} />
          <Route path='/términos-y-condiciones' element={<Terminos />} />

          <Route path='*' element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App