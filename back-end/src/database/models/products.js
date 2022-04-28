const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.INTEGER,
  }, { tableName: 'products'});

  Product.associate = (models) => {
    Product.belongsTo(models.salesProduct, {
      foreignKey: "product_id",
      as: "product",
    });
  };

  return Product;
};

module.exports = Product;
