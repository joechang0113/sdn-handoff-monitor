var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{info:"Web Info", title : "This Page is Made at 2019/October"});
});

module.exports = router;
