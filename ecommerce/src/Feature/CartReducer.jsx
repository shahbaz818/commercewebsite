
export const totalItems = (cart) => {
    return cart.reduce((totalProduct, product) => totalProduct + product.quantity,0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price, 0)
}


const cartReducer = (state, action) => {
    
    switch (action.type) {
        case 'Add':
            return [...state, action.product]


        case 'Delete':
            return state.filter(product => product._id !== action._id);


        case 'Increase':
            const indexI = state.findIndex(product => product._id === action._id)
            state[index].quantity += 1
            return [...state]


        case 'Decrease':
            const indexD = state.findIndex(product => product._id === action._id)
            state[indexD].quantity -= 1
            return [...state]


    }

}





export default cartReducer 