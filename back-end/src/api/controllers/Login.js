const md5 = require('md5');
const services = require('../services/Login');

const getLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await services.getLogin(email, md5(password));

  return res.status(user.status).json(user.data);
};

module.exports = {
   getLogin,
};
