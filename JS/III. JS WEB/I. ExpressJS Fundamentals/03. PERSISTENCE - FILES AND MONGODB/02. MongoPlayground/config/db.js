const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/MongoPlayground';

module.exports =  mongoose.connect(connectionString, { useNewUrlParser: true });

require('../models/TagSchema');
require('../models/ImageSchema');