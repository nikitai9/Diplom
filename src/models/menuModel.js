const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Price: { type: Number, required: true },
    Picture: { type: Buffer, required: true },
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
