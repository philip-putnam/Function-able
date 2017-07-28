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

router.post('/event', (req, res) => {
  Event.find({ name: req.body.name}, (err, event) => {
    if(err) {
      res.send(err);
    }
    res.json(event);
  });
});

router.post('/events', (req, res) => {
  const userData = {
    name: req.body.name,
    description: req.body.description,
    goal: req.body.goal,
    date: req.body.date,
    deadline: req.body.deadline,
    dependency: req.body.dependency,
    privacy: req.body.privacy,
  };

  Event.create(userData, (err, events) => {
    if(err) {
      res.send(err);
    }
    res.json(events);
  });
});

module.exports = router;
