const express = require('express');
const passport = require('passport');
const router = express.Router();

const User = require('../../models/user');

router.post('/login', (req, res) => {
  User.find({ username: req.body.username}, (err, users) => {
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

// router.post('/register', (req, res, next) => {
//   if (req.body.email &&
//   req.body.firstName &&
//   req.body.lastName &&
//   req.body.username &&
//   req.body.password &&
//   req.body.confirmPassword) {
//
//     if (req.body.password !== req.body.confirmPassword) {
//       let err = new Error('Passwords do not match');
//       err.status = 400;
//       return next;
//     }
//
//     const userData = {
//       email: req.body.email,
//       username: req.body.username,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       password: req.body.password
//     };
//
//     User.create(userData, function(error, user) {
//       if(error) {
//         return next(error);
//       } else {
//         return res.redirect('/');
//       }
//     });
//   } else {
//     let err = new Error('All fields required');
//     err.status = 400;
//     return next(err);
//   }
// });

module.exports = router;
