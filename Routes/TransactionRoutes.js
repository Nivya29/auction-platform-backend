const express = require('express');
const router = express.Router();
const { createTransaction } = require('../Controller/TransactionController');

// Transaction routes
router.post('/', createTransaction);

module.exports = router;
