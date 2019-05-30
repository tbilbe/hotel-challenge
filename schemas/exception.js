const mongoose = require('mongoose');

const exception = new mongoose.Schema({
  modifier:{
    type: Number,
    required: true,
  },
  date:{
    type: Date,
    require: Date
  }
});

module.exports = mongoose.model('exception', userSchema);