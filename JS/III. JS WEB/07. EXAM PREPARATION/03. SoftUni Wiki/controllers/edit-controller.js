const Edit = require('../models/Edit');
const Article = require('../models/Article');

module.exports = {
    getEdit: (req, res) => {
        let articleId = req.params.articleId;

        Article.findById(articleId)
            .then((article) => {
                Edit.findOne({article: articleId})
                    .sort({creationDate: 'descending'})
                    .then((editArticle) => {
                    if (editArticle === null) {
                        res.render('article/edit', {title: article.title});
                    } else {
                        res.render('article/edit', {title: article.title, content: editArticle.content, id: articleId});
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    },
    postEdit: (req, res) => {
        Edit.create({
            author: req.user._id,
            content: req.body.content,
            article: req.params.articleId
        }).then((editArticle) => {
            Article.findById(req.params.articleId).then((article) => {
                article.edits = article.edits.concat(editArticle);
                article.save();
                res.redirect('/');
            })
        }).catch((err) => {
            console.log(err);
        });
    },
};