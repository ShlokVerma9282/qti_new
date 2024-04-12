const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    about: String,
    setting: {},
    video: {},
    topics: [{}],
    price: Number,
    discountedPrice: Number

}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema)