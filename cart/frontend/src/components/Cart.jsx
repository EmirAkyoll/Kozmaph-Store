import React, { useState, useEffect  } from "react";
// import CartTable from "./CartTable.tsx";
import OrderSection from "./OrderSection.jsx";
import CartItem from "./CartItem.jsx";
import "primeflex/primeflex.css";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const [isMobileScreen, setIsMobileScreen] = useState(true);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState();

  const handleDataFromChild = (data) => {
    setPrice(data);
    console.log("data: ", data);
  };

  function calculateTotal() {
    let total = 0;
    for (let index = 0; index < cartItems.length; index++) {
      total = total + (cartItems[index]?.price * cartItems[index]?.quantity);
      console.log("total: ", total);
    }
    setCartTotal(total)
  }

  useEffect(() => {
    calculateTotal()
    const user = localStorage.getItem('CurrentUserData');
    const user_absolute = JSON.parse(user)
    setCart(user_absolute.cart);
    console.log("user: ", user_absolute.cart);
    if (window.innerWidth < 745) {
        setIsMobileScreen(true);
    } else {
        setIsMobileScreen(false);
    }
  }, []);

  return (
    <div className="font-Ubuntu flex justify-content-between relative">
      <div className='mt-5'>
      {cart?.map((product) => (
        <CartItem productData={product} sendDataToParent={handleDataFromChild} />
      ))}
      {/* <CartItem sendDataToParent={handleDataFromChild} />
      <CartItem sendDataToParent={handleDataFromChild} />  
      <CartItem sendDataToParent={handleDataFromChild} /> */}
    </div>  
      <OrderSection price={price} total={cartTotal} />  
    </div>
  );
};

export default Cart;
