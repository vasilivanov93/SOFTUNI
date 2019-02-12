const Cube = require('../models/Cube');

function handleErrors(err, res) {
    let errors = [];

    for (const prop in err.errors) {
        errors.push(err.errors[prop].message);
    }

    res.locals.globalErrors = errors;
    res.render('create');
}

module.exports = {
    createGet: (req, res) => {
        res.render('create');
    },
    createPost: (req, res) => {
        let cubeBody = req.body;
        cubeBody.difficulty = Number(cubeBody.difficulty);

        Cube.create(cubeBody).then(() => {
            res.redirect('/');
        }).catch((err) => {
           handleErrors(err, res);
        });
    },
    detailsGet: (req, res) => {
        let cubeId = req.params.id;

        Cube.findById(cubeId).then((cube) => {
            res.render('details', cube)
        }).catch((err) => {
            console.log(err);
        });
    }
};