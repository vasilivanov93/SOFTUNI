const mongoose = require('mongoose');
const propertyIsRequired = '{0} is required.';

const carSchema = new mongoose.Schema({
    model: { type: mongoose.Schema.Types.String, required: propertyIsRequired.replace('{0}', 'Model') },
    image: { type: mongoose.Schema.Types.String, required: propertyIsRequired.replace('{0}', 'Image') },
    pricePerDay: { type: mongoose.Schema.Types.Number, required: propertyIsRequired.replace('{0}', 'Price per day') },
    isRented: { type: mongoose.Schema.Types.Boolean, required: true, default: false },
    expiresOn: {type: mongoose.Schema.Types.Number, required: true, default: 0, ref: 'Rent'}
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;