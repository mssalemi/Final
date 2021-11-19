const mongoose = require('mongoose');
const User = require('../models/User')
const Team = require('../models/Team')
const Game = require('../models/Game')
const League = require('../models/League')

const getAll = (req, res, next) => {
  League.find({}).populate('teams').populate('games').exec( (err, league) => {
     err ? res.send(err) : res.status(200).json(league)
  })
}

const create = (req, res, next) => {
  const newLeague = new League({name: req.body.name});
  newLeague.save( (err) => {
    err ? res.send(err) : res.status(200).json({"status": "success"})
  } )
}

const createGame = (req, res, next) => {
  Team.findById(req.body.homeTeamId, (err, homeTeam) => {
    Team.findById(req.body.awayTeamId, (err, awayTeam) => {
      const newGame = new Game({
        homeTeam, awayTeam
      })
      newGame.save( (err) => {
        if (err) {
          res.send(err)
        } else {
          League.findById(req.params.id, (err, league) => {
            league.games.push(newGame)
            league.save( err => err ? res.send(err) : res.send( {"status": "success"} ))
          })
        }
      } )
    })
  })
}

const addTeam = (req, res, next) => {
  League.findById(req.params.id, (err, league) => {
    if (err) {
      res.send(err)
    } else {
      Team.findById(req.body.teamId, (err, team) => {
        league.teams.push(team);
        league.save( err => {
          err ? res.send(err) : res.send( {"status": "success"} )
        })
      })
    }
  })
}


module.exports = {
  getAll,
  create,
  createGame,
  addTeam
}