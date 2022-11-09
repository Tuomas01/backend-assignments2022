'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers)
.get('/:userId', userController.getUser)
.post('/', userController.createUser)
.put('/', userController.modifyUser)
.put('/:userId', userController.modifyUser)
.delete('/:catId', userController.deleteUser);

module.exports = router;