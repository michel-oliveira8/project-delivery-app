const services = require('../services/Login');

const getLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await services.getLogin(email, password);

  return res.status(user.status).json(user.data);
};

module.exports = { getLogin };
