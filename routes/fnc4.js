var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('05fnc4.ejs');
});

module.exports = router;
