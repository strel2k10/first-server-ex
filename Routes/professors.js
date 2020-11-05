const express = require('express')
const router = express.Router();
var professors_controller = require('../Controllers/professors')
const { validationResult, body, param } = require('express-validator')

// get all professors
router.get('/', function(req, res){
    professors_controller.list(res);
})


// get professor by name
router.get('/:name', [
    param('name').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        professors_controller.getProfessorsByName(req,res);
    } else {
        res.status(404).json({errors: errors.array()})
    }
})


// create professor
router.post('/', [
    body('name').notEmpty().escape(),
    body('age').isNumeric()
], function (req,res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        professors_controller.create(req, res);
    } else {
        res.status(404).json({errors: errors.array()})
    }
})


// update professor by name
router.put('/:name', function(req,res) {
    professors_controller.updateProfessorByName(req,res);
    }
)

/*
router.put('/', [
    body('name').notEmpty().escape(),
], function (req,res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        professors_controller.updateProfessorByName(req, res);
    } else {
        res.status(404).json({errors: errors.array()})
    }
})
*/


// delete professor by name
router.delete('/:name', function(req,res) {
    professors_controller.deleteProfessorByName(req,res);
    }
)


module.exports = router; 