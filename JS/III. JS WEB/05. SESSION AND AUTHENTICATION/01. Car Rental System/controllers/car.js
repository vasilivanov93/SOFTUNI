const Car = require('../models/Car');
const Rent = require('../models/Rent');

module.exports = {
    addGet: (req, res) => {
        res.render('car/add');
    },
    addPost: (req, res) => {
        let carObj = req.body;
        carObj.pricePerDay = Number(carObj.pricePerDay);

        Car.create(carObj)
            .then(() => {
                Car.find({isRented: false})
                    .then((cars) => {
                        res.render('car/all', {
                            cars: cars
                        });
                    });
            })
            .catch((err) => {
                console.log(err);
                carObj.error = 'Please fill all fields!';
                res.render('car/add', carObj);
            });
    },
    allCars: (req, res) => {
        Car.find({isRented: false})
            .then((cars) => {
                res.render('car/all', {
                    cars: cars
                });
            })
            .catch((err) => {
                console.log(err);
            });
    },
    rentGet: (req, res) => {
        let id = req.params.id;

        Car.findById(id).then((car) => {
            res.render('car/rent', car);
        }).then((err) => {
            console.log(err);
        });
    },
    rentPost: (req, res) => {
        let id = req.params.id;
        let days = Number(req.body.days);

        Car.findByIdAndUpdate({_id: id}, {$set: {isRented: true, expiresOn: days}})
            .then(() => {
                Rent.create({
                    days: days,
                    car: id,
                    owner: req.user._id
                }).then(() => {
                    res.redirect('/');
                }).catch((err) => {
                    console.log(err);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    },
    editGet: (req, res) => {
        let id = req.params.id;

        Car.findById(id).then((car) => {
            res.render('car/edit', car)
        })
    },
    editPost: async (req, res) => {
        let id = req.params.id;
        let carObj = req.body;

        try {
            let car = await Car.findById(id);

            car.model = carObj.model;
            car.image = carObj.image;
            car.pricePerDay = carObj.pricePerDay;

            car.save();

            res.redirect('../../car/all')
        } catch (err) {
            console.log(err);
        }
    }
};