var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.a = 123;
  res.render('demo/index', res);
});

module.exports = router;
