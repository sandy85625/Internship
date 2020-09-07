const express = require('express');
const router = express.Router();
const passport = require('passport');
const authControllers = require('../controllers/auth_controllers');

// --------- Handel signup --------//
router.post('/signup', authControllers.create);

// --------- handel sign-in --------//
router.post('/login',
        passport.authenticate(
                'local', {
                        failureRedirect: '/signin'
                }
        ),
        authControllers.login
)
// ------- Sign Out -------//
router.get('/signout', authControllers.logout)


// ------- facebook Authentication -------//
router.get('/facebook', passport.authenticate('facebook',{ scope : [ 'email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/login'
}), authControllers.login);


// -------- Google Authentication ---------//


module.exports = router;