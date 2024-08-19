import React, { useContext, useState } from 'react'
import logo from '../assets/logo.jpg'
import card from '../assets/card.jpg'
import { Link } from 'react-router-dom'
import { CartContext } from '../Feature/ContextProvider'
function Header() {
  
 
  const {cart}=useContext(CartContext)

  const Logout=()=>{
    const token=localStorage.getItem("token");
    localStorage.clear('user')
    localStorage.clear('currentAdmin');
    window.location.href='/login';
  } 
  return (
    <>
    <div className='flex justify-between w-full h-20 bg-purple-50 items-center pl-4'>
      <div className='h-14 w-14'>
        <Link to='/'>
        <img src={logo} alt='pic'/>
        </Link>
      </div>
     
      <ul className='flex text-lg'>
        <Link to='/login'>
          <li className='mr-4 hover:bg-indigo-200 hover:w-20 hover:rounded-lg hover:text-center'>Login</li>
        </Link>
        <Link to='/login'>
        <a onClick={Logout} className='mr-4 hover:bg-indigo-200 hover:w-20 hover:rounded-lg hover:text-center'>LogOut</a></Link> 
       <Link to='/admin'>
       <li className='mr-4 hover:bg-indigo-200 hover:w-20 hover:rounded-lg hover:text-center'>Admin</li></Link>
        <Link className='mr-4 flex' to='/cartproduct'>
          <img src={card} className='h-8 w-8' alt='pic'/>
          {cart.length}
      </Link>
      </ul>
    </div>
    </>
  )
}

export default Header