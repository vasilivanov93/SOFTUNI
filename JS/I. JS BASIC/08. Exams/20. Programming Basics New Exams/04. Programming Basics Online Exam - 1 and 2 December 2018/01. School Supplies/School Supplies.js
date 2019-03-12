function task(arr) {
    arr = arr.map(Number);
    let [numberPen, numberMarker, cleaningDetergent, discount] = arr;

    let total = (numberPen * 5.80) + (numberMarker * 7.20) + (cleaningDetergent * 1.20);
    let finalTotal = total - (total * (discount / 100));

    console.log(finalTotal.toFixed(3))
}


task([
        '2',
        '3',
        '2.5',
        '25'
    ]
);