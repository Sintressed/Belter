
const mongoose = require('../config/mongoose.js');
const Schema = mongoose;

const ProductSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    price: Number
})
const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;