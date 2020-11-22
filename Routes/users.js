const express = require('express')
const router = express.Router();
const users_controller = require('../controllers/users')
const { validationResult, body } = require('express-validator')



router.get('/list', function(req, res){
    users_controller.list(res);
})

router.post('/login',  function (req, res) {
    users_controller.login(req, res); 
})

router.post('/register', [
    body('username').notEmpty().escape(), 
    body('password').notEmpty().escape()
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        users_controller.register(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

module.exports = router