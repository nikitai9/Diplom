const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    Login: { type: String, required: true },
    Password: { type: String, required: true },
    Address: { type: String, required: true },
    Number: { type: Number, required: true }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
