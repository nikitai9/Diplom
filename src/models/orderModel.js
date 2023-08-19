const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    UserID: { type: Number, required: true },
    ProductID: { type: Number, required: true },
    Quantity: { type: Number, required: true },
    TotalPrice: { type: Number, required: true },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
