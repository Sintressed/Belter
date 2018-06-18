
const mongoose = require('../config/mongoose.js');
const Schema = mongoose;

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'name required'],minlength: [3, 'product name cannot be less than 3 characters'] },
    qty: {type: Number, required: [true,'quantity required'],min: [0, 'quantity cannot be less than 0'] },
    price: {type: Number, required: [true, 'price required'],min: [0 , 'price cannot be less than 0']}
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;