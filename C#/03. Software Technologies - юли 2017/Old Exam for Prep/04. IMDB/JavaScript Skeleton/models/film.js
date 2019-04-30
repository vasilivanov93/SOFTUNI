const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    let Film = sequelize.define("Film",{
        name: {
            type: Sequelize.TEXT,
        },
        genre: {
            type: Sequelize.TEXT,
        },
        director: {
            type: Sequelize.TEXT,
        },
        year: {
            type: Sequelize.INTEGER,
        }

    },{
        timestamps:false
    });

    return Film;
};