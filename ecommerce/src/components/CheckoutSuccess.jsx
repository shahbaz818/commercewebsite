import React from 'react'
import success from '../assets/success.gif'
import { Link } from 'react-router-dom'

const CheckoutSuccess = () => {
  return (
    <>
      <div className='h-screen bg-gray-400 mw-auto flex justify-center items-center flex-col'>
      <img className='rounded-lg' src={success} alt='success' height={300} width={300}/>
      <h1 className='text-xl text-bold text-blue-900'>Success</h1>
      <Link to='/'><button className='w-28 h-10 rounded-lg bg-yellow-500 text-xl text-bold'>Home Page</button></Link>
    </div>
    </>
  )
}

export default CheckoutSuccess