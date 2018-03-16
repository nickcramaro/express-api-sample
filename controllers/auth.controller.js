const jwt = require('jsonwebtoken');
const user = {
    email: 'ncramaro@brainstation.io',
    password: '123learn'
};

exports.login = (req, res) => {
    if (req.body.password === user.password) {
        res.json({
            token: jwt.sign({
                email: user.email
            }, 'SECRET')
        });
    }
}

exports.authRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res
            .status(403)
            .send({error: 'FAIL'});
    }
}