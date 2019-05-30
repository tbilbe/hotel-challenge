const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
type: String,
required: true,
unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  address:{
    type: String,
    Unique: true,
    required: true,
  },
  totalRooms:{
    type: Number,
    required: true,
    unique: false,
  },
  booking:[{
    type: mongoose.SchemaType.ObjectId,
    ref: "bookings"
  }],
  exceptions:[{
    type: mongoose.Schema.ObjectId,
    ref: "exception"
  }],
});

module.exports = mongoose.model('hotel', hotelSchema);