const Article = require('../models/Article');
const Edit = require('../models/Edit');

module.exports = {
    index: (req, res) => {
        Article.find()
            .then((articles) => {
                articles = articles.slice(-3).reverse();
                Edit.find()
                    .sort({creationDate: 'descending'})
                    .limit(3)
                    .then((editArticles) => {
                    // editArticles = editArticles.slice(-3).reverse();
                    res.render('home/index', {articles, editArticles, id: articles[0]._id});
                });
            })
            .catch((err) => {
                console.log(err);
            });
    },
    search: (req, res) => {
        let title = req.query.search;

        Article.find().then((articles) => {
            articles = articles.filter(t => t.title.toLowerCase().includes(title.toLowerCase()));

            res.render('article/search-results', {articles, title})
        }).catch((err) => {
            console.log(err);
        });
    }
};