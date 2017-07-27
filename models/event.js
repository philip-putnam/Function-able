const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
  name: String,
  date: String,
  deadline: String,
  dependency: String
});

module.exports = mongoose.model('Event', Event);
