import React from 'react'

function CartItem() {
  return (
    <div className='flex flex-column justify-content-center align-items-between p-4 border-1 border-round-lg border-gray-400 font-Ubuntu'>
      <div className=''>Kitchen Life - 4.7</div>
      {/* <img src="" alt="" /> */}
      <div className='flex justify-content-between align-items-center border-top-1 mt-4'>
        <p className=''>product_image</p>
        <span className='flex justify-content-start align-items-center'>
          <p>product name</p> 
          <p>estimated delivery date</p>
        </span>
        <span className='flex justify-content-between align-items-center'>
          <span>quantity</span>
          <span>price</span>
          <button>dlt</button>
        </span>
      </div>
    </div>
  )
}

export default CartItem;
