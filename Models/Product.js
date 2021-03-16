const { ObjectId } = require('mongodb');

const getCollection = require('./get-connection');

const create = async (name, quantity, price, url_product) =>
  getCollection('products')
    .then((product) => product.insertOne({ name, quantity, price, url_product, totalPrice: (quantity*price) }))
    .then(({ops}) => ops[0]);
    //.then(console.log());

const getAll = async () => getCollection('products').then((product) => product.find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection('products').then((product) => product.findOne({ _id: ObjectId(id) }));
};

const update = async (id, name, quantity, price, url_product, totalPrice) => {
  if (!ObjectId.isValid(id)) return null;
  getCollection('products').then((product) =>
    product.updateOne({ _id: ObjectId(id) }, { $set: { name, quantity, price, url_product, totalPrice: (quantity*price) } }),
  );
  return { _id: id, name, quantity, price, url_product, totalPrice};
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection('products').then((product) => product.deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};
