var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('04fnc3.ejs');
});

module.exports = router;
