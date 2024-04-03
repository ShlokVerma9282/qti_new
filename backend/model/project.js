const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    about: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema)