var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('badges/index', {title: "Badge"});
});

module.exports = router;
