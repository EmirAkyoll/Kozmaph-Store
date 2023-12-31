import React, { useState } from "react";

function CartItem({ sendToParentUnitPrice, productData, removeProduct }) {
  const [price, setPrice] = useState(productData.productPrice);
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(productData.productPrice / productData.productQuantity);
console.log("productDataSSS: ", productData);
  const increaseQuantity = () => {
    productData.productQuantity = productData.productQuantity + 1;
    setPrice(productData.productPrice + unitPrice);
    sendToParentUnitPrice(unitPrice, "increase", productData.productId);
  };

  const decreaseQuantity = () => {
    if (productData.productQuantity > 1) {
      productData.productQuantity = productData.productQuantity - 1;
      setPrice(productData.productPrice - unitPrice);
      sendToParentUnitPrice(unitPrice, "decrease", productData.productId);
    }
  };

  const removeProductFromCart = () => {
    removeProduct(productData.productId);
  };

  return (
    <div className="flex flex-column justify-content-center align-items-between p-4 pt-2 border-bottom-1 border-gray-400 font-Ubuntu">
      {/* <div className="font-bold">Kitchen Life - 4.7</div> */}
      <div className="flex flex-column justify-content-between align-items-center sm:flex-row">
        <img
          src={productData.productImage}
          alt="product-image"
          className="w-7rem mr-0 mt-3 border-round-sm sm:mr-5 sm:w-5rem"
        />

        <span className="flex flex-column justify-content-between align-items-center mt-4 w-full sm:mt-0 xl:flex-row">
          <span className="flex flex-column justify-content-centers align-items-center mr-0 sm:align-items-start sm:mr-5">
            <p className="my-1 max-w-25rem">{productData.productName}</p>
            <p className="my-1 text-sm">Estimated Shipping: Within 9 days</p>
          </span>
          <span className="flex mt-4 justify-content-between align-items-center w-12rem lg:w-15rem lg:mt-0">
            <span className="flex justify-content-between align-items-center ml-2s">
              <button onClick={increaseQuantity} className="w-1rem h-1rem flex justify-content-center align-items-center surface-800 border-none border-round-sm cursor-pointer">
                <i className="pi pi-plus text-white" style={{fontSize: '10px'}}></i>
              </button>
                <span className="mx-2 text-xl xl:text-2xl">{productData.productQuantity}</span>
              <button onClick={decreaseQuantity} className="w-1rem h-1rem flex justify-content-center align-items-center surface-800 border-none border-round-sm cursor-pointer">
                <i className="pi pi-minus text-white" style={{fontSize: '10px'}}></i>
              </button>
            </span>
            <span>{productData.productPrice * productData.productQuantity} $</span>
            <i onClick={removeProductFromCart} className="pi pi-trash cursor-pointer"></i>
          </span>
        </span>
      </div>
    </div>
  );
}

export default CartItem;
