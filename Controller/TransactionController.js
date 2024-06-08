const Transaction = require('../Models/Transaction');

const createTransaction = async (req, res) => {
  const { auction, seller, buyer, amount } = req.body;

  try {
    const transaction = await Transaction.create({
      auction,
      seller,
      buyer,
      amount,
    });

    res.status(201).json(transaction);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createTransaction };
