const model = require('../Models/User');

const validateEmail = (email) => {
  const regexEmail = /\S+@\S+\.\S+/;
  return regexEmail.test(String(email).toLowerCase());
};

const create = async (name, email, password) => {
  if (!name || !email || !password) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'Invalid entries. Try again.',
      statusCode: 400,
    };
  }
  
  const emailExists = await model.getByEmail({ email });
  if (emailExists) {
    return {
      error: true,
      code: 'duplicate',
      message: 'Email already registered',
      statusCode: 409,
    };
  }  
  
  const validEmail = validateEmail(email);
  if (!validEmail) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'Invalid entries. Try again.',
      statusCode: 400,
    };
  }
  return model.create(name, email, password);
};

const getAll = async () => model.getAll();

const update = async (id, name, email, role) => model.update(id, name, email, role);

const remove = async (id) => model.exclude(id);


module.exports = {
  create,
  getAll,
  update,
  remove,
};
