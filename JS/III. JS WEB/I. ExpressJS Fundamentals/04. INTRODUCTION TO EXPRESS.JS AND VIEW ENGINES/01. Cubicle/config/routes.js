const homeControler = require('../controllers/home');
const cubeControler = require('../controllers/cube');
const searchControler = require('../controllers/search');

module.exports = app => {
    app.get('/', homeControler.homeGet);

    app.get('/about', homeControler.aboutGet);

    app.get('/create', cubeControler.createGet);
    app.post('/create', cubeControler.createPost);

    app.get('/details/:id', cubeControler.detailsGet);

    app.get('/search', searchControler.searchGet);
};