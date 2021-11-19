var mongoose = require('mongoose');
const User = require('../models/User')
const Team = require('../models/Team')
const Game = require('../models/Game')

var leagueSchema = new mongoose.Schema({
  teams: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Team'}],
    default: []
  },
  games: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
    default: []
  },
  name: {
    type: String, 
    required: true
  }
}, {
    timestamps: true
});

module.exports = mongoose.model('League', leagueSchema);