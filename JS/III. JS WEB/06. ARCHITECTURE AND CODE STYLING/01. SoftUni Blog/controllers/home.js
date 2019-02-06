const Article = require('../models/Article');
const User = require('../models/User');

module.exports = {
    index: (req, res) => {
        Article.find()
            .populate('author')
            .then((articles) => {
                res.render('home/index', {
                    articles: articles
                });
            })
            .catch((err) => {
                console.log(err);
            });
    },
    articleGet: (req, res) => {
        res.render('article/create');
    },
    articlePost: async (req, res) => {
        let articleBody = req.body;
        articleBody.author = req.user._id;

        try {
            let article = await Article.create(articleBody);
            let articles = await User.findById(articleBody.author);
            articles.articles = articles.articles.concat(article._id);
            await articles.save();
            res.redirect('/');
        } catch (err) {
            console.log(err);
            articleBody.error = 'Please fill all fields!';
            res.render('article/create', articleBody);
        }
    },
    detailsGet: (req, res) => {
        const articleId = req.params.id;

        Article.findById(articleId)
            .populate('author')
            .then((article) => {
                let isAuthor = false;
                if (req.user) {
                    isAuthor = req.user.isAuthor(article);
                }

                res.render('article/details', { article, isAuthor });
            })
            .catch(console.error);
    },
    editGet: (req, res) => {
        const articleId = req.params.id;

        Article.findById(articleId)
            .then((article) => {
                res.render('article/edit', article);
            })
            .catch(console.error);
    },
    editPost: (req, res) => {
        const articleId = req.params.id;
        let articleBody = req.body;

        Article.findById(articleId)
            .then((article) => {
                article.title = articleBody.title;
                article.content = articleBody.content;
                return article.save();
            })
            .then(() => {
                res.redirect('/');
            })
            .catch(console.error);
    },
    deleteGet: (req, res) => {
        let articleId = req.params.id;
        Article.findById(articleId)
            .then((article) => {
                res.render('article/delete', article);
            })
            .catch(console.error);
    },
    deletePost: (req, res) => {
        let articleId = req.params.id;
        Article.findById(articleId)
            .then((a) => {
                return Article.deleteOne({ _id: a._id});
            })
            .then(() => {
                req.user.articles = req.user.articles.filter(a => a.toString() !== articleId);
                return req.user.save();
            })
            .then(() => {
                res.redirect('/');
            })
            .catch(console.error);
    }
};
