const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`A Troc está ON na porta ${PORT}`);
});
