const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    Login: { type: String, required: true },
    Comment: { type: String, required: true }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
