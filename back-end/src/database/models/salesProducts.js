const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("salesProduct", {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, { tableName: 'salesProducts', underscored: true, timestamps: false});

  // SalesProduct.associate = (models) => {
  //   SalesProduct.belongsTo(models.sale, { foreignKey: "id", as: "sale" });

  //   SalesProduct.belongsTo(models.product, { foreignKey: "id", as: "product" });
  // };

  return SalesProduct;
};

module.exports = SalesProduct;
