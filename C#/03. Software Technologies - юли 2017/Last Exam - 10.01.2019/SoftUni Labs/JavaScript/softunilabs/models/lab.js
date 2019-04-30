const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    let Lab = sequelize.define("Lab",{
        name: {
            type: Sequelize.TEXT,
        },
        capacity: {
            type: Sequelize.INTEGER,
        },
        status: {
            type: Sequelize.TEXT,
        }

    },{
        timestamps:false
    });

    return Lab;
};