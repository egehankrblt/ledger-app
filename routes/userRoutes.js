const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.post('/:userId/credit', userController.giveCredit);
router.get('/balances', userController.getAllUsersBalances);
router.get('/:userId/balance', userController.getUserBalance);

module.exports = router;
