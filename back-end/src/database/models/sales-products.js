const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define("SalesProduct", {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  });

  SalesProducts.associate = (models) => {
    SalesProducts.hasMany(models.Sales, { foreignKey: "id", as: "sale" });

    SalesProducts.hasMany(models.Product, { foreignKey: "id", as: "product" });
  };

  return SalesProducts;
};

module.exports = SalesProducts;
