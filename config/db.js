const { createPool } = require('mysql2/promise');

const pool = createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ledger'
});

async function createAccountsTable() {
  try {
    const connection = await pool.getConnection();
    await connection.query(`
      CREATE TABLE IF NOT EXISTS accounts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        balance INT DEFAULT 0
      )
    `);
    connection.release();
    console.log('Accounts table created or already exists.');
  } catch (error) {
    console.error('Error creating accounts table:', error.message);
  }
}

module.exports = {
  pool,
  createAccountsTable
};
