import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = express.Router();

router.get('/events', (req, res) => {
  let events = {};
  mdb.collection('events').find({})
    .each((err, event) => {
      assert.equal(null, err);

      if (!event) {
        res.send({ events });
        return;
      }

      events[event._id] = event;
    });
});

module.exports = router;
