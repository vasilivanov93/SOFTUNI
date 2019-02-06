const restrictedPages = require('./auth');
const homeController = require('../controllers/home');
const userController = require('../controllers/user');

module.exports = (app) => {
    app.get('/', homeController.index);
    app.get('/user/register', restrictedPages.isAnonymous, userController.registerGet);
    app.post('/user/register', restrictedPages.isAnonymous, userController.registerPost);

    app.get('/user/login', restrictedPages.isAnonymous, userController.loginGet);
    app.post('/user/login', restrictedPages.isAnonymous, userController.loginPost);

    app.get('/user/logout', restrictedPages.isAuthed, userController.logout);

    app.get('/article/create', restrictedPages.isAuthed, homeController.articleGet);
    app.post('/article/create', restrictedPages.isAuthed, homeController.articlePost);

    app.get('/article/details/:id', homeController.detailsGet);

    app.get('/article/edit/:id', homeController.editGet);
    app.post('/article/edit/:id', homeController.editPost);

    app.get('/article/delete/:id', homeController.deleteGet);
    app.post('/article/delete/:id', homeController.deletePost);
};

