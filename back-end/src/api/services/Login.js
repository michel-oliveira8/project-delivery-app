const { user } = require("../../database/models");

const getLogin = async (email, password) => {
  const users = await user.findOne({ where: { email, password } });
  console.log(users);
  return users
};

module.exports = {
  getLogin,
};
