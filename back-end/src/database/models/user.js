const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.belongsTo(models.Sales, { foreignKey: "user_id", as: "user" });

    User.belongsTo(models.Sales, { foreignKey: "seller_id", as: "seller" });
  };

  return User;
};

module.exports = User;
