const Professor = require("../models/professor");

const create = (req, res) => {
    Professor.create({
        name: req.body.name,
        age: req.body.age
    }).then(newProfessor => {
        res.status(200).json(newProfessor);
    }).catch(error => {
        res.status(400).send(error);
    })
}

const list = (res) => {
    Professor.find(function (err, professors) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(professors);
    })
}

const updateProfessorByName = (req, res) => {
    Professor.updateOne({name: req.params.name}, {age: req.body.age}, function (err, professors) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(professors);
    })
}

const getProfessorsByName = (req,res) => {
    Professor.find({name: req.params.name}, function (err, professors) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(professors);
    })
}

const deleteProfessorByName = (req, res) => {
    Professor.deleteOne({name: req.params.name}, function (err, professors) {
        if(err) {
            res.status(400).send(err);
        }
        res.status(200).json(professors)
    })
}


exports.create = create;
exports.list = list;
exports.getProfessorsByName = getProfessorsByName;
exports.deleteProfessorByName = deleteProfessorByName;
exports.updateProfessorByName = updateProfessorByName;