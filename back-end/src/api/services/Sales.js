const { sale, salesProduct } = require('../../database/models');

const create = async (userData) => {
  const { userId,
    sellerId,
    totalPrice,
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

    
    const products = await Promise.all(pedidos.map(async ({id, quantity}) =>
    await salesProduct.create({saleId: createSale.id, productId: id, quantity})
    ));
    console.log(products)
  
  return { saleId: createSale.id, status: 201 };
};

const findAll = async () => {
  return sale.findAll();
}

const findById = async (id) => {
  return sale.findByPk({ where: { id } });
}

module.exports = {
  create,
  findAll,
  findById
};