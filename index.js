const express = require('express');

const bodyParser = require('body-parser');

const usersController = require('./Controllers/usersController');

const loginController = require('./Controllers/loginController');

const productsController = require('./Controllers/productsController');

const cuponsController = require('./Controllers/cuponsController');

const app = express();

app.use(bodyParser.json());

app.use('/users', usersController);

app.use('/login', loginController);

app.use('/products', productsController);

app.use('/cupons', cuponsController);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`A Troc está ON na porta ${PORT}`);
});
