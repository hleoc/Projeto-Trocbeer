const { ObjectId } = require('mongodb');

const getCollection = require('./get-connection');

const getByEmail = async ({ email }) =>
  getCollection('users').then((emai) => emai.findOne({ email }));

const create = async (name, email, password, role = 'admin') =>
  getCollection('users')
    .then((user) => user.insertOne({ name, email, password, role }))
    .then((result) => ({ _id: result.insertedId, name, email, role }));

const getAll = async () => getCollection('users').then((user) => user.find().toArray());

const update = async (id, name, email, role) => {
  if (!ObjectId.isValid(id)) return null;
  getCollection('users').then((user) =>
    user.updateOne({ _id: ObjectId(id) }, { $set: { name, email } }),
  );
  return { _id: id, name, email, role };
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection('users').then((user) => user.deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  getByEmail,
  create,
  getAll,
  update,
  exclude,
};
