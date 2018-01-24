function dwarfPresents(args) {
    let numberDwarfs = Number(args[0]);
    let money = Number(args[1]);

    let countSandClock = 0;
    let countMagnet = 0;
    let countCup = 0;
    let countTshirt = 0;

    for (let i = 2; i < args.length; i++) {
        let currentToys = args[i];
        
        if(currentToys == "sand clock"){
            countSandClock++;
        }else if(currentToys == "magnet"){
            countMagnet++;
        }else if(currentToys == "cup"){
            countCup++;
        }else if(currentToys == "t-shirt"){
            countTshirt++;
        }
    }

    let priceSandClock = countSandClock * 2.20;
    let priceMagnet = countMagnet * 1.50;
    let priceCup = countCup * 5.00;
    let priceTshirt = countTshirt * 10.00;

    let totalPrice = priceSandClock + priceMagnet + priceCup + priceTshirt;

    if(totalPrice <= money){
        console.log(`Santa Claus has ${(money - totalPrice).toFixed(2)} more leva left!`);
    }else{
        console.log(`Santa Claus will need ${(totalPrice - money).toFixed(2)} more leva.`);
    }
}

dwarfPresents(["5", "100", "sand clock", "magnet", "cup", "t-shirt", "magnet"]);