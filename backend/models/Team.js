var mongoose = require('mongoose');
const User = require('../models/User')

var teamSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  }, roster: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    default: []
  },
  manager: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);