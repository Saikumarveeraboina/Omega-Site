import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/Home/Home'
import Cart from './assets/Cart/Cart'
import Products from './assets/Products/index'
import About from './assets/About/index'
import Contact from './assets/Contact/index'
import Header from './assets/Header/Header'
import Slider from './assets/Slider/index'

const App = () => {
  return (
    <div className="app-layout">
      <Header />
      <Slider />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

    </div>
  )
}

export default App
