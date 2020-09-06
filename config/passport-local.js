const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

//------- Confrigation of Passport -----//
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    function(email, password, done) {

      User.findOne({ email: email}, function(err, user) {

        if (err) { 
            return done(err); 
        }
        if (!user) {
            console.log("ERROR: Passport 01");
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.password != password) {
            console.log("ERROR: Passport 02");
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
));

// --------- Confrigation of Sessions ---------//
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
});