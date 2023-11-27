import React, { useState } from "react";

function CartItem() {
  const [price, setPrice] = useState(2.75);
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(price / quantity);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setPrice(price + unitPrice);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(price - unitPrice);
    }
  };

  const quantityStyles = {
    fontSize: '10px'
  };

  return (
    <div className="flex flex-column justify-content-center align-items-between p-4 pt-3 border-1 border-round-lg border-gray-400 font-Ubuntu mb-4">
      <div className="font-bold">Kitchen Life - 4.7</div>
      <div className="flex flex-column justify-content-between align-items-center border-top-1 mt-3 sm:flex-row">
        <img
          src="https://cdn.dsmcdn.com/ty986/product/media/images/20230815/0/403261825/480842529/2/2_org_zoom.jpg"
          alt="product-image"
          className="w-7rem mr-0 mt-3 border-round-sm sm:mr-5 sm:w-5rem"
        />

        <span className="flex flex-column justify-content-between align-items-center mt-4 w-full sm:mt-0 xl:flex-row">
          <span className="flex flex-column justify-content-centers align-items-center mr-0 sm:align-items-start sm:mr-5">
            <p className="my-1">Kitchen Life 12 Pack with Label and Lockable Cover</p>
            <p className="my-1 text-sm">Estimated Shipping: Within 9 days</p>
          </span>
          <span className="flex mt-4 justify-content-between align-items-center w-12rem lg:w-15rem lg:mt-0">
            <span className="flex justify-content-between align-items-center ml-2s">
              <button onClick={increaseQuantity} className="w-1rem h-1rem flex justify-content-center align-items-center surface-800 border-none border-round-sm cursor-pointer">
                <i className="pi pi-plus text-white" style={quantityStyles}></i>
              </button>
                <span className="mx-2 text-xl xl:text-2xl">{quantity}</span>
              <button onClick={decreaseQuantity} className="w-1rem h-1rem flex justify-content-center align-items-center surface-800 border-none border-round-sm cursor-pointer">
                <i className="pi pi-minus text-white" style={quantityStyles}></i>
              </button>
            </span>
            <span>{price} $</span>
            <i className="pi pi-trash"></i>
          </span>
        </span>
      </div>
    </div>
  );
}

export default CartItem;