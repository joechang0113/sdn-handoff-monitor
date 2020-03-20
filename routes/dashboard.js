var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('01dashboard.ejs');
});

module.exports = router;
