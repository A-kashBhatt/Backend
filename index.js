const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');


const db = require('./config');


const server = express();
const port = 8000;

server.use(cors());
server.use(bodyParser.json());

server.use('/', require('./routes'));



server.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server running on port ', port);
})