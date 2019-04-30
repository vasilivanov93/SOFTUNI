const User = require('../models/User');
const Project = require('../models/Project');
const Team = require('../models/Team');

module.exports = {
    getCreateTeam: (req, res) => {
        res.render('team/create');
    },
    postCreateTeam: (req, res) => {
        let teamBody = req.body;

        Team.create({
            name: teamBody.name
        }).then(() => {
            res.redirect('/');
        }).catch((err) => {
            console.log(err);
        });
    },
    getCreateProject: (req, res) => {
        res.render('project/create');
    },
    postCreateProject: (req, res) => {
        let projectBody = req.body;

        Project.create({
            name: projectBody.name,
            description: projectBody.description
        }).then(() => {
            res.redirect('/');
        }).catch((err) => {
            console.log(err);
        });
    },
    getProjectsAdmin: (req, res) => {
        Team.find().then((teams) => {
            Project.find().exists('team', false).then((projects) => {

                res.render('project/projectsAdmin', {teams, projects});
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    },
    postProjectsAdmin: (req, res) => {
        let ids = req.body.name;

        let teamId = ids[0];
        let projectId = ids[1];

        Team.findById(teamId).then((team) => {
            Project.findById(projectId).then((project) => {
                project.team = team.name;

                project.save().then(() => {
                    team.projects = team.projects.concat(project);

                    team.save().then(() => {
                        res.redirect('/');
                    })
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    },
    getTeamsAdmin: (req, res) => {
        User.find().where('teams').equals([]).then((users) => {
            Team.find().then((teams) => {
                res.render('team/teamsAdmin', {users, teams})
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    },
    postTeamsAdmin: (req, res) => {
        let userId = req.body.username;
        let teamId = req.body.name;

        User.findById(userId).then((user) => {
            user.teams = user.teams.concat(teamId);

            user.save().then(() => {
                Team.findById(teamId).then((team) => {
                    team.members = team.members.concat(user);

                    team.save().then(() => {
                        res.redirect('/');
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }
};