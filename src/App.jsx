import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CertificationSlide from './components/CertificationSlide'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CertificationSlide />
    </>
  )
}

export default App
