const { sale, salesProduct } = require('../../database/models');

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
  
  return { saleId: createSale.id, status: 201 };
};

const findAll = async () => sale.findAll();

const findById = async (id) => sale.findByPk({ where: { id } });

module.exports = {
  create,
  findAll,
  findById,
};