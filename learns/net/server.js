const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.write('Home');
        res.end();
    } else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/plain');
        res.write('About');
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.write('404');
        res.end();
    }
});

server.listen(4500, 'localhost', () => {
    console.log('Server is up.');
});