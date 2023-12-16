import React, { useState, useEffect  } from "react";
import CartTable from "./CartTable.jsx";
import OrderSection from "./OrderSection.jsx";
import "primeflex/primeflex.css";

const Cart = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 745) {
        setIsMobileScreen(true);
    } else {
        setIsMobileScreen(false);
    }
  }, []);

  return (
    <div className="font-Ubuntu flex justify-content-between relative">
      <CartTable />    
      <OrderSection />  
    </div>
  );
};

export default Cart;
