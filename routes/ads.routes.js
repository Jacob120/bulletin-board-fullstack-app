const express = require('express');
const router = express.Router();

const ads = require('../controllers/ads.controller');

router.get('/ads', ads.getAll);
// router.post('/ads', ads.add);

module.exports = router;
