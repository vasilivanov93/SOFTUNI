const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    let Baby = sequelize.define("Baby",{
        name: {
            type: Sequelize.TEXT,
        },
        gender: {
            type: Sequelize.TEXT,
        },
        birthday: {
            type: Sequelize.DATE,
        }

    },{
        timestamps:false
    });

    return Baby;
};