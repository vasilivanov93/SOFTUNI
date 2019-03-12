function task(arr) {
    arr = arr.map(Number);
    let [recordSeconds, distanceMeters, meterPerSecond] = arr;

    let seconds = distanceMeters * meterPerSecond;
    let extraSeconds = (Math.floor(distanceMeters / 50) * 30);
    let totalSeconds = seconds + extraSeconds;

    if (totalSeconds < recordSeconds) {
        let diff = recordSeconds - totalSeconds;
        console.log(`Yes! The new record is ${(recordSeconds - diff).toFixed(2)} seconds.`)
    } else {
        console.log(`No! He was ${(totalSeconds - recordSeconds).toFixed(2)} seconds slower.`)
    }
}

task([
        '5554.36',
        '1340',
        '3.23'
    ]
);