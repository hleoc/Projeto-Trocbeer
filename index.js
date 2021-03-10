const express = require('express');

const bodyParser = require('body-parser');

const usersController = require('./Controllers/usersController');

const loginController = require('./Controllers/loginController');

const app = express();

app.use(bodyParser.json());

app.use('/users', usersController);

app.use('/login', loginController);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`A Troc está ON na porta ${PORT}`);
});
