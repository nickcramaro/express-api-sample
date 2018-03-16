module.exports = (app) => {
    const authController = require('../controllers/auth.controller');

    app.post('/login', authController.login);
}