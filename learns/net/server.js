const http = require('http');

const server = http.createServer((req, res) => {
    console.log('To ' + req.url + ' with ' + req.method + ' method.');
});

server.listen(4500, 'localhost', () => {
    console.log('Server is up.');
});