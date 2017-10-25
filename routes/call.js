var express = require('express');
var router = express.Router();
var controller = require('../controllers/call-controller');

/* listar chamadas. */
router.get('/', controller.get);

//GET de um parametro só pelo ID
router.get('/:id', controller.get);

//adcionar chamada 
router.post('/', controller.post); 

//update 
router.put('/:id', controller.put);

//Delete
router.delete('/:id', controller.delete);

module.exports = router;