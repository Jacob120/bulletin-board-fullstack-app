const express = require('express');
const router = express.Router();

const Ads = require('../controllers/ads.controller');

router.get('/ads', Ads.getAll);
router.get('/ads/:id', Ads.getById);
router.post('/ads', Ads.adNew);
router.delete('/ads/:id', Ads.deleteById);
router.put('/ads/:id', Ads.editAd);
router.put('/ads/search/:searchPhrase', Ads.searchPhrase);

module.exports = router;
