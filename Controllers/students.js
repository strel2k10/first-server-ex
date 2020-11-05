const Student = require("../models/student");

const create = (req, res) => {
    Student.create({
        name: req.body.name,
        age: req.body.age
    }).then(newStudent => {
        res.status(200).json(newStudent);
    }).catch(error => {
        res.status(400).send(error);
    })
}

const list = (res) => {
    Student.find(function (err, students) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(students);
    })
}

const getStudentsByName = (req,res) => {
    Student.find({name: req.params.name}, function (err, students) {
        if (err) {
            res.status(400).send(err);
        }
        resizeTo.status(200).json(students);
    })
}

const deleteStudentByName = (req, res) => {
    Professor.deleteOne({name: req.params.name}, function (err, students) {
        if(err) {
            res.status(400).send(err);
        }
        res.status(200).json(students)
    })
}



exports.create = create;
exports.list = list;
exports.getStudentsByName = getStudentsByName;
exports.deleteStudentByName = deleteStudentByName;