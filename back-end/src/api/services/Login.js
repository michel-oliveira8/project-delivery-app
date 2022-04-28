const { user } = require("../../database/models");

const getLogin = async (email, password) => {
  const res = await user.findOne({ where: { email, password } });

  if (!res) return {
      status: 404,
      data: "Not found",
    };

  return {
    status: 200,
    data: res.dataValues
  };
};

module.exports = {
  getLogin,
};
