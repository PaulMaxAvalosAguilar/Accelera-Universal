const express = require('express');

const router = express.Router();

router.get('/signout', async (req, res) => {
  res.json('okey');
});

module.exports = router;
