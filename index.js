require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const utilities = require('./utilities/utilities');

var users = require('./Routes/users');
var students = require('./Routes/students');
var professors = require('./Routes/professors');

// SWAGGER

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require ("./swagger.json");

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {explorer: true}));

const auth = function(req, res, next) {
    let exceptions = ['/login', '/register', '/list', '/api-docs']; 
    if(exceptions.indexOf(req.url) >= 0) {
        next();
    } else {
        utilities.validateToken(req.headers.authorization, (result) => {
            if(result) {
                next(); 
            } else {
                res.status(401).send("Invalid Token"); 
            }
        })
    }
}

app.use(express.json()); 
// app.use(auth);
app.use('/', users);
app.use('/students', students);
app.use('/professors', professors);



// MONGOOSE
mongoose.connect('mongodb+srv://tsiw:GAa8xvmV3eKrVa8C@cluster0.b0vmz.mongodb.net/TSIW?retryWrites=t rue&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected to mongoose")
});


app.listen(port, () => {
    console.log("App is running on " + port);
})