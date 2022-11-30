"use strict";
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const {validationResult} = require ('express-validator');
const userModel = require('../models/userModel');
require('dotenv').config();

const login = (req, res) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log("this is the user: ", user);
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      delete user.password;
      const token = jwt.sign(user, process.env.JWT_SECRET);
      return res.json({ user, token });
    });
  })(req, res);
};

const register = async (req, res) => {
  console.log("Creating a new user: ", req.body);
  const newUser = req.body;
  if (!newUser.role) {
    // default user role
    newUser.role = 1;
  }
  const errors = validationResult(req);
  console.log('validation errors: ' + errors);
  if (errors.isEmpty()) {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(newUser.passwd, salt);
    newUser.passwd = passwordHash
    const result = await userModel.addUser(newUser, res);
    res.status(201).json({message: "user created", userId: result});
  } else {
    res.status(400).json({message: "user creation failed", errors: errors.array()});
  }
};

module.exports = {
  login,
  register
};