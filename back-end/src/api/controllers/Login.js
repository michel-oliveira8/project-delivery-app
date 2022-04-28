const services = require("../services/Login");

const getLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await services.getLogin(email, password);

  if (!user) {
    return res.status(204).json({ message: "not exists" });
  }

  return res.status(200).json(user.dataValues);
};

module.exports = { getLogin };
