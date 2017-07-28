const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
  name: String,
  date: String,
  deadline: String,
  dependency: String,
  creator: String,
  privacy: String,
  guests: Array,
  goals: Array
});

module.exports = mongoose.model('Event', Event);
