const model = require('../Models/Product');

const create = async (name, quantity, price) => {
  if (!name || !quantity || !price) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'Invalid entries. Try again.',
      statusCode: 400,
    };
  }
  
  return model.create(name, quantity, price);
};

const getAll = async () => model.getAll();

const update = async (id, name, quantity, price) => model.update(id, name, quantity, price);

const remove = async (id) => model.exclude(id);

module.exports = {
  create,
  getAll,
  update,
  remove,
};
