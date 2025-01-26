//create web server
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    //set the content type
    res.setHeader('Content-Type', 'text/html');

    //set the path to the file
    let filePath = path.join(__dirname, 'comments.html');

    //read the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
});