const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define("Sales", {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATETIME,
    status: DataTypes.STRING,
  });

  Sales.associate = (models) => {
    Sales.hasMany(models.Users, { foreignKey: "id", as: "users" });
  };

  return Sales; 
};

module.exports = Sales;
