"use strict";
const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");
const { register } = require('../controllers/authController');
const {body} = require ('express-validator');

router.post("/login", login)
  .post("/register", body('name').isLength({min: 3}).trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('passwd').isLength({min: 8}).trim(), register);
  
module.exports = router;