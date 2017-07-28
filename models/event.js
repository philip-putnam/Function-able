const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
  name: String,
  description: String,
  goal: Number,
  currentContrib: Number, 
  date: String,
  deadline: String,
  dependency: String,
  creator: String,
  privacy: String,
  guests: Array,
  stretchGoals: Array,
});

module.exports = mongoose.model('Event', Event);
