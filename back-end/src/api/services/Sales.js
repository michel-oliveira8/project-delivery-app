const { sale, salesProduct } = require('../../database/models');

const create = async ({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber }) => {
  const saleCreated = await sale
    .create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });
  if (!saleCreated) {
    return {
      status: 404,
      data: { error: 'Not found' },
    };
  }
  return saleCreated;
};
  
const createSalesProducts = async (saleId, cart) => {
  await Promise.all(cart.map(({ id, quantity }) =>
    salesProduct.create({ saleId, productId: id, quantity })));
  return { saleId, status: 201 };
};

const findAll = async () => { 
  const sales = await sale.findAll({ raw: true });

  console.log(sales);

  return sales;
};

const findById = async (id) => sale.findByPk({ where: { id } });

module.exports = {
  create,
  findAll,
  findById,
  createSalesProducts,
};