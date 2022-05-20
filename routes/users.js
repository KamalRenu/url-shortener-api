const express = require('express');
const router = express.Router();
const Reg = require('../modules/usersModule')

router.post('/register', Reg.register);
router.post('/login', Reg.login);

module.exports = router;