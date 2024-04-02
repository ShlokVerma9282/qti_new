const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/QTI')
    .then(() => console.log("Connected to database!"))

module.exports = mongoose.connection;
