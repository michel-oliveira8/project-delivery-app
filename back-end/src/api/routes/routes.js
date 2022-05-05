const express = require('express');
const { getLogin } = require('../controllers/Login');
const { create: createUser } = require('../controllers/Register');
const { getAll } = require('../controllers/Products');
const { create: createSale } = require('../controllers/Sales');

const router = express.Router();

router.post('/login', getLogin);
router.post('/register', createUser);
router.get('/products', getAll);
router.post('/sales', createSale);

module.exports = router;
