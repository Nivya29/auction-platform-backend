const Bid = require('../Models/Bids');

const placeBid = async (req, res) => {
  const { auction, bidder, amount } = req.body;

  try {
    const bid = await Bid.create({
      auction,
      bidder,
      amount,
    });

    res.status(201).json(bid);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { placeBid };
