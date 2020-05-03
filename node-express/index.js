const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const server_app = express();

server_app.use(morgan('dev'));

server_app.use(express.static(__dirname + '/public'));

server_app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><head><title>Welcome</title></head><body><h1>TO MY WORLD B!</h1></body></html>');
});

const server = http.createServer(server_app);
server.listen(port, hostname, () => {
    console.log(`Server started and listening on http://${hostname}:${port}`);
});

