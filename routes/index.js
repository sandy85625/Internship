const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/users/profile', passport.checkAuthentication, usersController.profile);

router.get('/', usersController.signUp);
//router.get('/', usersController.signUp);
router.get('/users/sign-in', usersController.signIn);
router.post('/users/create', usersController.create);
router.post('/users/create-session', passport.authenticate(
    'local', { failureRedirect: '/users/sign-in' },
), usersController.createSession);
router.get('/users/sign-out', usersController.destroySession);
module.exports = router;