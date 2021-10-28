var express = require('express');
var router = express.Router();
var edokati = 2;

/* GET users listing. */
router.get('/', function(req, res, next) {
  a=Math.imul(edokati);
  b=Math.log(edokati);
  c=Math.log10(edokati);
  res.send(`[Math.imul()] applied to ${edokati} is ${a} [Math.log()] applied to ${edokati} is ${b} [Math.log10()] applied to ${edokati} is ${c}`);

});
module.exports = router;

