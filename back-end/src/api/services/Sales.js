const { sale, salesProduct } = require('../../database/models');

<<<<<<< HEAD
const create = async (userData) => {
  const { userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    pedidos } = userData;

  const createSale = await sale
    .create(
      { userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
      },
    );

    await Promise.all(pedidos.map(async ({ id, quantity }) =>
    salesProduct.create({ saleId: createSale.id, productId: id, quantity })));
=======
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
>>>>>>> c85e456b7903c2083f3b789a2a9a0bc6e7dfa848
  
const createSalesProducts = async (saleId, cart) => {
  await Promise.all(cart.map(({ id, quantity }) =>
    salesProduct.create({ saleId, productId: id, quantity })));
  return { saleId, status: 201 };
};

<<<<<<< HEAD
const findAll = async () => sale.findAll();
=======
const findAll = async () => { 
  const sales = await sale.findAll({ raw: true });

  console.log(sales);

  return sales;
};
>>>>>>> c85e456b7903c2083f3b789a2a9a0bc6e7dfa848

const findById = async (id) => sale.findByPk({ where: { id } });

module.exports = {
  create,
  findAll,
  findById,
<<<<<<< HEAD
=======
  createSalesProducts,
>>>>>>> c85e456b7903c2083f3b789a2a9a0bc6e7dfa848
};