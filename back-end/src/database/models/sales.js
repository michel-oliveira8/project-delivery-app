const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("sale", {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  }, { tableName: 'sales'});

  Sale.associate = (models) => {
    Sale.hasMany(models.user, { foreignKey: "id", as: "users" });

    Sale.belongsTo(models.salesProduct, {
      foreignKey: "sale_id",
      as: "sale",
    });
  };

  return Sale;
};

module.exports = Sale;
