import React, { useState, useEffect  } from "react";
import OrderSection from "./OrderSection.jsx";
import CartItem from "./CartItem.jsx";
import "primeflex/primeflex.css";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const [isMobileScreen, setIsMobileScreen] = useState(true);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState();
  const [user, setUser] = useState({});

  const handleUnitPrice = (unit_price, which_transaction) => {
    if (which_transaction === "increase") {
      setCartTotal(cartTotal + unit_price)
      console.log("increase", cartTotal);
    } else {
      setCartTotal(cartTotal - unit_price)
      console.log("decrease", cartTotal);
    }
  }; 

  const removeProduct = (product_id) => {
    const user = localStorage.getItem('CurrentUserData')
    const user_absolute = JSON.parse(user)
    let products = [];
    cart.forEach(product => {
      products.push(product)
    });
    products = products.filter(product => product.productId !== product_id)
    user_absolute?.cart.splice(0, user_absolute?.cart.length);
    user_absolute.cart = products;
    localStorage.setItem('CurrentUserData', JSON.stringify(user_absolute))
    setCart(products)
  };

  function calculateTotal(cart_data) {
    handleUnitPrice()
    let total = 0;
    for (let index = 0; index < cart_data.length; index++) {
      total = total + cart_data[index]?.productPrice;
      console.log("total: ", total);
    }
    setCartTotal(total)
  }

  useEffect(() => {
    const user = localStorage.getItem('CurrentUserData');
    const user_absolute = JSON.parse(user)
    setCart(user_absolute?.cart);
    calculateTotal(user_absolute?.cart)
    console.log("user: ", user_absolute?.cart);
    setUser(user_absolute);
    
    if (window.innerWidth < 745) {
        setIsMobileScreen(true);
    } else {
        setIsMobileScreen(false);
    }
  }, []);

  return (
    <div className="font-Ubuntu flex justify-content-between relative">
      <div className='mt-5'>
        {cart?.map((product, index) => (
          <CartItem 
            key={index} 
            productData={product} 
            sendToParentUnitPrice={handleUnitPrice} 
            removeProduct={removeProduct}
          />
        ))}
      </div>  
      
      <OrderSection 
        cart={cart} 
        price={price} 
        total={cartTotal} 
        userData={user} 
      />  
    </div>
  );
};

export default Cart;
