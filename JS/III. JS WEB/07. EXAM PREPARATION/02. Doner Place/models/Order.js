const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    creationDate: {type: mongoose.Schema.Types.Date, default: Date.now, required: true},
    toppings: [{type: mongoose.Schema.Types.String}],
    status: {type: mongoose.Schema.Types.String, required: true}
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;