const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const auctionsRoute = require('./Routes/AuctionRoutes');
app.use('/api/auctions', auctionsRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/auction', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
