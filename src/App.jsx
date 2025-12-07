import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './assets/Home/Home'
import Cart from './assets/Cart/Cart'
import Products from './assets/Products/index'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/products' element={<Products />} />
    </Routes>
  )
}

export default App