const User = require('../models/User');

exports.createUser = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  User.createUser(name, (error, result) => {
    if (error) {
      return next(error);
    }
    res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  });
};
