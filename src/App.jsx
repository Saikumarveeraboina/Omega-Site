import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/Home/Home'
import Cart from './assets/Cart/Cart'
import Products from './assets/Products/index'
import About from './assets/About/index'
import Contact from './assets/Contact/index'
import Header from './assets/Header/Header'


const App = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<Cart />} />
          <Route path="/syllabus" element={<Products />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>

    </div>
  )
}

export default App
