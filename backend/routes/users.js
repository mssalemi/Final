var express = require('express');
var router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/refs', usersController.getRefs);
router.post('/create', usersController.create);
router.post('/createRef', usersController.createRef);
router.post('/:id/changePassword', usersController.changePassword);
router.get('/test', (req, res, next) => res.render('index'));
router.get('/:id', usersController.getOne);
router.post('/:id', usersController.edit);

module.exports = router;
