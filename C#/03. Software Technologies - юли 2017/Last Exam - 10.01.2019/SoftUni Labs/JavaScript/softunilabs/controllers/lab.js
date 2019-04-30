const Lab = require('../models').Lab;

module.exports = {
    index: (req, res) => {
        Lab.findAll().then(labs => {
            res.render("lab/index.hbs", { 'labs': labs });
        });
    },

    createGet: (req, res) => {
        res.render("lab/create.hbs");
    },

    createPost: (req, res) => {
        let args  = req.body.lab;

        Lab.create(args).then(() => {
            res.redirect('/');
        });
    },

    editGet: (req, res) => {
        let id = req.params.id;

        Lab.findById(id).then(lab => {
            res.render('lab/edit.hbs', { 'lab': lab });
        });
    },

    editPost: (req, res) => {
        let id = req.params.id;

        let args = req.body.lab;
        Lab.findById(id).then(lab => {
            lab.updateAttributes(args).then(() => {
                res.redirect('/');
            });
        });
    },

    deleteGet: (req, res) => {
        let id = req.params.id;

        Lab.findById(id).then(lab => {
            res.render('lab/delete.hbs', { 'lab': lab });
        });
    },

    deletePost: (req, res) => {
        let id = req.params.id;

        Lab.findById(id).then(lab => {
            lab.destroy().then(() => {
                res.redirect('/');
            })
        })
    }
};