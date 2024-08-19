const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title: { type: String, require: true },
    price: { type: String, require: true },
    imageUrl: { type: String, require: true },
    category: { type: String, require: true },
    quantity: { type: String, require: true }
})


const Products = mongoose.model('Products', userSchema)

module.exports = Products