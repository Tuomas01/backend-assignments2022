'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const catController = require('../controllers/catController');
const {body} = require ('express-validator');

const fileFilter = (req, file, cb) => {
  const acceptedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (acceptedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
  //console.log(file);
};

const upload = multer({dest: 'uploads/', fileFilter});

router.get('/', catController.getCats)
  .get('/:catId', catController.getCat)
  .post('/', 
    upload.single('cat'),
    body('name').isLength({min: 2}).trim().escape(),
    body('birthdate').isDate(),
    body('weight').isFloat({min: 0.1, max: 30}),
    catController.createCat)
  .put('/', catController.modifyCat)
  .put('/:catId', catController.modifyCat)
  .delete('/:catId', catController.deleteCat);

module.exports = router;