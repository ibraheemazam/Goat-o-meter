const express = require('express');
const axios = require('axios');
const getStats = require('../database/controllers/getStats.js');
const getPlayerID = require('../database/controllers/getPlayerID.js');

const router = express.Router();

router.get('/playerStats', (req, res) => {
  const { player, season } = req.query;
  console.log(player, season);
  getStats(player, season)
    .then((result) => res.send(result.rows))
    .catch((err) => {
      res.sendStatus(404);
      console.log(err.stack);
    });
});

router.get('/playerPhoto', (req, res) => {
  const { name } = req.query;
  console.log(name);
  getPlayerID(name)
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((err) => {
      res.sendStatus(404);
      console.log(err.stack);
    });
});

module.exports = router;
