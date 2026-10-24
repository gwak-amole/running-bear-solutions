import { useState } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CertificationSlide from './components/CertificationSlide'
import SearchBar from './components/SearchBar'
import FAQSection from './components/FAQSection.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  <Router>
    <nav>
      <ul>
        <li><Link to="/SearchBar">Home</Link></li>
      </ul>
    </nav>
  </Router>
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <FAQSection />
      <CertificationSlide />
      <Footer />
    </>
  )
}

export default App
