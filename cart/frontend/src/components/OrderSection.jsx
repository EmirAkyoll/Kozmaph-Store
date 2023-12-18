import React, { useEffect, useState } from 'react'

function OrderSection({ total }) {
  const [isMobileScreen, setIsMobileScreen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 745) {
        setIsMobileScreen(true);
    } else {
        setIsMobileScreen(false);
    }
  }, []);

  return (
    <div>
      {isMobileScreen ? (
        <div className="flex justify-content-evenly fixed bottom-0 left-0 border-1 border-gray-400 h-5rem bg-white mb-6" style={{ width: '100vw' }}>
            <span>
                <p className="mb-0">All Total</p>
                <p className="mt-1">32 $</p>
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
            <p>Product Total: {total} $</p>
            <p>Shipping: 4.25 $</p>
            <hr />
            <p>All Total: {total + 4.25} $</p>
          </div>
          <button className="mt-3 w-18rem border-none p-3 border-round-sm bg-orange-300 font-Ubuntu cursor-pointer">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  )
}

export default OrderSection;
