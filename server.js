const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/movie', (req, res) => {
    res.send('Get all movies');
});

app.get('/movie/:id', (req, res) => {
    res.send('Get one movie');
});

app.post('/movie', (req, res) => {
    res.send('Add a movie');
});

app.put('/movie', (req, res) => {
    res.send('Update a movie');
});

app.delete('/movie/:id', (req, res) => {
    res.send('Delete a movie');
});

app.listen(8080);