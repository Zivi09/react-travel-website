import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';
import Footer from'./components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Tours from './components/pages/Tours/Tours';
import ToursDetails from './components/pages/Tours/ToursDetails';
import Booking from './components/pages/Booking/Booking';
import Destination from './components/pages/Destination/Destination';
import PhotoGallery from './components/pages/PhotoGallery/PhotoGallery';

const App = () => {
  const location = useLocation();

  const hideHeaderFooter = ["/login"].includes(location.pathname); // Add routes where you want to hide header/footer

  return (
    <>
      {!hideHeaderFooter && <Header/>} {/* Conditionally render Navbar */}
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login/>} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tour-details" element={<ToursDetails />} />
        <Route path="booking" element={<Booking />} />
        <Route path="destinations" element={<Destination />} />
        <Route path="gallery" element={<PhotoGallery />} />

      </Routes>
      {!hideHeaderFooter && <Footer />} {/* Conditionally render Footer */}
    </>
  );
};


export default App;
