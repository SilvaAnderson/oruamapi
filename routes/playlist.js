var express = require('express');
var router = express.Router();
var controller = require('../controllers/playlist-controller');

/* Listar playlist. */
router.get('/', controller.get);

/* playlist pelo SLUG. */
router.get('/:slug', controller.getBySlug);

//GET de um parametro só pelo ID
router.get('/:id', controller.get);

//adcionar playlist
router.post('/', controller.post); 

//update 
router.put('/:id', controller.put);

//Delete
router.delete('/:id', controller.delete);

module.exports = router;