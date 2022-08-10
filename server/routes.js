const express = require('express');
const router = express.Router();
const axios = require('axios');
const getStats = require('../database/controllers/getStats.js');

router.get('/playerStats', (req, res) => {
  console.log(req.query);
  getStats()
    .then((result) => res.send(result.rows))
    .catch((err) => {
      res.sendStatus(404);
      console.log(err.stack);
    });
});

module.exports = router;
