const express = require('express');
const passport = require('passport');
const router = express.Router();

const User = require('../../models/user');

router.post('/info', (req, res) => {
  User.find({ username: req.body.username }, (err, users) => {
    if(err) {
      res.send(err);
    }
    res.json(users);
  });
});

router.get('/register', (req, res) => {
  return res.send('user created!');
});

router.post('/register', (req, res) => {
  const newUser = new User(req.body);

  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      return res.send(JSON.stringify({ error: err }));
    }

    return res.send(JSON.stringify(user));
  });
});

router.post('/login', (req, res) => {
  passport.authenticate('local')(req, res, () => {
    if (req.user) {
      return res.send(JSON.stringify(req.user));
    }

    return res.send(JSON.stringify({ error: 'There was an error logging in '}));
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  return res.send(JSON.stringify(req.user));
});

module.exports = router;
