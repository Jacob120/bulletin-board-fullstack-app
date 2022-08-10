const Ad = require('./models/ad.model');

const loadTestData = async () => {
  const data = [
    {
      title: 'test 1',
      description: 'lorem ipsum',
      date: '2022-12-12',
      src: 'photo-1529626455594-4ff0802cfb7e.jpg',
      price: 25,
      localization: 'Kielce',
      sellerData: 'test',
    },
  ];

  try {
    let counter = await Ad.countDocuments();
    if (counter === 0) {
      console.log('No ads. Loading example data...');
      await Ad.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log(`Couldn't load test data`, err);
  }
};

module.exports = loadTestData;
