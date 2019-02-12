const Article = require('../models/Article');
const Edit = require('../models/Edit');
const User = require('../models/User');

module.exports = {
    getCreate: (req, res) => {
        res.render('article/create');
    },
    postCreate: (req, res) => {
        let title = req.body.title;
        let content = req.body.content;
        let author = req.user._id;

        Article.create({title: title})
            .then((article) => {
                Edit.create({content, author, article: article._id}).then(() => {
                    res.render('home/index', article);
                })
            })
            .catch((err) => {
                console.log(err);
            });
    },
    getArticle: (req, res) => {
        let articleId = req.params.articleId;
        let isLock = true;

        Article.findById(articleId).then((article) => {
            Edit.find({article: articleId})
                .sort({creationDate: 'descending'})
                .limit(1)
                .then((editArticles) => {
                res.render('article/article', {title: article.title, _id: articleId, editArticles, isLock});
            });
        }).catch((err) => {
            console.log(err);
        });
    },
    getAllArticles: (req, res) => {
        Article.find().then((articles) => {
           articles.sort((a, b) => a.title.localeCompare(b.title));
           res.render('article/allArticles', {articles});
        }).catch((err) => {
            console.log(err);
        })
    },
    getHistory: (req, res) => {
        let articleId = req.params.articleId;
        let arrCreationDate = [];
        Article.findById(articleId).populate('edits').then((article) => {

           for (let edit of article.edits) {
               User.findById(edit.author).then((user) => {
                   arrCreationDate.push({creationDate: edit.creationDate, author: user.username});
               });
           }
            res.render('article/history', {edit: arrCreationDate})
        }).catch((err) => {
            console.log(err);
        });
    },
    getLatest: (req, res) => {
        Article.find()
            .sort((a, b) => a.creationDate - b.creationDate)
            .limit(1)
            .then((articles) => {
                Edit.find().then((editArticles) => {
                    editArticles = editArticles.slice(-3).reverse();
                    res.render('article/article', {editArticles, id: articles._id});
                });
            })
            .catch((err) => {
                console.log(err);
            });
    },
    lockArticle: (req, res) => {
        let isLock = false;
        Article.findById(req.params.articleId).then((article) => {
            article.lockedStatus = true;
            isLock = true;
            article.save().then(() => {
                res.render(`/article/article/${req.params.articleId}`, {article, isLock});
            });
        }).catch((err) => {
            console.log(err);
        })
    },
    unlockArticle: (req, res) => {
        let isLock = true;
        console.log(req.params.articleId)
        Article.findById(req.params.articleId).then((article) => {
            article.lockedStatus = false;
            isLock = false;
            article.save().then(() => {
                res.render(`/article/article/${req.params.articleId}`, {article, isLock});
            });
        }).catch((err) => {
            console.log(err);
        })
    }
};