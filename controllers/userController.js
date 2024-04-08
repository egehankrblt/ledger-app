const User = require('../models/User');

// Create a new user
async function createUser(req, res) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const userId = await User.createUser(name);
    res.status(201).json({ message: 'User created successfully', userId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
}

// Give credit to a user
async function giveCredit(req, res) {
  const { userId } = req.params;
  const { amount } = req.body;
  if (!userId || !amount) {
    return res.status(400).json({ error: 'User ID and amount are required' });
  }

  try {
    await User.giveCreditToUser(userId, amount);
    res.status(200).json({ message: `Credit of ${amount} added to user with ID ${userId}` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to give credit to user' });
  }
}

// Get all users' balances
async function getAllUsersBalances(req, res) {
  try {
    const balances = await User.getAllUsersBalances();
    res.status(200).json(balances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get all users balances' });
  }
}

// Get individual user's balance
async function getUserBalance(req, res) {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    const balance = await User.getUserBalance(userId);
    if (balance === null) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ userId, balance });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get user balance' });
  }
}

module.exports = {
  createUser,
  giveCredit,
  getAllUsersBalances,
  getUserBalance
};
