const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, auth');

    next();
};

app.use(allowCrossDomain);

app.use(routes);

var dirname = "./dist/frontend";

app.use(express.static(dirname));

app.get('/*', function(req, res) {
    res.sendfile(path.join(dirname, 'index.html'))
});

app.listen(8080, (error) => {
    console.log("Server Running at port 8080");
});