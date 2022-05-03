const md5 = require('md5');
const services = require('../services/Register');

const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
  
    const createUser = await services.create(name, email, md5(password), 'customer');
    
    return res.status(createUser.status).json(createUser.message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
};