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

const findAll = async (req, res) => {
  try {
    const sale = await services.findAll();

    return res.status(sale.status).json(sale);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await services.findById(Number(id));

    return res.status(sale.status).json(sale);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  create,
  findAll,
  findById
};