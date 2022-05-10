const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
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

const findAllAsAdmin = async (authorization) => {
  const valid = jwt.decode(authorization);
  if (!valid || valid.role !== 'administrator') {
    return { status: 401, message: { error: 'Unauthorized User' } };
  }

  const users = await user.findAll({ where: { role: { [Op.ne]: 'administrator' } } });
  return { message: users, status: 201 };
};

module.exports = {
  create,
  findByRole,
  findAllAsAdmin,
};