var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/page-users', { title: 'Users List' });
});

module.exports = router;
