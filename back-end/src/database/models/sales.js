const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define("Sale", {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATETIME,
    status: DataTypes.STRING,
  });

  Sales.associate = (models) => {
    Sales.hasMany(models.Users, { foreignKey: "id", as: "users" });

    Sales.belongsTo(models.SalesProducts, {
      foreignKey: "sale_id",
      as: "sale",
    });
  };

  return Sales;
};

module.exports = Sales;
