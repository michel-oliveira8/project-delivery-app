const { sale, salesProduct } = require('../../database/models');

const create = async (userData) => {
  const { userId, sellerId, totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    pedidos } = userData;

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

    await Promise.all(pedidos.map(async ({ id, quantity }) =>
    salesProduct.create({ saleId: createSale.id, productId: id, quantity })));
  
  return { saleId: createSale.id, status: 201 };
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
};