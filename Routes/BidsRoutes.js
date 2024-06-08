const express = require('express');
const router = express.Router();
const { placeBid } = require('../Controller/BidsController');

// Bid routes
router.post('/', placeBid);

module.exports = router;
