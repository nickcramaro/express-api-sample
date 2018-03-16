const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const auth = require('./routes/auth.routes');
const movies = require('./routes/movie.routes');

app.use(bodyParser.json());

// adding headers
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

// adding middleware to intercept requests and check for token
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], 'SECRET', (err, decoded) => {
            req.user = err ? undefined : decoded;
            next();
        })
    } else {
        req.user = undefined;
        next();
    }
});

// registering routes
auth(app);
movies(app);

app.listen(8080);