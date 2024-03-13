const pool = require('../config/db');

class User {
  static createUser(name, callback) {
    pool.query('INSERT INTO users (name) VALUES (?)', [name], (error, results, fields) => {
      if (error) {
        callback(error);
        return;
      }
      callback(null, results);
    });
  }
}

module.exports = User;
