var express = require('express');
var router = express.Router();
var drawMap = require('../public/javascripts/geoChart.js')

/* GET destination page. */
router.get('/', function(req, res, next) {
  res.render('destinations',  { map: drawMap});
  // console.log(geoChart);
  // console.log(drawMap, "mapdraq");
});

module.exports = router;
