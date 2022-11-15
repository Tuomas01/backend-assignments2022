'use strict';
const express = require('express');
const router = express.Router();
const {body} = require ('express-validator');

const userController = require('../controllers/userController');

router.get('/', userController.getUsers)
.get('/:userId', userController.getUser)
.post('/', 
 body('name').isLength({min: 3}),
 userController.createUser)
.put('/', userController.modifyUser)
.delete('/', userController.deleteUser);

module.exports = router;