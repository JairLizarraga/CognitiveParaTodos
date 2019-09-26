var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto/index');
});

router.post('/email', function(req, res, next) {
  res.render('badges/index');
});

module.exports = router;
