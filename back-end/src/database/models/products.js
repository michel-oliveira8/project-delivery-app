const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.INTEGER,
  });

  Products.associate = (models) => {
    Products.belongsTo(models.SalesProducts, {
      foreignKey: "product_id",
      as: "product",
    });
  };

  return Products;
};

module.exports = Products;
