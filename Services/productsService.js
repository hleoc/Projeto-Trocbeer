const model = require('../Models/Product');

const create = async (name, quantity, price, url_product) => {
  if (!name || !quantity || !price || !url_product) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'Invalid entries. Try again.',
      statusCode: 400,
    };
  }
  
  return model.create(name, parseInt(quantity), parseFloat(price), url_product);
};

const getAll = async () => model.getAll();

const getById = async (id) => {
  const product = await model.getById(id);
  if (!product) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'recipe not found',
      statusCode: 404,
    };
  }
  return product;
};

const update = async (id, name, quantity, price, url_product) => model.update(id, name, quantity, price, url_product);

const remove = async (id) => model.exclude(id);

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
