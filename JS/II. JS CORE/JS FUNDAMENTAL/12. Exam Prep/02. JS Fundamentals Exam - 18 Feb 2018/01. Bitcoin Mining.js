function solve(arr) {
    arr = arr.map(Number);
    let countDay = 0;
    let sum = 0;
    let bitcoins = 0;  
    let isFirst = true;

    for (let i = 0; i < arr.length; i++) {
        let goldPerDay = arr[i] * 67.51;
        if ((i + 1) % 3 === 0) {
            goldPerDay = goldPerDay - (goldPerDay * 0.3);
        }
        
        sum += goldPerDay;

        while (sum >= 11949.16) {
            if (isFirst) {
                countDay = i + 1;
                isFirst = false;
            }
            bitcoins++;
            sum -= 11949.16;
        }
    }
    
    
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (countDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${countDay}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

solve(['100', '200', '300']);