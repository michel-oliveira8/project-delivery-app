const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("salesProduct", {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, { tableName: 'salesProducts', underscored: true, timestamps: false});

  SalesProduct.associate = (models) => {
    SalesProduct.hasOne(models.product, 
      { foreignKey: "id" }
    );

    SalesProduct.belongsTo(models.sale, 
      { foreignKey: "id" }
    )
  };

  return SalesProduct;
};

module.exports = SalesProduct;
