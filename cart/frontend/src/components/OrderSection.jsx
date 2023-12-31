import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { v4 as generate_random_id } from 'uuid';

function OrderSection({ total, cart, userData }) {
  const [isMobileScreen, setIsMobileScreen] = useState(true);
  console.log("car: ", cart);
  useEffect(() => {
    if (window.innerWidth < 745) {
        setIsMobileScreen(true);
    } else {
        setIsMobileScreen(false);
    }
  }, []);

  const createOrder = async () => {
    console.log("userData: ", userData);
    const date = new Date();
    const order = {
      _id: generate_random_id(),
      products: cart.slice(0, -1),
      buyer_id: userData.id,
      buyer_full_name: userData.full_name,
      buyer_name: userData.username,
      buyer_address: userData.address,
      buyer_email: userData.email,
      total_price: total + 4.25,
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    console.log("order:", order);
    await fetch("http://localhost:8080/api/orders/create-order", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(order)
    });
  }

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51O43ZgBj3594sT8O2eK39AXj8ZEfq93Di8B6R0Md7we8ceR3At0TPvmAWVprz7BoLu6ti9t36ETyE8Tr6lKM3LSw00aQiGmtGo");
   
    cart.push({
      productId: "shipping_cost_1234",
      productImage: "https://res.cloudinary.com/dcuexe6p4/image/upload/v1703169127/hz24dwfwdpmiqzwrgfv9.jpg",
      productName: "Shipping",
      productPrice: 4.25,
      productQuantity: 1
    })

    // const body = {products:cart}
    // const response = await fetch("http://localhost:7000/api/payment",{
    //     method:"POST",
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify(body)
    // });

    // const session = await response.json();
    // const result = stripe.redirectToCheckout({ sessionId:session.id });
    
    // if(result.error){
    //     console.log(result.error);
    // }

    createOrder();
  }

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
          <button onClick={makePayment} className="mt-3 w-18rem border-none p-3 text-white border-round-sm bg-orange-500 font-Ubuntu cursor-pointer">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  )
}

export default OrderSection;
