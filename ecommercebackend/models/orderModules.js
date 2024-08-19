const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    productDetail: { type: Array, default: [] },
    email: { type: String, default: '' },

    paymentDetail: {
        paymentId: { type: String, required: true },
        payment_method_type: [],
        payment_status: { type: String, required: true },

    },


    shipping_options: [],
    totalAmount: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})




const Order = mongoose.model('Order', orderSchema)
module.exports = Order