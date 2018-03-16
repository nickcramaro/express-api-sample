const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const movies = require('./routes/movie.routes');

app.use(bodyParser.json());

movies(app);

app.listen(8080);