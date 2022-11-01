'use strict';
const express = require('express');
const router = express.Router();

app.get('/user', (req, res) => {
    res.send('From this endpoint you can get users.')
  });