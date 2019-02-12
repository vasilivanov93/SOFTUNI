const mongoose = require('mongoose');

const editSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId },
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
    content: { type: mongoose.Schema.Types.String },
    article: { type: mongoose.Schema.ObjectId, ref: 'Article' }

});

const Edit = mongoose.model('Edit', editSchema);

module.exports = Edit;