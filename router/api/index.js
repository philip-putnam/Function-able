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

router.post('/events', (req, res) => {
  const userData = {
    name: req.body.name,
    date: req.body.date,
    deadline: req.body.deadline,
    dependency: req.body.dependency,
    creator: req.body.creator,
    privacy: req.body.privacy,
    guests: req.body.guests,
    goals: req.body.goals,
  };

  Event.create(userData, (err, events) => {
    if(err) {
      res.send(err);
    }
    res.json(events);
  });
});

module.exports = router;
