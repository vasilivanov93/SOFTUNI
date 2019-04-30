const Baby = require('../models').Baby;

module.exports = {
    index: (req, res) => {
        Baby.findAll().then(babies => {
            res.render("baby/index.hbs", { 'babies': babies });
        });
    },

    createGet: (req, res) => {
        res.render("baby/create.hbs");
    },

    createPost: (req, res) => {
        let args  = req.body.baby;

        Baby.create(args).then(() => {
            res.redirect('/');
        });
    },

    editGet: (req, res) => {
        let id = req.params.id;

        Baby.findById(id).then(baby => {
            res.render('baby/edit.hbs', { 'baby': baby });
        });
    },

    editPost: (req, res) => {
        let id = req.params.id;

        let args = req.body.baby;
        Baby.findById(id).then(baby => {
            baby.updateAttributes(args).then(() => {
                res.redirect('/');
            });
        });
    },

    deleteGet: (req, res) => {
        let id = req.params.id;

        Baby.findById(id).then(baby => {
            res.render('baby/delete.hbs', { 'baby': baby });
        });
    },

    deletePost: (req, res) => {
        let id = req.params.id;

        Baby.findById(id).then(baby => {
            baby.destroy().then(() => {
                res.redirect('/');
            })
        })
    }
};