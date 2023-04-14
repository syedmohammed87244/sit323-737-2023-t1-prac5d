const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://api2:4000');
    res.send(response.data);
  } catch (err) {
    console.error(err);
    res.send('Error communicating with API 2');
  }
});

app.listen(port, () => {
  console.log(`API 1 listening at http://localhost:${port}`);
});
