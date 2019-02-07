const mongoose = require('mongoose');
const propertyIsRequired = '{0} is required.';

const productSchema = new mongoose.Schema({
    category: {type: mongoose.Schema.Types.String, required: true},
    imageUrl: {type: mongoose.Schema.Types.String, required: true},
    size: {type: mongoose.Schema.Types.Number, required: true, min: 17, max: 24},
    toppings: [{type: mongoose.Schema.Types.String, required: true}]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;