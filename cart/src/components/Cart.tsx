import React, { useState, useEffect  } from "react";
import CartTable from "./CartTable.tsx";
import "primeflex/primeflex.css";

const Cart = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (screenWidth < 745) {
        setIsMobileScreen(true);
    } else {
        setIsMobileScreen(false);
    }
  }, []);

  return (
    <div className="font-Ubuntu flex justify-content-between relative">
      <CartTable />
    
      {/* Ordering section */}
      {isMobileScreen ? (
        <div className="flex justify-content-evenly fixed bottom-0 left-0 border-1 border-gray-400 h-5rem bg-white" style={{ width: '100vw' }}>
            <span>
                <p className="mb-0">All Total</p>
                <p className="mt-1">75.40 $</p>
            </span>
            <button className="my-3 w-12rem border-none p-3 border-round-sm bg-orange-300 font-Ubuntu cursor-pointer">
                Confirm Order
            </button>
        </div>
      ):(
        <div className="w-20rem h-20rem mt-5 border-1s sticky right-0 top-0 flex flex-column align-items-between ml-4">
          <div className="w-18rem h-15rem border-1 border-round-md mt-3 border-gray-500 p-3">
            <p className="font-bold">Order Summary</p>
            <hr />
            <p>Product Total: 24 $</p>
            <p>Shipping: 8 $</p>
            <hr />
            <p>All Total: 32 $</p>
          </div>
          <button className="mt-3 w-18rem border-none p-3 border-round-sm bg-orange-300 font-Ubuntu cursor-pointer">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
