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

const createUser = async (req, res) => {
  console.log("Creating a new user: ", req.body);
  const newUser = req.body;
  const result = await userModel.addUser(newUser, res);
  res.status(201).json({userId: result});
};

const modifyUser = async (req, res) => {
  const user = req.body;
  if (req.param.userId) {
    user.id = req.params.userId;
  }
  const result = await userModel.updateUserById(user, res);
  if (result.affectedRows > 0) {
    res.json({message: "user updated: " + user.id});
  } else {
    res.status(404).json({message: 'nothing was changed'});
  }
};
const deleteUser = async (req, res) => {
  const result = await userModel.deleteUserById(req.params.userId, res);
  console.log("user delted", result);
  if (result.affectedRows > 0) {
    res.json({message: "user deleted"});
  } else {
    res.status(404).json({message: 'user not found'});
  }
};

module.exports = {
  getUser,
  getUsers,
  modifyUser,
  createUser,
  deleteUser
}