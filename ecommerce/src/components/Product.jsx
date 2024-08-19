import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Feature/ContextProvider'
import { useNavigate } from 'react-router-dom'
import HeroSection from './HeroSection'
//import Crousel from './Crousel'



function Product() {
    const { dispatch } = useContext(CartContext)
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate()


    const allUser = async () => {
        const res = await fetch('http://localhost:8000/api/v1/read', {
            method: 'GET',

        })
        const data = await res.json()
        console.log(data)
        setProducts(data)

    }

    useEffect(() => {
        allUser()

    }, [])



    return (
        <>
            <section className='bg-indigo-100 h-full w-full pb-5'>
            <HeroSection/>
                <div className='flex w-full flex-between justify-center items-center pt-10  mt-[20px] mb-2 text-xl text-blue-500'>
                    <label htmlFor="searchbox"><b>Search Product:</b></label>
                    <input type="text" className='h-8 w-96 ml-10 visible bg-violet-50 rounded-lg' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 ml-6 mr-6 mt-4 gap-9 space-x-2 space-y-2'>
                    {products.filter((value) => value.title.toLowerCase().includes(search.toLowerCase()))
                        .map(product => (
                            <div className=' h-96 w-50 border-2 border-blue-400 text-center rounded-lg bg-teal-200  hover:border-indigo-600'>

                                <img src={product.imageUrl} alt='pic' className=' w-full h-[250px] hover:h-[280px] ' />

                                <div className='ml-4 mt-4 '>
                                    <h1><span className='text-blue-500'></span></h1>
                                    <p>{product.title}</p>
                                    <p><span className='text-blue-500'>{product.price}Rs</span></p>
                                    <button onClick={() => dispatch({ type: 'Add', product })} className='mt-1 mb-1 bg-blue-500 w-24 rounded-lg hover:w-32 hover:bg-blue-800 hover:text-white'>Buy Now</button>
                                </div>
                            </div>

                        ))}


                </div>
            </section>
            {/* <Crousel/> */}

        </>
    )
}

export default Product