function task(arr) {
    arr = arr.map(Number);
    let [bitcoins, uan, commission] = arr;

    let total = (((uan * 0.15) * 1.76) + (bitcoins * 1168)) / 1.95;

    console.log((total - ((total * commission) / 100)).toFixed(2));
}