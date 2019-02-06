const mongoose = require('mongoose');
const User = require('../models/User');
mongoose.Promise = global.Promise;

module.exports = config => {
    mongoose.connect(config.dbPath, {
        useCreateIndex: true,
        useNewUrlParser: true
    });

    const db = mongoose.connection;

    db.once('open', err => {
        if (err) {
            console.log(err);
            return;
        }

        User.seedAdminUser().then(() => {
            console.log('Database ready!');
        }).catch((reason) => {
           console.log('Something wen wrong!');
           console.log(reason);
        });
    });

    db.on('error', reason => {
        console.log(reason);
        return;
    });
};