const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  start: {
    type: Date,
    required: true,
  },
  end:{
    type: Date,
    required: true,
  },
  user:{
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  hotel: {
    type: mongoose.Schema.ObjectId,
    ref: "hotel",
  },
  noRooms: {
    type: Number,
    requiredd: true,
  },
  confirmed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('booking', bookingSchema);
