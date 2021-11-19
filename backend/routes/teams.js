var express = require('express');
var router = express.Router();

const teamsController = require('../controllers/teams')

router.get('/', teamsController.getAll)
router.post('/create', teamsController.create)
router.get('/:id', teamsController.getOne)
router.post('/:id', teamsController.edit)
router.post('/:id/addPlayer', teamsController.addPlayer),
router.post(':id/removePlayer', teamsController.deletePlayer)
router.post('/editManager/:id', teamsController.editManager)

module.exports = router;
