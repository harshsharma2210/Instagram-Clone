// DOT ENV
const env = require('dotenv').config()
const serverPort = process.env.PORT;

// REQUIRE
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// DATABASE
mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
});
mongoose.connection.on('connected', () => {
    console.log("Database Connected");
});
mongoose.connection.on('error', () => {
    console.log("ERROR");
});

app.use(express.json());
require('./models/user');
require('./models/post');

app.use(require('./routes/post')); 
app.use(require('./routes/auth'));
app.use(require('./routes/user'));


app.listen(serverPort, () => {
    console.log(`Server running in ${serverPort}`);
});