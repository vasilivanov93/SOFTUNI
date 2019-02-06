const mongoose = require('mongoose');
const propertyIsRequired = '{0} is required.';

const rentSchema = new mongoose.Schema({
    days: { type: mongoose.Schema.Types.Number, required: propertyIsRequired.replace('{0}', 'Days') },
    car: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Car' },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
});

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;