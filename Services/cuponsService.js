const model = require('../Models/Cupom');

const create = async (valor, unidade) => {
  if (!valor || !unidade) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'Invalid entries. Try again.',
      statusCode: 400,
    };
  }
  
  return model.create(parseInt(valor), unidade);
};

const getAll = async () => model.getAll();

const getById = async (id) => {
  const cupom = await model.getById(id);
  if (!cupom) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'recipe not found',
      statusCode: 404,
    };
  }
  return cupom;
};

const update = async (id, valor, unidade) => model.update(id, valor, unidade);

const remove = async (id) => model.exclude(id);

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
