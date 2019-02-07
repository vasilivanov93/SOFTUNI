const restrictedPages = require('./auth');

const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const productController = require('../controllers/product');
const orderController = require('../controllers/order');

module.exports = app => {
    app.get('/', homeController.index);

    app.get('/user/register', restrictedPages.isAnonymous, userController.registerGet);
    app.post('/user/register', restrictedPages.isAnonymous, userController.registerPost);

    app.get('/user/login', restrictedPages.isAnonymous, userController.loginGet);
    app.post('/user/login', restrictedPages.isAnonymous, userController.loginPost);

    app.get('/user/logout', restrictedPages.isAuthed, userController.logout);

    app.get('/product/create', restrictedPages.hasRole('Admin'), productController.createGet);
    app.post('/product/create', restrictedPages.hasRole('Admin'), productController.createPost);

    app.get('/product/edit/:id', restrictedPages.hasRole('Admin'), productController.editGet);
    app.post('/product/edit/:id', restrictedPages.hasRole('Admin'), productController.editPost);

    app.get('/product/delete/:id', restrictedPages.hasRole('Admin'), productController.deleteGet);
    app.post('/product/delete/:id', restrictedPages.hasRole('Admin'), productController.deletePost);

    app.get('/order/customizeOrder/:productId', restrictedPages.isAuthed, orderController.orderGet);
    app.post('/order/customizeOrder/:productId', restrictedPages.isAuthed, orderController.orderPost);

    app.get('/orderDetails/:orderId', restrictedPages.isAuthed, orderController.orderDetails);

    app.get('/order/orderStatus', restrictedPages.isAuthed, orderController.orderStatus);

    app.get('/order/allOrders', restrictedPages.hasRole('Admin'), orderController.getAllOrders);
    app.post('/order/allOrders', restrictedPages.hasRole('Admin'), orderController.postAllOrders);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};