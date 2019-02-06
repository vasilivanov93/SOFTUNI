const Thread = require('../models/Thread');

module.exports = {
    index: (req, res) => {
        if (req.user) {
            if (req.user.roles.indexOf('Admin') !== -1) {
                Thread.find()
                    .populate('users')
                    .then((threads) => {
                        res.render('home/index', {threads});
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } else {
                res.render('home/index');
            }
        } else {
            res.render('home/index');
        }
    }
};