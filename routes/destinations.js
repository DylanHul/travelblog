var express = require('express');
var router = express.Router();

/* GET destination page. */
router.get('/', function(req, res, next) {
  res.render('destinations', { title: 'Top Ten' });
});

module.exports = router;
