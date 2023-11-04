import React, { useContext, useEffect, useState } from 'react'
import ProductList from '../components/productList'

const Home = () => {


  return (
    <div className='w-100 h-100'>
      <h1>Ürünler</h1>
      <ProductList />
    </div>
  )
}

export default Home