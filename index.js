const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.send('ok');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
