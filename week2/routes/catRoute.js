'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

router.get('/', catController.getCats);

router.get('/:catId', catController.getCat);

router.post('/', catController.createCat);

router.put('/', catController.modifyCat);

router.delete('/', catController.deleteCat);

module.exports = router;