// models/Auction.js
const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startingBid: { type: Number, required: true },
  endDate: { type: Date, required: true },
  category: { type: String, required: true },
  images: [String] // Assuming images are stored as URLs
});

module.exports = mongoose.model('Auction', auctionSchema);
