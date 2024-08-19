import { useState } from 'react';
import axios from 'axios';
import { PayPalButtons } from "@paypal/react-paypal-js";


function Payment() {
  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/api/v1/payment');

      if (res && res.data) {
        window.location.href = res.data.links[1].href;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    
      <button onClick={handlePayment}>Proceed to Payment</button>
      
    </>
  );
}

export default Payment;
