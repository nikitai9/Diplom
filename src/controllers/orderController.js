const Order = require('../models/orderModel');

exports.createOrder = (req, res) => {
    const orderData = req.body;
    const newOrder = new Order(orderData);

    newOrder.save((err, order) => {
        if (err) {
            res.status(500).json({error: 'Internal server error'});
        } else {
            res.status(201).json(order);
        }
    })
};
