function task(arr) {
    let [budget, city, days] = arr;
    budget = Number(budget);
    days = Number(days);

    let hotel = 0;
    let airplane = 0;

    if (city === 'Cairo') {
        hotel = 250;
        airplane = 300;
    } else if (city === 'Paris') {
        hotel = 150;
        airplane = 175;
    } else if (city === 'Lima') {
        hotel = 400;
        airplane = 425;
    } else if (city === 'New York') {
        hotel = 300;
        airplane = 325;
    } else if (city === 'Tokyo') {
        hotel = 350;
        airplane = 350;
    }

    let total = ((hotel * 2) * days) + (airplane * 2);

    if ((days >= 1 && days <= 4) && (city === 'Cairo' || city === 'New York')) {
        total *= 0.97;
    } else if ((days >= 5 && days <= 9) && (city === 'Cairo' || city === 'New York')) {
        total *= 0.95;
    } else if ((days >= 5 && days <= 9) && city === 'Paris') {
        total *= 0.93;
    } else if ((days >= 10 && days <= 24) && city === 'Cairo') {
        total *= 0.9;
    } else if ((days >= 10 && days <= 24) && (city === 'Paris' || city === 'New York' || city === 'Tokyo')) {
        total *= 0.88;
    } else if ((days >= 25 && days <= 49) && (city === 'Cairo' || city === 'Tokyo')) {
        total *= 0.83;
    } else if ((days >= 25 && days <= 49) && (city === 'New York' || city === 'Lima')) {
        total *= 0.81;
    } else if ((days >= 25 && days <= 49) && city === 'Paris') {
        total *= 0.78;
    } else if (days >= 50) {
        total *= 0.7;
    }

    if (budget >= total) {
        console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`);
    }
}

task([
        '5000',
        'New York',
        '8'
    ]
);