import React from 'react'
import CartItem from './CartItem.tsx';

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
