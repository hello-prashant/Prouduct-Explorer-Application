import { useState, useEffect } from 'react'
import './App.css'
import {ProductList} from './components/ProductList'


function App() {

  return (
    <div style={{display:'block'}}>
      
      <ProductList />
    </div>
  );
  
  // return (
  //   <>
      
  //     <h1>Vite + React</h1>
  //     <ProductList/>
  //   </>
  // )
}

export default App

function ProductCard({product}) {
  return(
    <div>
      <h3>Sr. No.: {product.id} - Name: {product.title}</h3>
      <h6>Description: {product.description}</h6>
      <h6>Category: {product.category}</h6>
      <h6>Price: {product.price}</h6>
    </div>
  )
}
