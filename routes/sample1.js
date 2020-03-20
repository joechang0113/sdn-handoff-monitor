var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('sample1.ejs');
});

module.exports = router;
