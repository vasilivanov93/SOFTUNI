const User = require('../models/User');
const encryption = require('../util/encryption');

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },
    registerPost: async (req, res) => {
        const reqUser = req.body;

        if (!reqUser.password || !reqUser.repeatPassword) {
            reqUser.error = 'Please fill all fields!';
            res.render('user/register', reqUser);
            return;
        }

        if (reqUser.password !== reqUser.repeatPassword) {
            reqUser.error = 'Password must match!';
            res.render('user/register', reqUser);
            return;
        }

        let salt = encryption.generateSalt();
        let hashedPass = encryption.hashPassword(salt, reqUser.password);

        try {
            const user = await User.create({
                username: reqUser.username,
                hashedPass,
                salt,
                firstName: reqUser.firstName,
                lastName: reqUser.lastName,
                roles: ['User']
            });

            req.logIn(user, (err) => {
                if (err) {
                    reqUser.error = err;
                    res.render('user/register', reqUser);
                    return;
                } else {
                    res.redirect('/');
                }
            });
        } catch (err) {
            reqUser.error = err;
            res.render('user/register', reqUser);
        }

    },
    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    loginGet: (req, res) => {
        res.render('user/login');
    },
    loginPost: (req, res) => {
    const reqUser = req.body;

    User.findOne({username: reqUser.username}).then(user => {
        if (!user) {
            reqUser.error = 'Invalid username!';
            res.render('user/login', reqUser);
            return;
        }

        if (!user.authenticate(reqUser.password)) {
            reqUser.error = 'Invalid password!';
            res.render('user/login', reqUser);
            return;
        }

        req.logIn(user, (err) => {
            if (err) {
                reqUser.error = err;
                res.render('user/login', reqUser);
                return;
            } else {
                res.redirect('/');
            }
        });
    }).catch((err) => {
        reqUser.error = err;
        res.render('user/login', reqUser);
    });
}
};