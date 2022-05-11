const services = require('../services/Sales');

const create = async (req, res) => {
  try {
    const { userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber, cart } = req.body;

    const saleCreated = await services
      .create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, cart });
  
    return res.status(201).json(saleCreated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const sale = await services.findAll();

    return res.status(200).json(sale);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const saleById = await services.findById(id);

    return res.status(200).json(saleById);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const createSalesProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { cart } = req.body;
    const { status, saleId } = await services.createSalesProducts(Number(id), cart);
  
    return res.status(status).json({ saleId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  findAll,
  findById,
  createSalesProducts,
};