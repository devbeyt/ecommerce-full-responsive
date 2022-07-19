import React from 'react'
import Category from './../../components/category/Category'
import ProductList from './../product/ProductList'
import './../allPagesStyles.css'

function Home() {
  return (
    <div className='page home_page container'>
      <Category/>
      <ProductList/>
    </div>
  )
}

export default Home