const express = require('express');
const router = express.Router();

const Event = require('../../models/event');

router.get('/events', (req, res) => {
  Event.find((err, events) => {
    if(err) {
      res.send(err);
    }
    res.json(events);
  });
});

module.exports = router;
