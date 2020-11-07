// DOT ENV
const env = require('dotenv').config()
const serverPort = process.env.PORT;

// REQUIRE
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// DATABASE
mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log("Database Connected");
});
mongoose.connection.on('error', () => {
    console.log("ERROR" );
});

app.use(express.json());
require('./models/user');
require('./models/post');

app.use(require('./routes/post'));
app.use(require('./routes/auth'));

app.get('/', (req, res) => {
    res.send("hello world");

});

app.listen(serverPort, () => {
    console.log(`Server running in ${serverPort}`);
});