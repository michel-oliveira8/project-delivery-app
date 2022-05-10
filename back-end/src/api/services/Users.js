const { user } = require('../../database/models');

const create = async (name, email, password, role) => {
  const userExist = await user.findOne({ where: { name, email } });

  if (userExist) {
    return { status: 409, message: { error: 'User exist' } }; 
  }

  const createUser = await user.create({ name, email, password, role });

  return { message: createUser, status: 201 };
};

const findByRole = async (role) => {
  const usersList = await user.findAll({ where: { role } });

  // if (userExist) {
    // return { status: 409, message: { error: 'User exist' } }; 
  // }

  // const createUser = await user.create({ name, email, password, role });

  return { message: usersList, status: 201 };
};

const findUser = async (id) => {
  const userSelected = await user.findOne({ where: { id } });

  if (!userSelected) return { status: 404, message: { error: 'not found' } };

  return { message: userSelected, status: 201 };
};

module.exports = {
  create,
  findByRole,
  findUser,
};