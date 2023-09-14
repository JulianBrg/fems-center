import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import Membership from './pages/Membership/Membership'
import Services from './pages/Services/Services'
import Activities from './pages/Activities/Activities'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/membresias' element={<Membership />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/actividades' element={<Activities />} />
      </Routes>
    </div>
  )
}

export default App