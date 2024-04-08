const { pool } = require('../config/db');

async function createUser(name) {
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query('INSERT INTO accounts (name) VALUES (?)', [name]);
    connection.release();
    return result.insertId;
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
}

async function giveCreditToUser(userId, amount) {
  try {
    const connection = await pool.getConnection();
    await connection.query('UPDATE accounts SET balance = balance + ? WHERE id = ?', [amount, userId]);
    connection.release();
    console.log(`Credit of ${amount} added to user with ID ${userId}`);
  } catch (error) {
    console.error('Error giving credit to user:', error.message);
    throw error;
  }
}

async function getAllUsersBalances() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT id, name, balance FROM accounts');
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error getting all users balances:', error.message);
    throw error;
  }
}

async function getUserBalance(userId) {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT balance FROM accounts WHERE id = ?', [userId]);
    connection.release();
    if (rows.length === 0) return null; // User not found
    return rows[0].balance;
  } catch (error) {
    console.error('Error getting user balance:', error.message);
    throw error;
  }
}

module.exports = {
  createUser,
  giveCreditToUser,
  getAllUsersBalances,
  getUserBalance
};
