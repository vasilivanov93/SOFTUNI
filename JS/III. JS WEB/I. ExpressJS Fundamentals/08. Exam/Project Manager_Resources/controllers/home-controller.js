const Team = require('../models/Team');
const Project = require('../models/Project');

module.exports = {
    index: (req, res) => {
        res.render('home/index');
    },
    searchTeam: (req, res) => {
        let nameSearch = req.query.search;

        Team.find().then((teams) => {
            teams = teams.filter(t => t.name.toLowerCase().includes(nameSearch.toLowerCase()));

            res.render('users/searchResultTeam', {teams, nameSearch})
        }).catch((err) => {
            console.log(err);
        });
    },
    searchProject: (req, res) => {
        let nameSearch = req.query.search;

        Project.find().then((projects) => {
            projects = projects.filter(t => t.name.toLowerCase().includes(nameSearch.toLowerCase()));


            res.render('users/searchResultsProject', {projects, nameSearch})
        }).catch((err) => {
            console.log(err);
        });
    }
};