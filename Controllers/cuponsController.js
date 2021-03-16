const { Router } = require('express');

const service = require('../Services/cuponsService');

const auth = require('../Middlewares/auth');

const cupons = Router();

cupons.post('/', auth, async (req, res) => {
  try {
    const { valor, unidade } = req.body;
    const newCupom = await service.create(valor, unidade);
    if (newCupom.error) {
      return res.status(newCupom.statusCode).json({ message: newCupom.message });
    }
    return res.status(201).json({ cupom: newCupom });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

cupons.get('/', auth, async (_req, res) => {
  try {
    const allCupons = await service.getAll();
    return res.status(200).json(allCupons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

cupons.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; 
    const oneCupom = await service.getById(id);
    if (oneCupom.error) {
      return res.status(oneCupom.statusCode).json({ message: oneCupom.message });
    }
    return res.status(200).json(oneCupom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

cupons.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params; // id do cupom
    const { valor, unidade } = req.body;
    const updateCupom = await service.update(id, valor, unidade);
    return res.status(200).json(updateCupom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

cupons.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params; //id do cupom
    const removeCupom = await service.remove(id);
    return res.status(204).json(removeCupom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = cupons;
