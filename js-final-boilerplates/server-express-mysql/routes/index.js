var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');

router.get('', function(req, res, next) {
    res.render('index', { title: "Express"});
});

module.exports = router;