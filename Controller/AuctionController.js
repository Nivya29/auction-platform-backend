const Auction = require('../Models/Auction');

const createAuction = async (req, res) => {
  const { title, description, startingPrice, endDate, seller } = req.body;

  try {
    const auction = await Auction.create({
      title,
      description,
      startingPrice,
      endDate,
      seller,
    });

    res.status(201).json(auction);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAuctionById = async (req, res) => {
  const { id } = req.params;

  try {
    const auction = await Auction.findById(id).populate('seller', 'name email');

    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }

    res.json(auction);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createAuction, getAuctionById };
