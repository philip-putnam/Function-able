const express = require('express');
var router = express.Router();

router.post('/register', (req, res) => {
  res.render('index');
  console.log(req);
});

module.exports = router;
