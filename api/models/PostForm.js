const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const PostForm = new Schema ({
    titleOfPost: String,
    nameOfUser: {
        type: String,
        ref: 'Gamer',
        required: true,
    },
    like: Number,
    dislike: Number,
    comments: {
        text: String,
        lowercase: true,
        uppercase: true,
    }   
});

module.exports = mongoose.model('Post', PostForm);