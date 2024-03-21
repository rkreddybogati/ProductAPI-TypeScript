export {}

import router from './route/routes'; 
const express = require('express');
const bodyParser = require('body-parser');
//const dbConfig = require('./config/database.config.ts');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/diligent', {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router); 


app.get('/', (req, res) => {
    res.send('Hello from express and typescript');
});

const port = process.env.PORT || 3000;
app.listen(port, function () { 
    console.log('Server is running..');
});




