import React, { useContext, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function DashboardTab() {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState([])
    const [order, setOrder] = useState([])

    //get data from database

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


    //delete items

    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:8000/api/v1/deleteandread/${id}`)

        if (res.status === 200) {
            allUser();
        }
    }

    const allUsers = async () => {
        const res = await fetch('http://localhost:8000/api/v1/readUser', {
            method: 'GET',

        })
        const data = await res.json()
        console.log(data)
        setUser(data)
    }

    useEffect(() => {
        allUsers()
    }, [])


    //order show api call

    const allOrder = async () => {
        const res = await fetch('http://localhost:8000/api/v1/orderread', {
            method: 'GET',

        })
        const data = await res.json()
        console.log(data)
        setOrder(data)
    }

    useEffect(() => {
        allOrder()
    }, [])


    //deleteUsers


    const handleDeleteUser = async (id) => {
        const res = await axios.delete(`http://localhost:8000/api/v1/deleteusers/${id}`)

        if (res.status === 200) {
            allUsers();
        }
    }


    //edithandler for edit a product


    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    const add = () => {
        window.location.href = "/addproduct"
    }

    
    return (
        <>
            <div className="container mx-auto">
                <div className="tab container mx-auto ">
                    <Tabs defaultIndex={0} className=" " >
                        <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
                            <Tab>
                                <button type="button" className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] ">
                                    <div className="flex gap-2 items-center">
                                        <MdOutlineProductionQuantityLimits />Products</div> </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500  hover:shadow-pink-700  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center ">
                                    <div className="flex gap-2 items-center">
                                        <AiFillShopping /> Order
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" onClick={allUsers} className="font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500 rounded-lg text-xl  hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]   px-5 py-1.5 text-center ">
                                    <div className="flex gap-2 items-center">
                                        <FaUser /> Users
                                    </div>
                                </button>
                            </Tab>
                        </TabList>
                        {/* product  */}
                        <TabPanel>
                            <div className='  px-4 md:px-0 mb-16'>
                                <h1 className=' text-center mb-5 text-3xl font-semibold underline' >Product Details</h1>
                                <div className=" flex justify-end">
                                    <button
                                        type="button"
                                        onClick={add}
                                        className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" > <div className="flex gap-2 items-center">
                                            Add Product <FaCartPlus size={20} />
                                        </div></button>
                                </div>
                                <div className="relative overflow-x-auto ">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                                        <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"  >
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    S.No
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Image
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Title
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Price
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Category
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        {products.map((product, index) =>

                                            <tbody className=''>
                                                <tr className="bg-gray-50 border-b  dark:border-gray-700"  >
                                                    <td className="px-6 py-4 text-black " >
                                                        {index + 1.}
                                                    </td>
                                                    <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                        <img className='w-16' src={product.imageUrl} alt="img" />
                                                    </th>
                                                    <td className="px-6 py-4 text-black " >
                                                        {product.title}
                                                    </td>
                                                    <td className="px-6 py-4 text-black " >
                                                        ₹{product.price}
                                                    </td>
                                                    <td className="px-6 py-4 text-black ">
                                                        {product.category}
                                                    </td>
                                                    <td className="px-6 py-4 text-black " >
                                                        20 July 2024
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className=" flex gap-2">
                                                            <div className=" flex gap-2 cursor-pointer text-black ">
                                                                <div onClick={() => handleDelete(product._id)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                    </svg>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </td>


                                                </tr>

                                            </tbody>

                                        )}
                                    </table>

                                </div>
                            </div>


                        </TabPanel>


                        <TabPanel>
                            {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
                            <div className="relative overflow-x-auto mb-16">
                                <h1 className=' text-center mb-5 text-3xl font-semibold underline' >Order Details</h1>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
                                    <thead className="text-xs text-black uppercase bg-gray-200 "  >
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Payment Id
                                            </th>
                                            
                                           
                                            <th scope="col" className="px-6 py-3">
                                                Price
                                            </th>
                                            
                                            <th scope="col" className="px-6 py-3">
                                                Status
                                            </th>
                                            
                                        </tr>
                                    </thead>
                                    {order.map(orders =>
                                        <tbody>
                                        <tr className="bg-gray-50 border-b  dark:border-gray-700" >
                                            <td className="px-6 py-4 text-black " >
                                                {orders.paymentDetail.paymentId}
                                            </td>
                                            
                                           
                                            <td className="px-6 py-4 text-black " >
                                                ₹{orders.totalAmount}
                                            </td>
                                           

                                            <td className="px-6 py-4 text-black " >
                                             {orders.paymentDetail.payment_status}
                                            </td>
                                           
                                        </tr>
                                    </tbody>

                                    )}
                                    


                                </table>

                            </div>
                        </TabPanel>

                        {/* User  */}
                        <TabPanel>
                            <div className='  px-4 md:px-0 mb-16'>
                                <h1 className=' text-center mb-5 text-3xl font-semibold underline' >Users Details</h1>

                                <div className="relative overflow-x-auto ">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                                        <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"  >
                                            <tr>

                                                <th scope="col" className="px-6 py-3">
                                                    S.NO
                                                </th>

                                                <th scope="col" className="px-6 py-3">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Email
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Password
                                                </th>

                                                <th scope="col" className="px-6 py-3">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        {user.map((users, index) =>

                                            <tbody className=''>
                                                <tr className="bg-gray-50 border-b  dark:border-gray-700"  >

                                                    <td className="px-6 py-4 text-black " >
                                                        {index + 1.}
                                                    </td>

                                                    <td className="px-6 py-4 text-black " >
                                                        {users.name}
                                                    </td>
                                                    <td className="px-6 py-4 text-black " >
                                                        {users.email}
                                                    </td>
                                                    <td className="px-6 py-4 text-black ">
                                                        {users.password}
                                                    </td>
                                                    <td className="px-6 py-4 text-black " >
                                                        20 July 2024
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className=" flex gap-2">
                                                            <div className=" flex gap-2 cursor-pointer text-black ">
                                                                <div onClick={() => handleDeleteUser(users._id)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                    </svg>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </td>


                                                </tr>

                                            </tbody>

                                        )}
                                    </table>

                                </div>
                            </div>


                        </TabPanel>




                    </Tabs>
                </div>
            </div>
        </>
    )
}


export default DashboardTab