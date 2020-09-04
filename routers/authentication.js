const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth_controllers');

router.post('/signup', authControllers.create);

module.exports = router;