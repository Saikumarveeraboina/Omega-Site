import React from 'react'
import Header from '../Header/Header'
import cart from '../../Images/cart.jpg'
import './Cart.css'

const Cart = () => {
  return (
    <div>
        <Header />
        <div className='cart-container'>
        <h1>Cart Page</h1>
        <img src={cart} alt="cart" className='cart' />
        </div>

    </div>
  )
}

export default Cart