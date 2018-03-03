function carFactory(car) {
    let newCar = {};
    let engine;

    if (car.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        }
    } else if (car.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        }
    } else if (car.power <= 200) {
        engine = {
            power: 200,
            volume: 3500
        }
    }

    let wheels = [];

    if (car.wheelsize % 2 === 0) {
        car.wheelsize--;
    }

    for (let i = 0; i < 4; i++) {
        wheels.push(car.wheelsize)
    }

    newCar.model = car.model;
    newCar.engine = engine;

    newCar.carriage = {
        type: car.carriage,
        color: car.color
    }

    newCar.wheels = wheels;

    return newCar;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))