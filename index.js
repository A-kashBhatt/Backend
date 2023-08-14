const express = require('express');

const server = express();
const port = 8000;

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server running on port ', port);
})