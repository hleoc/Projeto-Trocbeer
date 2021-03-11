const { ObjectId } = require('mongodb');

const getCollection = require('./get-connection');

const create = async (name, quantity, price) =>
  getCollection('products')
    .then((product) => product.insertOne({ name, quantity, price }))
    .then((result) => ({ _id: result.insertedId, name, quantity, price }));

const getAll = async () => getCollection('products').then((product) => product.find().toArray());

const update = async (id, name, quantity, price) => {
  if (!ObjectId.isValid(id)) return null;
  getCollection('products').then((product) =>
    product.updateOne({ _id: ObjectId(id) }, { $set: { name, quantity, price } }),
  );
  return { _id: id, name, quantity, price };
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection('products').then((product) => product.deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  create,
  getAll,
  update,
  exclude,
};
