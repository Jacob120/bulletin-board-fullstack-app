const Ad = require('../models/ad.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Ad.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) res.status(404).json({ message: 'Not found' });
    else res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.adNew = async (req, res) => {
  try {
    const ad = new Ad({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      src: req.body.src,
      price: req.body.price,
      localization: req.body.localization,
      sellerData: req.body.sellerData,
    });
    const newAd = await ad.save();
    res.json(newAd);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (ad) {
      await Ad.deleteOne({ _id: req.params.id });
      req.json({ message: 'ok' });
    } else res.status(404).json({ message: err });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.editAd = async (req, res, next) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) return res.status(404).json({ message: 'Ad not found' });
    else {
      ad.title = req.body.title;
      ad.description = req.body.description;
      ad.price = req.body.price;
      ad.image = req.body.image;
      ad.user = req.body.user;
      const updatedAd = await ad.save();
      res.json(updatedAd);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.searchPhrase = async (req, res, next) => {
  try {
    const ad = await Ad.find({
      $text: {
        $search: req.params.searchPhase,
      },
    });
    res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
