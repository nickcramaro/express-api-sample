module.exports = (app) => {

    let movies = [
        {
            id: 1,
            name: 'Shape of Water'
        }, {
            id: 2,
            name: 'Moonlight'
        }, {
            id: 3,
            name: 'Spotlight'
        }, {
            id: 4,
            name: 'Birdman or (The Unexpected Virtue of Ignorance)'
        }, {
            id: 5,
            name: '12 Years a Slave'
        }, {
            id: 6,
            name: 'Argo'
        }
    ];

    app.get('/movie', (req, res) => {
        res.send(movies);
    });

    app.get('/movie/:id', (req, res) => {
        let movie = movies.find(m => m.id === Number(req.params.id));
        res.send(movie);
    });

    app.post('/movie', (req, res) => {
        let newMovie = {
            id: movies[movies.length - 1].id + 1,
            name: req.body.name
        };
        movies.push(newMovie);
        res.send(newMovie);
    });

    app.put('/movie', (req, res) => {
        let updatedMovie;
        movies.forEach((m, i) => {
            if (m.id === req.body.id) {
                m.name = req.body.name;
                updatedMovie = m;
            }
        });
        res.send(updatedMovie);
    });

    app.delete('/movie/:id', (req, res) => {
        let deletedMovie;
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === Number(req.params.id)) {
                deletedMovie = movies[i];
                movies.splice(i, 1);
                break;
            }
        }
        res.send(deletedMovie);
    });
}