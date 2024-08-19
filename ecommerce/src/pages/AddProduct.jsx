import React, { useContext, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Feature/ContextProvider';
import { useNavigate } from 'react-router-dom';

function AddProduct() {

    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [quantity,setQuantity]=useState('')
    const [imageUrl,setImageUrl]=useState('')

      const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();


        const response = await fetch('http://localhost:8000/api/v1/product', {
            method: 'POST',
            body: JSON.stringify({title,price,category,quantity,imageUrl}),


            headers: ({
                'Content-Type': 'Application/json',
            })
        })
        const data = await response.json();
        console.log(data)
        if (response.status === 201) {
            navigate('/addProduct')
        }
    }


   useEffect(()=>{
       const token=localStorage.getItem('token')
     if(!token){
       navigate('/login')
     }
   },[])



    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            name='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Category'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='quantity'
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Quantity'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='image'
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='imageUrl'
                        />
                    </div>

                    <div className=' flex justify-center mb-3'>
                        <button
                            onClick={submitHandler}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddProduct