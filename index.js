const express = require('express'); 
const app = express();
const port = 3000;
const mongoose = require('mongoose');

var students = require('./Routes/students');
var professors = require('./Routes/professors');

app.use(express.json()); 

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