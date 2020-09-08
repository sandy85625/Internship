const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

//------- Confrigation of Passport -----//
passport.use(new LocalStrategy({
    usernameField: 'email',
    // passwordField: 'password'
  },
  function (email, password, done) {

    User.findOne({
      email: email
    }, function (err, user) {

      if (err) {
        return done(err);
      }
      if (!user) {
        console.log("ERROR: Passport 01");
        return done(null, false, {
          message: 'Incorrect username.'
        });
      }
      if (user.password != password) {
        console.log("ERROR: Passport 02");
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }
      return done(null, user);
    });
  }
));

// --------- Confrigation of Sessions ---------//
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.error('ERROR : Passport 04 User not found');
      return done(err);
    }
    return done(null, user);
  });
});


//-------- Checking Authentication --------//
passport.checkAuthentication = function (req, res, next) {
  console.log('check Authentication');
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/');
}

//--------- Set Authentication to locals -------//
passport.setAuthenticationUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  return next();
}

module.exports = passport;