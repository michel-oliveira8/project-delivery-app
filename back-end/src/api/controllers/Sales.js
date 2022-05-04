const services = require('../services/Sales');

const create = async (req, res) => {
  try {
    const userData = req.body;

    const sale = await services.create(userData);
  
    return res.status(sale.status).json({ saleId: sale.saleId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
};