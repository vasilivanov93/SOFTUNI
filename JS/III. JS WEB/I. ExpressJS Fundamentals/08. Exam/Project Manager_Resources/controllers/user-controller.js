const encryption = require('../util/encryption');
const User = require('mongoose').model('User');
const Project = require('../models/Project');
const Team = require('../models/Team');

module.exports = {
    registerGet: (req, res) => {
        res.render('users/register');
    },
    registerPost: async (req, res) => {
        const reqUser = req.body;
        const salt = encryption.generateSalt();
        const hashedPass =
            encryption.generateHashedPassword(salt, reqUser.password);
        try {
            const user = await User.create({
                username: reqUser.username,
                hashedPass,
                salt,
                firstName: reqUser.firstName,
                lastName: reqUser.lastName,
                imageUrl: reqUser.imageUrl,
                roles: ['User']
            });
            req.logIn(user, (err, user) => {
                if (err) {
                    res.locals.globalError = err;
                    res.render('users/register', user);
                } else {
                    res.redirect('/');
                }
            });
        } catch (e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('users/register');
        }
    },
    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    loginGet: (req, res) => {
        res.render('users/login');
    },
    loginPost: async (req, res) => {
        const reqUser = req.body;
        try {
            const user = await User.findOne({username: reqUser.username});
            if (!user) {
                errorHandler('Invalid user data');
                return;
            }
            if (!user.authenticate(reqUser.password)) {
                errorHandler('Invalid user data');
                return;
            }
            req.logIn(user, (err, user) => {
                if (err) {
                    errorHandler(err);
                } else {
                    res.redirect('/');
                }
            });
        } catch (e) {
            errorHandler(e);
        }

        function errorHandler(e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('users/login');
        }
    },
    getProjectsUser: (req, res) => {
        let isTeam = false;
        Project.find().then((projects) => {
            isTeam = true;
            res.render('users/projectsUser', {projects, isTeam});
        }).catch((err) => {
            console.log(err);
        });
    },
    getTeamsUser: (req, res) => {
        Team.find()
            .select('members projects')
            .populate({path: 'members', select: 'firstName lastName', })
            .populate({path: 'projects', select: 'name'})
            .then((teams) => {
                res.render('users/teamsUser', {teams})
            }).catch((err) => {
            console.log(err);
        });
    },
    getProfile: (req, res) => {
        User.findById(req.user._id).then((user) => {
            Team.findOne({members: user._id}).then((team) => {
                Project.findOne({team: team._id}).then((project) => {
                    res.render('users/profile', {imageUrl: user.imageUrl, team: team.name, projects: project.name})
                });
            });
        }).catch((err) => {
            console.log(err);
        });
    },
    leaveTeam: (req, res) => {
        User.findById(req.user._id).then((user) => {
           user.teams = [];
           user.save().then(() => {
               res.redirect('/')
           })

        })
    }
};