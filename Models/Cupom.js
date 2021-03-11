const { ObjectId } = require('mongodb');

const getCollection = require('./get-connection');

const create = async (valor, unidade) =>
  getCollection('cupons')
    .then((cupom) => cupom.insertOne({ valor, unidade }))
    .then((result) => ({ _id: result.insertedId }));
    
const getAll = async () => getCollection('cupons').then((product) => product.find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection('cupons').then((cupom) => cupom.findOne({ _id: ObjectId(id) }));
};

const update = async (id, valor, unidade) => {
  if (!ObjectId.isValid(id)) return null;
  getCollection('cupons').then((product) =>
    product.updateOne({ _id: ObjectId(id) }, { $set: { valor, unidade } }),
  );
  return { _id: id, valor, unidade};
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection('cupons').then((cupom) => cupom.deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};
