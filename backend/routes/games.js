var express = require('express');
var router = express.Router();

const gamesController = require('../controllers/games');

router.get('/', gamesController.getAll);
router.post('/create', gamesController.create);
router.post('/:id', gamesController.editScore);
router.post('/date/:id', gamesController.editDate);
router.post('/ref/:id', gamesController.editRef);
router.get('/:id', gamesController.getOne);

module.exports = router;
