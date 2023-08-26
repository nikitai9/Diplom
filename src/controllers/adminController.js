const Admin = require('../models/adminModel');

exports.register = (req, res) => {
    const adminData = req.body;
    const newAdmin = new Admin(adminData);

    newAdmin.save((err, admin) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(201).json(admin);
        }
    });
};

exports.login = (req, res) => {
    const { Login, Password } = req.body;

    Admin.findOne({ Login, Password }, (err, admin) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (admin) {
                res.status(200).json(admin);
            } else {
                res.status(404).json({ error: 'Admin not found' });
            }
        }
    });
};
