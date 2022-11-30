'use strict';
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.getUsers)
.get('/token', userController.checkToken)
.get('/:userId', userController.getUser)
.put('/', userController.modifyUser)
.delete('/', userController.deleteUser);

module.exports = router;