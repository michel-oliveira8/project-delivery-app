const { sale } = require('../../database/models');

const create = async (userData) => {
  const { user_id,
    seller_id,
    total_price,
    delivery_address,
    delivery_number,
    status } = userData;

  const createSale = await sale
    .create({ user_id,
      seller_id,
      total_price,
      delivery_address,
      delivery_number,
      status });

  return { saleId: createSale.id, status: 201 };
};

module.exports = {
  create,
};