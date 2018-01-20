var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	
  var response = [];
  response.push({name: "Australia",code: "AU"}); 
  response.push({name: "India", "code": "IN"}); 
  response.push({name: "United Kingdom","code": "GB"}); 
  res.status(200).json({response:response});   
});

module.exports = router;
