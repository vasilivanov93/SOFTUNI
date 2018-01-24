function bills(args){
    let n = Number(args[0]);
    let electricity = 0;

    for(let i = 1; i <= n; i++){
        let currentElecricity = parseFloat(args[i]);
        electricity += currentElecricity;
    }

    let others = ((electricity + (n  * 20) + (n * 15)) * 0.2) + (electricity + (n  * 20) + (n * 15));
    let average = (electricity + (n * 15) + (n * 20) + others) / n;
    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${(n * 20).toFixed(2)} lv`);
    console.log(`Internet: ${(n * 15).toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);  
}