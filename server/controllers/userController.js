'use strict';
// userController
const userModel = require('../models/userModel');
const {validationResult} = require ('express-validator');

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
  if (!newUser.role) {
    // default user role
    newUser.role = 1;
  }
  const errors = validationResult(req);
  console.log('validation errors: ' + errors);
  if (errors.isEmpty()) {
    const result = await userModel.addUser(newUser, res);
    res.status(201).json({message: "new user created", userId: result});
  } else {
    res.status(400).json({message: "user creation failed", errors: errors.array()});
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
  createUser,
  deleteUser,
  checkToken
}