'use strict';
// userController
const userModel = require('../models/userModel');

const getUsers = async (req, res) => {
  const users = await userModel.getAllUsers(res);
  res.json(users);
};

const getUser = async (req, res) => {
  const user = await userModel.getUserById(req.params.userId, res);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
  }
};

const modifyUser = (req, res) => {};
const deleteUser = (req, res) => {};

const checkToken = (req, res) => {
  res.json({user: req.user});
};

module.exports = {
  getUser,
  getUsers,
  modifyUser,
  deleteUser,
  checkToken
}