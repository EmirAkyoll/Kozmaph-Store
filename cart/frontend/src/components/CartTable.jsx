import React from 'react'
import CartItem from './CartItem.jsx';
import "primeflex/primeflex.css";

function CartTable(){
  return (
    <div className='mt-5'>
      <CartItem />
      <CartItem />
      <CartItem />  
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  )
}

export default CartTable;
