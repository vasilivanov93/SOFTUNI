const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true },
    description: { type: mongoose.Schema.Types.String, required: true },
    price: {
        type: mongoose.Schema.Types.Number,
        min: 0,
        max: Number.MAX_VALUE
    },
    image: { type: mongoose.Schema.Types.String },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

let Product = mongoose.model('Product', productSchema);

module.exports = Product;