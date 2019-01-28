const Cube = require('../models/Cube');

function handleQueryErrors(name, from, to) {
    let errors = [];

    if (!name) {
        errors.push('Name is required!');
    }

    if (from < 0 || from > 6) {
        errors.push('From must be between 1 and 6!');
    }

    if (to < 0 || to > 6) {
        errors.push('To must be between 1 and 6!')
    }

    if (!from || !to) {
        errors.push('All fields for difficulties is required!');
    }

    if (from > to) {
        errors.push('From must be less than to!');
    }

    return errors;
}

module.exports = {
    searchGet: async (req, res) => {
        let {name, from, to} = req.query;
        from = Number(from);
        to = Number(to);

        let errors = handleQueryErrors(name, from, to);
        if (errors.length > 0) {
            res.locals.globalErrors = handleQueryErrors(name, from, to);
            try {
                let cubes = await Cube.find();
                res.render('index', {cubes: cubes});
            } catch (err) {
                console.log(err);
            }
        }

        if (name && from && to) {
            Cube.find().where('difficulty').gte(from).lte(to).then((cubes) => {
                let filteredCubes = cubes.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
                res.render('index', {cubes: filteredCubes});
            }).catch((err) => {
                console.log(err);
            });
        } else if (name) {
            Cube.find({name: name}, {$elemMatch: {$gt: 1, $lt: 6}}).then((cubes) => {
                let filteredCubes = cubes.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
                res.render('index', {cubes: filteredCubes});
            }).catch((err) => {
                console.log(err);
            });
        }
    }
};