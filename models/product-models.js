const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: {
        type: String
    },
    panelcolor: {
        type: String
    },
    textcolor: {
        type: String
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
    