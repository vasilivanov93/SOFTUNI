const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true },
    memeSrc: { type: mongoose.Schema.Types.String, required: true },
    description: { type: mongoose.Schema.Types.String, required: true },
    privacy:  { type: mongoose.Schema.Types.String },
    dateStamp: { type: mongoose.Schema.Types.Date, required: true, default: Date.now }
});

let Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;