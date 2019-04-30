const Cat = require('../models').Cat;

module.exports = {
    index: (req, res) => {
        Cat.findAll().then(cats => {
            res.render("cat/index.hbs", { 'cats': cats });
        });
    },

    createGet: (req, res) => {
        res.render("cat/create.hbs");
    },

    createPost: (req, res) => {
        let args  = req.body.cat;

        Cat.create(args).then(() => {
            res.redirect('/');
        });
    },

    editGet: (req, res) => {
       let id = req.params.id;

       Cat.findById(id).then(cat => {
           res.render('cat/edit.hbs', { 'cat': cat });
       });
    },

    editPost: (req, res) => {
        let id = req.params.id;

        let args = req.body.cat;
        Cat.findById(id).then(cat => {
            cat.updateAttributes(args).then(() => {
                res.redirect('/');
            });
        });
    },

    deleteGet: (req, res) => {
        let id = req.params.id;

        Cat.findById(id).then(cat => {
            res.render('cat/delete.hbs', { 'cat': cat });
        });
    },

    deletePost: (req, res) => {
        let id = req.params.id;

        Cat.findById(id).then(cat => {
            cat.destroy().then(() => {
                res.redirect('/');
            })
        })
    }
};
