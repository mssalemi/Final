var express = require('express');
var router = express.Router();

const leaguesController = require('../controllers/leagues')

router.get('/', leaguesController.getAll);
router.post('/create', leaguesController.create),
router.post('/addGame/:id', leaguesController.createGame)
router.post('/addteam/:id', leaguesController.addTeam)

module.exports = router;
