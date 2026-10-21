import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CertificationSlide from './components/CertificationSlide'
import SearchBar from './components/SearchBar'
import FAQTemplate from './components/FAQtemplate'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <CertificationSlide />
      <FAQTemplate />
    </>
  )
}

export default App
