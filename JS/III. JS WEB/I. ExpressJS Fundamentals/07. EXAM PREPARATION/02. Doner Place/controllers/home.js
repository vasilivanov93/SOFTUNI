const Product = require('../models/Product');

module.exports = {
    index: (req, res) => {
        Product.find({category: 'chicken'}).then((chickenProducts) => {
            Product.find({category: 'beef'}).then((beefProducts) => {
                Product.find({category: 'lamb'}).then((lambProducts) => {
                    res.render('home/index', {chickenProducts, beefProducts, lambProducts});
                })
            })
        })
    }
};
