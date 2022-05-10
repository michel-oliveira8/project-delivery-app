const md5 = require('md5');
const services = require('../services/Users');

const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
  
    const createUser = await services.create(name, email, md5(password), 'customer');
    
    return res.status(createUser.status).json(createUser.message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const findByRole = async (req, res) => {
  try {
    const { role } = req.params;

    const userList = await services.findByRole(role);
    
    return res.status(userList.status).json(userList.message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createAsAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
  
    const createUser = await services.create(name, email, md5(password), role);
    console.log(createUser);
    
    return res.status(createUser.status).json(createUser.message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  findByRole,
  createAsAdmin,
};