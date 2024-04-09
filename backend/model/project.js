const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: String,
    about: String,
    setting: {},
    video: {},
    topics: [{}]

}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema)