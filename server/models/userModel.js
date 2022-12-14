'use strict';
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async (res) => {
  try {
    const sql = "SELECT user_id, name, email, role FROM wop_user";
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const getUserById = async (id, res) => {
  try {
    const sql = "SELECT user_id, name, email, role FROM wop_user " + 
    "WHERE user_id= " + id;
    const [rows] = await promisePool.query(sql);
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const getUserLogin = async (user) => {
  try {
    console.log('getUserLogin()', user);
    const [rows] = await promisePool.execute(
        'SELECT * FROM wop_user WHERE email = ?;',
        user);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const addUser = async (user, res) => {
  try {
    const sql = "INSERT INTO wop_user VALUES (NULL, ?, ?, ?, ?)";
    const values = [user.name, user.email, user.passwd, user.role];
    const [result] = await promisePool.query(sql, values);
    console.log(result);
    return result.insertId;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserLogin,
  addUser
};
