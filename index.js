var express = require('express');
var router = express.Router();
var debug = require('debug')('hookhub-hook-example');

debug("Loading");

/* GET home page. */
router.use('/', function(req, res, next) {
  debug("Handling default request");
  res.send({result:"OK",message:"It works!"});
});

module.exports = router;
