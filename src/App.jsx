import React from 'react'
import Navbar from './componets/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import { Routes, Route } from 'react-router-dom'
import  Footer  from './componets/Footer'


const App = () => {
    return (
        <>
            <div className='sticky top-0'>
                <Navbar />
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App