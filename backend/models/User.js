var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: null
    },
    lastName: {
      type: String,
      default: null
    },
    email: {
        type: String,
        default: null,
        unique: true
    }, 
    password: {
        type: String,
        default: "password123",
    },
    type: {
        type: String,
        default: null
    }, 
    img: {
        type: String,
        default: null
    }, 
    theme: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);