const express = require('express');
const router = express.Router();
const Gamer = require('../models/GamerAccount');
const bcrypt = require('bcrypt');
//const passport = require('passport');

// generating Salt to hash passwords. 
//var BCRYPT_SALT_ROUNDS = 12;

// adding Gamer credentials to database.
router.post('/signup', function(req, res) {
    Gamer.create(req.body).then(function(gamer){
        res.send(gamer);
    });
});

router.post('/login', function(req, res, next) {
    
});

// retrieving and finding data credentials from the post.  
router.get('/signup', function(req, res) {
    Gamer.findOne({}, function(err, gamer) {
        if (err) {
            res.status(500).send({error: "Could not fetch Gamer's gist :( "});
        }
        else {
            res.send(gamer);
        }
    });
});

//update password if user forgets password. 
router.put('/forgot-password', function(req,res) {
    //grab user's email address or username to create new password.
    //1. Query through the database if the user wants to make change. 
    //2. 

});

// user willing to change username. 
router.put('change-user', function(req, res) {
    
});


module.exports = router;