const services = require('../services/Sales');

const create = async (req, res) => {
  try {
    const userData = req.body;

    const createSale = await services.create(userData);
  
    return res.status(createSale.status).json(createSale.message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
};