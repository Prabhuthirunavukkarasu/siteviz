var express = require("express");
var router = express.Router();
var siteviz_service = require('../services/siteviz-service');

router.get('/', function (req, res) {
    res.status(200).send("Hello from siteviz-router");
})

module.exports = router;