'use strict';
// catController
const catModel = require('../models/catModel');

const getCats = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const getCat = (req, res) => {
  const cat = cats.filter(cat => req.params.catId == cat.id)[0];
  if (cat) {
    res.json(cat);
  } else {
    res.status(404);
  }
};

const modifyCat = (req, res) => {};

const createCat = (req, res) => {
  console.log(req.body);
  res.send('adding a cat');
};

const deleteCat = (req, res) => {};

module.exports = {
  getCat,
  getCats,
  modifyCat,
  createCat,
  deleteCat
}
