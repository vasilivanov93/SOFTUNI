function energyLoss(args){
    let n = Number(args[0]);
    let numberDancer = Number(args[1]);

    let total1 = 0;
    let total2 = 0;
    let total3 = 0;
    let total4 = 0;

    for(let i = 2; i <= n + 1; i++){
        let currentDancer = Number(args[i]);
        let currentDay = i - 1;
        
        if((currentDay % 2 === 0) && (currentDancer % 2 === 0)){
            total1 += numberDancer * 68;
        }else if(currentDay % 2 === 1 && currentDancer % 2 === 1){
            total2 += numberDancer * 30;
        }else if(currentDay % 2 === 1 && currentDancer % 2 === 0){
            total3 += numberDancer * 49;
        }else if(currentDay % 2 === 0 && currentDancer % 2 === 1){
            total4 += numberDancer * 65;
        }
    }

    let totalEnergy = 100 * numberDancer * n;
    let diffEnergy = totalEnergy - (total1 + total2 + total3 + total4);
    let diffEnergyPerDay = diffEnergy / numberDancer / n;

    if(diffEnergyPerDay <= 50){
        console.log(`They are wasted! Energy left: ${diffEnergyPerDay.toFixed(2)}`);
    }else{
        console.log(`They feel good! Energy left: ${diffEnergyPerDay.toFixed(2)}`);
    }
}