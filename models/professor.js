const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const professor = mongoose.model('professor', professorSchema);

module.exports = professor;