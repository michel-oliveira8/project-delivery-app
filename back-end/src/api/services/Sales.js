const { sale } = require('../../database/models');

const create = async (userData) => {
  const { userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status } = userData;

  const createSale = await sale
    .create(
      { userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        status,
      },
    );

  return { saleId: createSale.id, status: 201 };
};

module.exports = {
  create,
};