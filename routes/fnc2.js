var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('03fnc2.ejs');
});

module.exports = router;
