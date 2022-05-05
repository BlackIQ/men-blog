const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let path = './learns/net/views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/panel':
            res.statusCode = 301;
            res.setHeader('Location', '/');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (error, data) => {
        if (error) {
            res.write(error);
            res.end();
        } else {
            res.write(data.toString());
            res.end();
        }
    });
});

server.listen(4500, 'localhost', () => {
    console.log('Server is up.');
});