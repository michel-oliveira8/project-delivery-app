const express = require('express');
const { getLogin } = require('../controllers/Login');
const { create } = require('../controllers/Register');

const router = express.Router();

router.post('/login', getLogin);
router.post('/register', create);

module.exports = router;
