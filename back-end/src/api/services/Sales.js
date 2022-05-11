const { sale, salesProduct, product } = require('../../database/models');

const create = async ({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, cart }) => {
  const saleCreated = await sale
    .create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });

    await Promise.all(cart.map(({ id, quantity }) =>
      salesProduct.create({ saleId: saleCreated.id, productId: id, quantity })));

  if (!saleCreated) {
    return {
      status: 404,
      data: { error: 'Not found' },
    };
  }
  return saleCreated;
};
  
// const createSalesProducts = async (saleId, cart) => {
//   console.log(saleId);
//   await Promise.all(cart.map(({ id, quantity }) =>
//     salesProduct.create({ saleId, productId: id, quantity })));
//   return { saleId, status: 201 };
// };

const findAll = async () => { 
  const sales = (await sale.findAll({
  include: [
    { model: salesProduct, as: 'salesInfo', include: [{ model: product, as: 'products' }] },
  ],
})).map((salesP) => salesP.get({ plain: true }));

  return sales;
};

const findById = async (id) => {
  const saleById = await sale.findOne({ 
  where: { id },
  include: [
    { model: salesProduct, as: 'salesInfo', include: [{ model: product, as: 'products' }] },
  ],
});

return saleById;
};

module.exports = {
  create,
  findAll,
  findById,
};
