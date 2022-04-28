const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("salesProduct", {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, { tableName: 'salesProduct'});

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.sale, { foreignKey: "id", as: "sale" });

    SalesProduct.belongsTo(models.product, { foreignKey: "id", as: "product" });
  };

  return SalesProduct;
};

module.exports = SalesProduct;
