const express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { req: req });
});

module.exports = router;
