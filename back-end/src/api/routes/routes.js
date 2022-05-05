const express = require('express');
const { getLogin } = require('../controllers/Login');
const { create: createUser, findByRole } = require('../controllers/Users');
const { getAll } = require('../controllers/Products');
const { create: createSale, findAll, findById } = require('../controllers/Sales');

const router = express.Router();

router.post('/login', getLogin);
router.post('/register', createUser);
router.get('/user/:role', findByRole);
router.get('/products', getAll);
router.get('/sales', findAll);
router.get('/sales/:id', findById);
router.post('/sales', createSale);

module.exports = router;
