const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);

    app.get('/article/search', controllers.home.search);

    app.get('/users/register', restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/users/register', restrictedPages.isAnonymous, controllers.user.registerPost);

    app.get('/users/login', restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/users/login', restrictedPages.isAnonymous, controllers.user.loginPost);

    app.get('/users/logout', restrictedPages.isAuthed, controllers.user.logout);

    app.get('/article/create', restrictedPages.isAuthed, controllers.article.getCreate);
    app.post('/article/create', restrictedPages.isAuthed, controllers.article.postCreate);

    app.get('/article/article/:articleId', controllers.article.getArticle);

    app.get('/article/edit/:articleId', restrictedPages.isAuthed, controllers.edit.getEdit);
    app.post('/article/edit/:articleId', restrictedPages.isAuthed, controllers.edit.postEdit);

    app.get('/article/allArticles', controllers.article.getAllArticles);

    app.get('/article/article', restrictedPages.isAuthed, controllers.article.getLatest);

    app.get('/article/history/:articleId', restrictedPages.isAuthed, controllers.article.getHistory);

    app.post('/article/lock/:articleId', restrictedPages.hasRole('Admin'), controllers.article.lockArticle);
    app.post('/article/unlock/:articleId', restrictedPages.hasRole('Admin'), controllers.article.unlockArticle);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};