const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/MemeDB';

module.exports =  mongoose.connect(connectionString, { useNewUrlParser: true });

require('../models/MemeSchema');