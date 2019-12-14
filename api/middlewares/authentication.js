const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local'); 

const Gamer = require('../models/GamerAccount');

function passwordMatch(submitPassword,storedHashedPassword) {
    return bcrypt.compareSync(submitPassword,storedHashedPassword);
}

passport.use(new LocalStrategy (
    function(username,password, done) {
        Gamer.findOne({username: username}, function(err, user) {
            if (err) {return done(err);}
                if(!user) {
                    return done(null, false, {message: 'Incorrect username'});
                }
                if (!user.v)
        })
    }
))