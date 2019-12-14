const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const commentSchema = new Schema({
    content: {
        type: comments,
        minlength: 10,
        maxlength: 500
    },
});

module.exports = mongoose.model('Text', commentSchema);


