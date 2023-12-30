var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

//Get request to /skills
router.get('/', skillsCtrl.index);

//Get /skill/new
router.get('/new', skillsCtrl.new);

//Get /skill/:id
router.get('/:id', skillsCtrl.show);

//Get /skill/:id/edit
router.get('/:id/edit', skillsCtrl.edit);

//Post /Skills
router.post('/', skillsCtrl.create);

//Delete /skills/:id
router.delete('/:id', skillsCtrl.delete);

//Put /Update
router.put('/:id', skillsCtrl.update);

module.exports = router;