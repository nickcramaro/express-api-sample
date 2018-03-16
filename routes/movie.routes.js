module.exports = (app) => {
    const authController = require('../controllers/auth.controller');
    const movieController = require('../controllers/movie.controller');

    app.get('/movie', movieController.getAll);

    app.get('/movie/:id', movieController.get);

    app.post('/movie', authController.authRequired, movieController.create);

    app.put('/movie', authController.authRequired, movieController.update);

    app.delete('/movie/:id', authController.authRequired, movieController.delete);
}