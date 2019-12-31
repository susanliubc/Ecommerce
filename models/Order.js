const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.objectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('order', OrderSchema);
