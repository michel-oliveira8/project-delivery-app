const User = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { tableName: 'users'});

  return User;
};

module.exports = User;
