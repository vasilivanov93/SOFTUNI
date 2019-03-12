function task(arr) {
    arr = arr.map(Number);
    let [climbers, carabiners, ropes, pickeys] = arr;

    let total = climbers * ((carabiners * 36) + (ropes * 3.60) + (pickeys * 19.80));

    let finalTotal = total + (total * 0.2);

    console.log(finalTotal.toFixed(2));
}


task([
        '20',
        '14',
        '30',
        '6'
    ]
);