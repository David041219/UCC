var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  if(req.body.ID=='isa2019'){
    if(req.body.PW=='13579'){
      res.send('login 성공');
    }

    else{
      res.send('login 실패');
    }
  }

  else {
    res.send('ID를 찾을 수 없음')
  }
});

module.exports = router;
