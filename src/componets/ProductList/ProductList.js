import React, { useState } from 'react'
import products from "../../api/products.json";
import './ProductList.css'
import { useSelector,useDispatch } from 'react-redux';
import CartButtons from "./CartButtons";

function PoductList() {
  const {cartCount,cartList} = useSelector((state)=> state.cart);
  const dispatch = useDispatch();
  console.log(cartList);
  return (
    <section className="container">
    {products?.map((product, key) => (
       <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
           <CartButtons product={product} /> 
       
       </div>
    ))}
 </section>
  )
}

export default PoductList
