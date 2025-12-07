import React from 'react'
import Header from '../Header/Header'
import './index.css'
import products from '../../Images/products.jpg'

const Products = () => {
    return (
        <>
            <Header />
            <div className='products-container'>
                <h1 className='products-title'>Products Page</h1>
                <p className='products-subtitle'>Explore our exclusive range of fashion products!</p>

                <img src={products}
                    alt="products"
                    className='product-img' />
            </div>

        </>

    )
}

export default Products