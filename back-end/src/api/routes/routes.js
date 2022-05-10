const express = require('express');
const { getLogin } = require('../controllers/Login');
const { create: createUser,
  findByRole,
  createAsAdmin,
  findAllAsAdmin } = require('../controllers/Users');
const { getAll } = require('../controllers/Products');
const { create: createSale,
  createSalesProducts, findAll, findById } = require('../controllers/Sales');

const router = express.Router();

router.post('/login', getLogin);
router.post('/register', createUser);
router.post('/register/admin', createAsAdmin);
router.post('/sales', createSale);
router.post('/sales/:id/products', createSalesProducts);
router.get('/sales', findAll);
router.get('/user/:role', findByRole);
router.get('/products', getAll);
router.get('/sales/:id', findById);
router.get('/users/admin', findAllAsAdmin);
router.get('/orders', findAll);

module.exports = router;
