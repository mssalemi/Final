const mongoose = require('mongoose');
const User = require('../models/User');
const Team = require('../models/Team');
const Game = require('../models/Game');

const getAll = (req, res, next) => {
  Game.find({}, (err, games) => {
    err ? res.send(err) : res.status(200).json(games);
  });
};

const getOne = (req, res, next) => {
  Game.findById(req.params.id, (err, games) => {
    err ? res.send(err) : res.status(200).json(games);
  });
};

const create = (req, res, next) => {
  console.log(req.body);
  Team.findById(req.body.homeTeamId, (err, homeTeam) => {
    console.log(homeTeam.name);
    Team.findById(req.body.awayTeamId, (err, awayTeam) => {
      console.log(awayTeam.name);
      const newGame = new Game({
        homeTeam,
        awayTeam,
      });
      console.log(newGame);
      newGame.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200).json({ status: 'success' });
        }
      });
    });
  });
};

const editScore = (req, res, next) => {
  console.log(req.body.score);
  Game.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        score: req.body.score,
      },
    },
    (err, game) => {
      console.log(game);
      if (err) {
        res.send(err);
      } else {
        res.status(200).json({ status: 'success' });
      }
    }
  );
};

const editDate = (req, res, next) => {
  console.log(req.body.date);
  Game.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        date: req.body.date,
      },
    },
    (err, game) => {
      console.log(game);
      if (err) {
        res.send(err);
      } else {
        res.status(200).json({ status: 'success' });
      }
    }
  );
};

const editRef = (req, res, next) => {
  User.findById(req.body.refId, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      Game.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            ref: user,
          },
        },
        (err, game) => {
          console.log(game);
          if (err) {
            res.send(err);
          } else {
            res.status(200).json({ status: 'success' });
          }
        }
      );
    }
  });
};

module.exports = {
  getAll,
  getOne,
  create,
  editScore,
  editRef,
  editDate,
};
