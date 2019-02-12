const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true },
    creationDate: { type: mongoose.Schema.Types.Date, required: true, default: Date.now },
    images: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Image' } ]
});

let Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;