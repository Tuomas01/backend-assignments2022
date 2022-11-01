'use strict';
// catRoute
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //console.log(req); // <- req has all the data about the request
  res.send('From this endpoint you can get cats.')
});

router.post('/', (req, res) => {
  res.send('From this endpoint you can add more cats.');
});

router.get('/:catId', (req, res) => {
  console.log(req.params);
  res.send('From this endpoint you can a cat with an id: ' + req.params.catId);
});

router.put('/', (req, res) => {
  res.send('From this endpoint you can edit cats');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete cats');
});

module.exports = router;