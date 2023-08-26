const Comment = require('../models/commentModel');

exports.addComment = (req, res) => {
    const commentData = req.body;
    const newComment = new Comment(commentData);

    newComment.save((err, comment) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(201).json(comment);
        }
    });
};

exports.getComments = (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(200).json(comments);
        }
    });
};
