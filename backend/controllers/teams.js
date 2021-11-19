const mongoose = require('mongoose');
const Team = require('../models/Team')
const User = require('../models/User')

const getAll = (req, res, next) => {
  Team.find({}).populate('roster').exec( (err, teams) => {
    if (err){
      res.send(err)
    } else {
      res.status(200).json(teams)
    }
  })
}

const getOne = (req, res, next) => {
  console.log("grabbing one player")
  console.log(req.params.id);
  Team.findById(req.params.id).populate('roster').exec((err, team) => {
    console.log(team)
    if (err){
      res.send(err)
    } else {
      res.status(200).json(team)
    }
  })
}

const create = (req, res, next) => {
  const newTeam = new Team({
    name: req.body.name
  });
  newTeam.save( (err, team) => {
    if (err) {
      res.send(err)
    } else {
      res.status(200).json({"status": "success"})
    }
  } )
}

const edit = (req, res, next) => {
  console.log(req.body.name)
  Team.findByIdAndUpdate(req.params.id, {$set: {
    name: req.body.name
  }}, (err) => {
    if (err) {
      res.send(err)
    } else {
      res.status(200).json({"status": "success"})
    }
  })
}

const addPlayer = (req, res, next) => {
  User.findById(req.body.playerId, (err, user) => {
    if (err) {
      res.send("Error Finding that Player")
    } else {
      console.log(req.params.id)
      Team.findById(req.params.id, (err, team) => {
        if (err) {
          res.send("Error Finidng that Team")
        } else {
          team.roster.push(user);
          team.save(err => {
            if (err) {
              res.send("Error Adding Player to Team Roster")
            } else {
              res.status(200).json({"status": "success"})
            }
          })
        }
      })
    }
  })

}

const deletePlayer = (req, res, next) => {
  res.send("todo")
}

const editManager = (req, res, next) => {
  User.findById(req.body.managerId, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      Team.findByIdAndUpdate(req.params.id, {$set: {
        manager: user
      }}, (err, udpate) => {
        if(err) {
          res.send(err)
        } else {
          res.status(200).json({"status": "success"})
        }
      })
    }
  })
}

module.exports = {
  getAll,
  getOne, 
  create, 
  edit,
  addPlayer, 
  deletePlayer,
  editManager
}