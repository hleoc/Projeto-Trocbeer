const express = require('express');

const cors = require('cors');

const path = require('path');

const usersController = require('./Controllers/usersController');

const loginController = require('./Controllers/loginController');

const productsController = require('./Controllers/productsController');

const cuponsController = require('./Controllers/cuponsController');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/users', usersController);

app.use('/login', loginController);

app.use('/products', productsController);

app.use('/cupons', cuponsController);

app.use('/images', express.static(path.join(__dirname, '.', 'images')));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`A Troc está ON na porta ${PORT}`);
});
