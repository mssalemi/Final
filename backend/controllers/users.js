const mongoose = require('mongoose');
const User = require('../models/User')

const getAll = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      res.send(err)
    } else {
      res.status(200).json(users)
    }
  })
}

const getOne = (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.status(200).json(user)
    }
  })
}

const create = (req, res, next) => {
  const newUser = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      type: req.body.type,
      theme: req.body.theme,
      password: req.body.password,
      img: req.body.img
  });
  console.log(newUser);
  newUser.save( err => {
    if (err) {
        res.status(400).json(err)
    } else {
        res.status(200).json({"status":"success"})
    }
  })
}

const createRef = (req, res, next) => {
  const newUser = new User({
    email: req.body.email,
    type: "ref"
  })
  newUser.save( (err) => {
    (err) ? res.send(err) : res.status(200).json({"status": "success"})
  } )
}

const edit = (req, res, next) => {
  User.findOneAndUpdate(req.params.id, {$set: {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    type: req.body.type,
    img: req.body.img,
    theme: req.body.theme
  }}, (err, user) => {
    (err) ? res.send(err) : res.status(200).json({"status": "success"})
  })
}

const changePassword = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {$set: {
    password: req.body.password
  }}, (err, user) => {
    (err) ? res.send(err) : res.status(200).json({"status": "success"})
  })
}

const getRefs = (req, res, next) => {
  User.find({type:"ref"}, (err, refs) => {
    if (err) {
      res.send(err)
    } else {
      res.status(200).json(refs)
    }
  })
}

module.exports = {
  getAll,
  create,
  createRef,
  getOne, 
  edit,
  changePassword, 
  getRefs
}