const services = require('../services/Products');

const getAll = async (_req, res) => {
  try {
    const products = await services.getAll();
    
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
};
