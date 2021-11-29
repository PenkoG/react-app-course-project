const mongoose = require('mongoose');

function dbConnect() {
    return mongoose.connect('mongodb://localhost:27017/wildlife-photography')
}

module.exports = dbConnect;