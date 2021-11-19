var mongoose = require('mongoose');
const Team = require('../models/Team')
const User = require('../models/User')

var gameSchema = new mongoose.Schema({
  homeTeam: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Team',
    default: null
  },
  awayTeam: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Team',
    default: null
  },
  ref: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    default: null
  },
  score: {
    type: String,
    default: "0-0"
  },
  date: {
    type: String,
    default: "Today"
  }
});

module.exports = mongoose.model('Game', gameSchema);