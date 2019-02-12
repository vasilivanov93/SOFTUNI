const Cube = require('../models/Cube');

module.exports = {
    homeGet: (req, res) => {
        Cube.find()
            .select(' _id name imageUrl difficulty')
            .sort('-difficulty')
            .then((cubes) => {
            res.render('index', {cubes: cubes});
        })
            .catch((err) => {
           console.log(err);
        });
    },
    aboutGet: (req, res) => {
        res.render('about');
    }
};