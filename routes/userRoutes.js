const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/', userController.createUser);

// Give credit to a user
router.post('/:userId/credit', userController.giveCredit);

// Get all users' balances
router.get('/balances', userController.getAllUsersBalances);

// Get individual user's balance
router.get('/:userId/balance', userController.getUserBalance);

module.exports = router;
