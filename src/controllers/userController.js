const User = require('../models/userModel');

exports.register = (req, res) => {
    const userData = req.body;
    const newUser = new User(userData);

    newUser.save((err, user) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(201).json(user);
        }
    });
};

exports.login = (req, res) => {
    const { Login, Password } = req.body;

    User.findOne({ Login, Password }, (err, user) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        }
    });
};
