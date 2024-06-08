const express = require('express');
const router = express.Router();
const Auction = require('../Models/Auction'); // Replace with your Auction model import

// Route: GET /api/auctions
router.get('/', async (req, res) => {
  try {
    const auctions = await Auction.find();
    res.json(auctions);
  } catch (err) {
    console.error('Error fetching auctions:', err);
    res.status(500).json({ error: 'Failed to fetch auctions. Please try again later.' });
  }
});

module.exports = router;
