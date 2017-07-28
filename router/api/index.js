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
    currentContrib: 0,
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

router.post('/update', (req, res) => {
  Event.updateOne( { name: req.body.name }, { $set: { 'currentContrib': req.body.contrib } }, (err, event) => {
    if(err) {
      res.send(err);
    }
    res.json(event);
  });
});

router.post('/addStretchGoal', (req, res) => {
  Event.updateOne( { _id: req.body.id },
    { $set: { 'stretchGoals': [{
      'name': req.body.name,
      'goal': req.body.goal,
      'currentContrib': '0',
    }]
    }}, (err, event) => {
      if(err) {
        res.send(err);
      }
      res.json(event);
    });
});

module.exports = router;
