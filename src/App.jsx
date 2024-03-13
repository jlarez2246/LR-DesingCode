import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParticlesBackground from './components/ParticlesBackground'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Tienda from './components/Tienda'
import Contact from './components/Contact'
import Criterios from './components/Criterios'

function App() {
//   const [count, setCount] = useState(0)

    return (
        <>
            <ParticlesBackground />
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/skills' element={<Skills/>} />
                    <Route path='/tienda' element={<Tienda/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/criterios' element={<Criterios/>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
