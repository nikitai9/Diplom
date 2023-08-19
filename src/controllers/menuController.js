const Menu = require('../models/menuModel');

exports.getMenu = (req, res) => {
    Menu.find({}, (err, menu) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(200).json(menu);
        }
    });
};
