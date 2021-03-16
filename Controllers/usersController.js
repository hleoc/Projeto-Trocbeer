const { Router } = require('express');

const service = require('../Services/usersService');

const users = Router();

users.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await service.create(name, email, password);
    if (newUser.error) {
      return res.status(newUser.statusCode).json({ message: newUser.message });
    }
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

users.get('/', async (_req, res) => {
  try {
    const allUsers = await service.getAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

users.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneUser = await service.getById(id);
    if (oneUser.error) {
      return res.status(oneUser.statusCode).json({ message: oneUser.message });
    }
    return res.status(200).json(oneUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

users.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;
    const updateUser = await service.update(id, name, email, role);
    return res.status(200).json(updateUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

users.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const removeUser = await service.remove(id);
    return res.status(204).json(removeUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = users;
