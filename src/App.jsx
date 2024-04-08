
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import RootBeer from './RootBeer'
import Doritos from './Doritos'
import CinnamonRoll from './CinnamonRoll'
import './App.css'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/RootBeer' element={<RootBeer />} />
          <Route path='/Doritos' element={<Doritos />} />
          <Route path='/CinnamonRoll' element={<CinnamonRoll />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
