const Order = require('../models/Order');
const Product = require('../models/Product');

module.exports = {
    orderGet: (req, res) => {
        let productId = req.params.productId;

        Product.findById(productId)
            .then((product) => {
                res.render('order/customizeOrder', product)
            })
            .catch((e) => {
                console.log(e);
            });
    },
    orderPost: (req, res) => {
        let productBody = req.body;

        let orderObj = {
            creator: req.user._id,
            product: productBody.product_id,
            toppings: productBody.toppings,
            status: "Pending"
        };

        Order.create(orderObj)
            .then((order) => {
                console.log(order);
                res.redirect(`/orderDetails/${order._id}`)
            })
            .catch((e) => {
                console.log(e);
            });
    },
    orderDetails: (req, res) => {
        let orderId = req.params.orderId;

        Order.findById(orderId)
            .populate('product')
            .then((order) => {
                order.isPending = order.status === "Pending" ? true : false;
                order.isInProgress = order.status === "In Progress" ? true : false;
                order.isInTransit = order.status === "In Transit" ? true : false;
                order.isDelivered = order.status === "Delivered" ? true : false;

                res.render('order/orderDetails', {order});
            })
            .catch((e) => {
                console.log(e);
            });
    },
    orderStatus: (req, res) => {
        let userId = req.user._id;

        Order.find({creator: userId})
            .populate('product')
            .then((orders) => {
                res.render('order/orderStatus', {orders})
            })
            .catch((e) => {
                console.log(e);
            });
    },
    getAllOrders: (req, res) => {
        Order.find()
            .populate('product')
            .then((orders) => {
                res.render('order/allOrders', {orders})
            })
            .catch((e) => {
                console.log(e);
            });
    },
    postAllOrders: (req, res) => {
        let reqBody = req.body;

        for (let id in reqBody) {
            Order.findById(id)
                .then((orders) => {
                    orders.status = reqBody[id];
                    orders.save();
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        res.redirect('/order/allOrders');
    }
};