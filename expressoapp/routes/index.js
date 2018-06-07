var express = require('express');
var router = express.Router();
var dataModel = require('../models/Data');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getData', function(req, res) {
  dataModel.find({}, function(err, data) {
    if (err){
      console.log(err)
      return;
    }
    res.json(data);
  })
});

router.post('/postData', function(req, res) {
  dataModel.insert({
    _key: '/data/id/2',
    _object: {
      dataId: 2
    }
  }, function(err, data) {
    if (err){
      console.log(err)
      return;
    }
    res.json(data);
  })
});

module.exports = router;
