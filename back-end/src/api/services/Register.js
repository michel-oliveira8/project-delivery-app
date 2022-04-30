const { user } = require('../../database/models');

const create = async (name, email, password, role) => {
  const userExist = await user.findOne({ where: { name, email } });

  if (userExist) {
    return { status: 409, message: { error: 'User exist' } }; 
  }

  const createUser = await user.create({ name, email, password, role });

  return { message: createUser, status: 201 };
};

module.exports = {
  create,
};