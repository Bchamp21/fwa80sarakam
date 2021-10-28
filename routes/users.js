var express = require('express');
var router = express.Router();
var edokati = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`User accesses are : ${edokati}`);
  edokati++;
});

module.exports = router;
