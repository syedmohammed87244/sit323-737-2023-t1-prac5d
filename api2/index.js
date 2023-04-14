const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello, this is a message from API 2!');
});

app.listen(port, () => {
  console.log(`API 2 listening at http://localhost:${port}`);
});
