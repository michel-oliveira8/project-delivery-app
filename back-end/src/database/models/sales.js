const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("sale", {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    sellerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente',
    },
  }, { tableName: 'sales', underscored: true, timestamps: false });

  Sale.associate = (models) => {
    Sale.hasMany(models.user, { foreignKey: "id", as: "users" });

    Sale.hasMany(models.salesProduct, {
      foreignKey: "sale_id",
      as: "sale",
    });
  };

  return Sale;
};

module.exports = Sale;
