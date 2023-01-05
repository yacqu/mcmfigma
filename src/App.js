import React from'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Programs from './components/pages/Programs';
import Donate from './components/pages/Donate';
import Construction from './components/pages/Construction';
import Events from './components/pages/Events';
import Dev from './components/pages/Dev';

import NavBar from './components/floating/navbar/NavBar';
import Footer from './components/floating/footer/Footer';


import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/construction" element={<Construction />} />

          <Route path='/dev' element={<Dev />} />
        </Routes>
      </Router>
    
    </>

  );
}

export default App;
