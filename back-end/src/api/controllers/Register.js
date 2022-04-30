const md5 = require('md5');
const services = require('../services/Register');

const create = async (req, res) => {
  const { name, email, password } = req.body;

  const createUser = await services.create(name, email, md5(password), 'seller');
  
  return res.status(createUser.status).json(createUser.message);
};

module.exports = {
  create,
};