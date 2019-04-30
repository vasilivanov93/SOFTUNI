const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);

    app.get('/users/register', restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/users/register', restrictedPages.isAnonymous, controllers.user.registerPost);
    app.post('/users/logout', restrictedPages.isAuthed, controllers.user.logout);
    app.get('/users/login', restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/users/login', restrictedPages.isAnonymous, controllers.user.loginPost);

    app.get('/team/create', restrictedPages.hasRole('Admin'), controllers.admin.getCreateTeam);
    app.post('/team/create', restrictedPages.hasRole('Admin'), controllers.admin.postCreateTeam);

    app.get('/project/create', restrictedPages.hasRole('Admin'), controllers.admin.getCreateProject);
    app.post('/project/create', restrictedPages.hasRole('Admin'), controllers.admin.postCreateProject);

    app.get('/project/projectsAdmin', restrictedPages.hasRole('Admin'), controllers.admin.getProjectsAdmin);
    app.post('/project/projectsAdmin', restrictedPages.hasRole('Admin'), controllers.admin.postProjectsAdmin);

    app.get('/team/teamsAdmin', restrictedPages.hasRole('Admin'), controllers.admin.getTeamsAdmin);
    app.post('/team/teamsAdmin', restrictedPages.hasRole('Admin'), controllers.admin.postTeamsAdmin);

    app.get('/users/projectsUser', restrictedPages.isAuthed, controllers.user.getProjectsUser);

    app.get('/users/teamsUser', restrictedPages.isAuthed, controllers.user.getTeamsUser);

    app.get('/users/profile', restrictedPages.isAuthed, controllers.user.getProfile);

    app.post('/leaveTeam', restrictedPages.isAuthed, controllers.user.leaveTeam);

    app.get('/searchTeam', controllers.home.searchTeam);

    app.get('/searchProject', controllers.home.searchProject);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};