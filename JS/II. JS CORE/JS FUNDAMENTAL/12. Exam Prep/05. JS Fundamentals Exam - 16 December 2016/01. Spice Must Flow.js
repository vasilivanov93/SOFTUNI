function spice(arr) {
    let currentYield = Number(arr[0]);
    let countSpice = 0;
    let days = 0;
    
    while (currentYield >= 100) {
        countSpice += currentYield - 26;
        currentYield -= 10;
        days++;
    }

    if(countSpice >= 26) {
        countSpice -= 26;
    }
    
    console.log(days)
    console.log(countSpice)
}