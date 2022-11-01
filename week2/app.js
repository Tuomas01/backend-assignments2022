'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat', (req, res) => {
  //console.log(req); // <- req has all the data about the request
  res.send('From this endpoint you can get cats.')
});

app.post('/cat', (req, res) => {
  res.send('From this endpoint you can add more cats.');
});

app.get('/cat/:catId', (req, res) => {
  console.log(req.params);
  res.send('From this endpoint you can a cat with an id: ' + req.params.catId);
});

app.put('/cat', (req, res) => {
  res.send('From this endpoint you can edit cats');
});

app.delete('/cat', (req, res) => {
  res.send('From this endpoint you can delete cats');
});

app.get('/user', (req, res) => {
  res.send('From this endpoint you can get users.')
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
