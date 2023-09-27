const express = require('express');
const axios = require('axios');

const app = express();

const API_KEY = '67051474bae149e4bd6132620232609';

app.get('/api/weather/:location', async (req, res) => {
  const location = req.params.location;

  const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);

  const weatherData = response.data;
  
  res.send(weatherData);
  console.log(weatherData)
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
