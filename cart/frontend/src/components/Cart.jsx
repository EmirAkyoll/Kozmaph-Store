import React, { useState, useEffect  } from "react";
import CartTable from "./CartTable.jsx";
import OrderSection from "./OrderSection.jsx";
import CartItem from "./CartItem.jsx";
import "primeflex/primeflex.css";

const Cart = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(true);
  const [price, setPrice] = useState(true);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', quantity: 2, price: 5 },
    { id: 2, name: 'Product 2', quantity: 1, price: 3 },
    { id: 3, name: 'Product 3', quantity: 3, price: 2 },
  ]);

  const handleDataFromChild = (data) => {
    setPrice(data);
    console.log("data: ", data);
  };

  function calculateTotal() {
    let total = 0;
    for (let index = 0; index < cartItems.length; index++) {
      total = total + (cartItems[index].price * cartItems[index].quantity);
      console.log("total: ", total);
    }
    setCartTotal(total)
  }

  useEffect(() => {
    calculateTotal()

    if (isMobileScreen < 745) {
        setIsMobileScreen(true);
    } else {
        setIsMobileScreen(false);
    }
  }, []);

  return (
    <div className="font-Ubuntu flex justify-content-between relative">
      <div className='mt-5'>
      <CartItem sendDataToParent={handleDataFromChild} />
      <CartItem sendDataToParent={handleDataFromChild} />
      <CartItem sendDataToParent={handleDataFromChild} />  
      <CartItem sendDataToParent={handleDataFromChild} />
    </div>  
      <OrderSection price={price} total={cartTotal} />  
    </div>
  );
};

export default Cart;
