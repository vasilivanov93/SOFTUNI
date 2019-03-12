function task(arr) {
    arr = arr.map(Number);
    let [days, foodInKg, firstDogFood, secondDogFood, thirdDogFood] = arr;

    let totalFoodInKg = (firstDogFood * days) + (secondDogFood * days) + (thirdDogFood * days);

    if (totalFoodInKg <= foodInKg) {
        console.log(`${Math.floor(foodInKg - totalFoodInKg)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(totalFoodInKg - foodInKg)} more kilos of food are needed.`)
    }
}

task([
        '1',
        '5',
        '3',
        '1',
        '1'
    ]
);