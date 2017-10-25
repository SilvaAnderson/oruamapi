var express = require('express');
var router = express.Router();
var controller = require('../controllers/user-controller');

/* GET clientes. */
router.get('/', controller.get);
/* GET clientes SLUG. */
router.get('/:slug', controller.getBySlug);

//GET de um parametro só pelo ID
router.get('/:id', controller.get);

//Post clientes
router.post('/', controller.post); 

//PUT é o update 
router.put('/:id', controller.put);

//Delete
router.delete('/:id', controller.delete);

module.exports = router;
