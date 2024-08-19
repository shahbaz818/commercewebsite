import React from 'react'
import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js';
//import Products from '../../../ecommercebackend/models/productModels';


const PayNow = ({cartItems}) => {
    const handleClick=async()=>{
        const stripe = await loadStripe('pk_test_51PfJk1DYAx8ywA27RFjMV8vuGqxWzBeOSpKB38yMCUl2Qpt5D7f1Tfej1t9xFYGeHm81CKDScz6vaD8R0oII715E00ll7dF0F6');
        console.log(cartItems)
       const body={cartItems}
      
       const headers={
        'Content-Type': 'application/json',
       }
        const response = await fetch('http://localhost:8000/api/v1/stripe.checkout.sessions',{
         method:'POST',
         headers:headers,
         body:JSON.stringify(body)  
           
        })
        const session=await response.json()
        const result=stripe.redirectToCheckout({
            sessionId:session.id
        })
        if(result.error){
            console.log(result.error)


    }}
  return (
    <>
    <button className="text-bold text-2xl text-blue-700" onClick={()=>handleClick()}>Check Out</button>

    </>
  )
}

export default PayNow