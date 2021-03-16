const { Router } = require('express');

const service = require('../Services/productsService');

const auth = require('../Middlewares/auth');

const products = Router();

products.post('/', auth, async (req, res) => {
  try {
    const { name, quantity, price, url_product } = req.body;
    const newProduct = await service.create(name, quantity, price, url_product);
    if (newProduct.error) {
      return res.status(newProduct.statusCode).json({ message: newProduct.message });
    }
    res.status(201).json({ product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

products.get('/', async (_req, res) => {
  try {
    const allProducts = await service.getAll();
    return res.status(200).json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

products.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; // id do produto
    const oneProduct = await service.getById(id);
    if (oneProduct.error) {
      return res.status(oneProduct.statusCode).json({ message: oneProduct.message });
    }
    return res.status(200).json(oneProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

products.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params; // id do produto
    const { name, quantity, price, url_product } = req.body;
    const updateProduct = await service.update(id, name, quantity, price, url_product);
    return res.status(200).json(updateProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

products.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params; //id do produto
    const removeProduct = await service.remove(id);
    return res.status(204).json(removeProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = products;
