import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CertificationSlide from './components/CertificationSlide'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CertificationSlide />
      <SearchBar />
    </>
  )
}

export default App
