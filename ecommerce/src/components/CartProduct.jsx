import React, { useContext, useState,useEffect } from 'react'
import { CartContext } from '../Feature/ContextProvider'
import { totalItems, totalPrice } from '../Feature/CartReducer.jsx'
import LayOut from './LayOut.jsx'
import { Link } from 'react-router-dom'
import PayNow from './PayNow.jsx'
import { useNavigate } from 'react-router-dom'



function CartProduct() {
    const { cart, dispatch } = useContext(CartContext)
    const navigate=useNavigate()


    //increase function

    const Increase = (_id) => {
        const index = cart.findIndex(product => product._id === _id)
        if (cart[index].quantity < 5) {
            dispatch({ type: "Increase",_id})
        }
    }

    //decrease function
    const Decrease = (_id) => {
        const index = cart.findIndex(product => product._id === _id)
        if (cart[index].quantity > 1) {
            dispatch({ type: 'Decrease', _id })
        }
    }

    useEffect(()=>{
        const token=localStorage.getItem('token')
      if(!token){
        navigate('/login')
      }
    },[])
    

    return (
        <>
        <LayOut>

        <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-1 sm:col-span-8'>
                    {cart.map(product => (
                        <div className='flex gap-4 border-2 h-100 w-100 items-center ml-4 mr-4 mt-4'>
                            <div>
                                <img src={product.imageUrl} width={'150px'} height={'150px'} alt='pic' />
                            </div>
                            <div className=''>
                                <h1>{product.title}</h1>
                                <p>{product.price}</p>
                                <button onClick={() => Increase(product._id)} className='bg-blue-400 h-10 w-14 rounded-lg gap-3'>+</button>

                                <button className='text-3xl gap-3 pt-4 '>{product.quantity}</button>

                                <button onClick={() => Decrease(product._id)} className='bg-blue-400 h-10 w-14 text-lg rounded-lg  gap-3'>-</button>
                                <button onClick={() => dispatch({ type: 'Delete', _id: product._id })} className='h-10 w-14 bg-blue-400 rounded-lg ml-2 mb-2'>Remove</button>
                            </div>

                        </div>
                    )


                    )}



                </div>


                <div className='mt-5 '>
                    <div className='bg-purple-50 h-[200px] w-[270px] pt-4 pl-4 space-y-3 rounded-md border-2 flex flex-col items-center'>
                        <h1 className='bg-black w-[200px] h-10 text-center pt-1 text-2xl text-blue-700'>CheckOut Cart</h1>
                        <h1 className='text-bold text-2xl text-blue-700'>Total Items {totalItems(cart)} </h1>
                        <h1 className='text-bold text-2xl text-blue-700'>Total Price ${totalPrice(cart)}</h1>
                        <PayNow className='mt-10' cartItems={cart}/>
                    </div>
                    
                    <div className='mt-4 ml-[110px] '>
                       
                         {/* model */}

                        
                    
                    </div>
                   
                </div>



            </div>


        </LayOut>
            

        </>


    )
}

export default CartProduct