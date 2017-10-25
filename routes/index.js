var express = require('express');
var router = express.Router();
var app = express();

/* GET Página inicial */
const route = router.get('/', function (req, res, next) {
  res.status(200).send({
    title: "Oruam API",
    version: "0.0.1"
  });
});

module.exports = router;
