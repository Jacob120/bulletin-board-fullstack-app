const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: false },
  price: { type: Number, required: true },
  localization: { type: String, required: true },
  sellerData: { type: String, required: true },
});

module.exports = mongoose.model('Ad', adSchema);
