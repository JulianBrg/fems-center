// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/Scroll/ScrollToTop'

import Membership from './pages/Membership/Membership'
import Services from './pages/Services/Services'
import Activities from './pages/Activities/Activities'
import Directory from './pages/Directory/Directory'
import Index from './pages/Home/Index'


function App() {


  return (

    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Index />} index />
          <Route path='/membresias' element={<Membership />} />
          <Route path='/servicios' element={<Services />} />
          <Route path='/actividades' element={<Activities />} />
          <Route path='/directorio' element={<Directory />} />
          <Route path='*' element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App