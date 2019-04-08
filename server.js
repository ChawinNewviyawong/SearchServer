var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use('/api', require('./router/index'));

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});