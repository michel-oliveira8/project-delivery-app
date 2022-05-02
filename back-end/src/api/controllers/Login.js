const md5 = require('md5');
const services = require('../services/Login');

const getLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    const user = await services.getLogin(email, md5(password));
  
    return res.status(user.status).json(user.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLogin,
};
