const express = require('express');
const app = express();
const port = 3000;

// Route to send an HTML response that writes to browser console
app.get('/', function (req, res) {
    res.send(
        '<!doctype html>' +
        '<html>' +
        '<head>' +
        '<meta charset="utf-8">' +
        '<title>Hello Express</title>' +
        '</head>' +
        '<body>' +
        '<h1>Check your browser console!</h1>' +
        '<script>' +
        'console.log("Hello World");' +
        '</script>' +
        '</body>' +
        '</html>'
    );
});

app.listen(port, function () {
    console.log('Server is running at http://localhost:' + port);
});