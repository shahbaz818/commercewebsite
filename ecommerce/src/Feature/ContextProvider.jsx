import React, { createContext, useReducer } from 'react'
import cartReducer from './CartReducer.jsx'



export const CartContext=createContext()

function ContextProvider({children}) {
    const [cart,dispatch]=useReducer(cartReducer,[])
  return (
   <CartContext.Provider value={{cart,dispatch}}>
    {children}
   </CartContext.Provider>
  )
}

export default ContextProvider