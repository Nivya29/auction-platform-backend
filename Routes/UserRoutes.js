// routes/UserRoutes.js
const express = require('express');
const router = express.Router();
const { getUserAuctions } = require('../controllers/UserController');

// Route to get auctions for a specific user
router.get('/:userId/auctions', getUserAuctions);

module.exports = router;

// controllers/UserController.js
const Auction = require('../Models/Auction');

const getUserAuctions = async (req, res) => {
  try {
    const { userId } = req.params;
    const auctions = await Auction.find({ seller: userId });
    res.json(auctions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch auctions' });
  }
};

module.exports = {
  getUserAuctions,
};
