import React from 'react'
import Navbar from './componets/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import { Routes, Route, useLocation } from 'react-router-dom'
import Footer from './componets/Footer'
import ClientPage from './pages/ClientPage'
import DeveloperPage from './pages/DeveloperPage'


const App = () => {
    const location = useLocation();

    // Hide Navbar & Footer on client and developer pages
    const hideLayout =
        location.pathname === "/client" || location.pathname === "/developer";

    return (
        <>
            {!hideLayout && (
                <div className="sticky top-0">
                    <Navbar />
                </div>
            )}

            <Routes>
                {/* Normal pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Special pages */}
                <Route path="/client" element={<ClientPage />} />
                <Route path="/developer" element={<DeveloperPage />} />
            </Routes>

            {!hideLayout && <Footer />}
        </>
    );
};

export default App;