const mongoose = require('mongoose');
const propertyIsRequired = '{0} is required.';

const articleSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: propertyIsRequired.replace('{0}', 'Title') },
    content: { type: mongoose.Schema.Types.String, required: propertyIsRequired.replace('{0}', 'Content') },
    author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    date: { type: mongoose.Schema.Types.Date, required: true, default: Date.now }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;


