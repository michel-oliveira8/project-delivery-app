const express = require('express');
const { getLogin } = require('../controllers/Login');
const { create } = require('../controllers/Register');
const { getAll } = require('../controllers/Products');

const router = express.Router();

router.post('/login', getLogin);
router.post('/register', create);
router.get('/products', getAll);

module.exports = router;
