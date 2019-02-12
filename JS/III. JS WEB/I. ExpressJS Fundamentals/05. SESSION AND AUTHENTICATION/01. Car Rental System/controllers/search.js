const Car = require('../models/Car');

module.exports = {
  search: (req, res) => {
      let searchQuery = req.query;

      Car.find({isRented: false}).then((cars) => {
          cars = cars.filter(x => x.model.toLowerCase().includes(searchQuery.model.toLowerCase()));

          res.render('car/all', {cars});
      });
  }
};