const express = require('express');
const router = express.Router();
const passport = require('passport');
const authControllers = require('../controllers/auth_controllers');

// --------- Handel signup --------//
router.post('/signup', authControllers.create);

// --------- handel sign-in --------//
router.post('/login', 
            passport.authenticate(
                    'local', 
                    { failureRedirect: '/signin'}
            ),
            authControllers.login
)

module.exports = router;