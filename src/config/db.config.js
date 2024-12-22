const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/n20-production').then(() => {
        console.log("Connected to MongoDB");
    }).catch(err => {
        console.error("Error connecting to MongoDB: ", err);
    });
}