import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>

      
    </>
  )
}

export default App
