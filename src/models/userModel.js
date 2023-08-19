const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    Login: { type: String, required: true },
    Password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
