const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("salesProduct", {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, { tableName: 'salesProducts', underscored: true, timestamps: false});

  SalesProduct.associate = (models) => {
    SalesProduct.belongsToMany(models.product, 
      { foreignKey: "id", otherKey: "productId", through: SalesProduct }
    );

    SalesProduct.belongsToMany(models.sale, 
      { foreignKey: "id", otherKey: "saleId", through: SalesProduct }
    )
  };

  return SalesProduct;
};

module.exports = SalesProduct;
