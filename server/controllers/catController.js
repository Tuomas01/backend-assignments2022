'use strict';
// catController
const catModel = require('../models/catModel');
const {validationResult} = require ('express-validator');

const getCats = async (req, res) => {
  const cats = await catModel.getAllCats(res);
  res.json(cats);
};

const getCat = async (req, res) => {
  const cat = await catModel.getCatById (res, req.params.catId);
  if (cat) {
    res.json(cat);
  } else {
    res.status(404);
  }
};

const createCat = async (req, res) => {
  const errors = validationResult(req);
  if (!req.file) {
    res.status(400).json({message: "file missing or invalid"});
  } else if (errors.isEmpty()) {
    const cat = req.body;
    cat.filename = req.file.filename;
    console.log("creating a cat", cat);
    const catId = await catModel.addCat(cat, res);
    res.status(201).json({message: "succesfully created a cat", catId});
  } else {
    console.log("validation errors:", errors);
    res.status(400).json({message: "cat creation failed", errors: errors.array()})
  }
};

const modifyCat = async (req, res) => {
  const cat = req.body;
  if (req.params.catId) {
    cat.id = req.params.catId;
  }
  const result = await catModel.updateCatById(cat, res);
  if (result.affectedRows > 0) {
    res.json({message: "cat updated: " + cat.id});
  } else {
    res.status(404).json({message: 'nothing waas changed'});
  }
};

const deleteCat = async (req, res) => {
  const result = await catModel.deleteCatById(req.params.catId, res);
  console.log("cat delted", result);
  if (result.affectedRows > 0) {
    res.json({message: "cat deleted"});
  } else {
    res.status(404).json({message: 'cat not found'});
  }
};

module.exports = {
  getCat,
  getCats,
  modifyCat,
  createCat,
  deleteCat
}
