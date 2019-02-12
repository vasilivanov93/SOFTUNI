const express = require('express');
const port = 3000;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const config = require('./config/config');
const database = require('./config/database.config');

let app = express();
let environment = process.env.NODE_EVN || 'development';

database(config[environment]);
require('./config/express')(app, config[environment]);
require('./config/routes')(app);
require('./config/passport')();

app.listen(port, () => { console.log(`Listening on port ${port}: http://localhost:3000/`)});