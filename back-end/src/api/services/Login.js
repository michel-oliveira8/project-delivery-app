const { user } = require('../../database/models');
const createToken = require('../../token/createToken');

const getLogin = async (email, password) => {
  const res = await user.findOne({ 
    where: { email, password }, 
    attributes: ['name', 'email', 'role'],
  });

  if (!res) {
    return {
      status: 404,
      data: { error: 'Not found' },
    };
  }

  const token = await createToken({ name: res.name, email, role: res.role });

  return {
    status: 200,
    data: {
      ...res.dataValues,
      token,
    },
  };
};

module.exports = {
  getLogin,
};
