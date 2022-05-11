const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("sale", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
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
    Sale.belongsToMany(models.user, { through: Sale, foreignKey: "userId", otherKey: "id", as: "users" });

    Sale.hasMany(models.salesProduct, {
      foreignKey: "saleId",
      as: "salesInfo",
    });
  };

  return Sale;
};

module.exports = Sale;
