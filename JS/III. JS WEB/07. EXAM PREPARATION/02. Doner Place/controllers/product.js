const Product = require('../models/Product');

module.exports = {
    createGet: (req, res) => {
        res.render('product/create')
    },
    createPost: (req, res) => {
        let productBody = req.body;
        productBody.size = Number(productBody.size);
        productBody.toppings = productBody.toppings.split(', ');

        Product.create(productBody).then(() => {
            res.redirect('/');
        }).catch((err) => {
            console.log(err);
            productBody.error = 'Please fill all fields!';
            res.render('product/create', productBody);
        })
    },
    editGet: (req, res) => {
        let productId = req.params.id;

        Product.findById(productId).then((product) => {
            product.toppings = product.toppings.join(', ');
            res.render('product/edit', product);
        }).catch((err) => {
            console.log(err);
        });
    },
    editPost: (req, res) => {
        let productId = req.params.id;
        let productBody = req.body;

        productBody.size = Number(productBody.size);
        productBody.toppings = productBody.toppings.split(', ');

        Product.findByIdAndUpdate({_id: productId}, {
                $set: {
                    imageUrl: productBody.imageUrl,
                    size: productBody.size,
                    toppings: productBody.toppings
                }
            })
            .then((product) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
                productBody.error = err;
            });
    },
    deleteGet: (req, res) => {
        let productId = req.params.id;

        Product.findById(productId).then((product) => {
            product.toppings = product.toppings.join(', ');
            res.render('product/delete', product);
        }).catch((err) => {
            console.log(err);
        });
    },
    deletePost: (req, res) => {
        let productId = req.params.id;

        Product.findByIdAndRemove(productId)
            .then(() => {
                res.redirect('/');
            }).catch((err) => {
            console.log(err);
        });
    }
};