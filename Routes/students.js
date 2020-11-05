const express = require('express')
const router = express.Router();
var students_controller = require('../Controllers/students')
const { validationResult, body, param } = require('express-validator')

router.get('/', function(req, res){
    students_controller.list(res);
})

router.get('/:name', [
    param('name').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        students_controller.getStudentsByName(req,res);
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.post('/', [
    body('name').notEmpty().escape(),
    body('age').isNumeric()
], function (req,res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        students_controller.create(req, res);
    } else {
        res.status(404).json({errors: errors.array()})
    }
})


router.delete('/:name', function(req,res) {
    students_controller.deleteStudentByName(req,res);
    }
)


module.exports = router; 