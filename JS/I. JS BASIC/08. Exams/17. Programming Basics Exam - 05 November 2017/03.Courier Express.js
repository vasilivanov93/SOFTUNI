function courierExpress([arg1, arg2, arg3]) {
    let kgShipment = parseFloat(arg1);
    let typeService = arg2;
    let distanceInKm = Number(arg3);

    let price = 0;

    if(typeService == "standard" && kgShipment < 1){
        price = 0.03;
    }else if((typeService == "standard" || typeService == "express") && kgShipment >= 1 && kgShipment <= 10){
        price = 0.05;
    }else if((typeService == "standard" || typeService == "express") && kgShipment > 10 && kgShipment <= 40){
        price = 0.10;
    }else if((typeService == "standard" || typeService == "express") && kgShipment > 40 && kgShipment <= 90){
        price = 0.15;
    }else if((typeService == "standard" || typeService == "express") && kgShipment > 90 && kgShipment <= 150){
        price = 0.20;
    }

    let totalPrice = price * distanceInKm;

    let upPrice = 0;

    if(typeService == "standard" && kgShipment < 1){
        upPrice = price  * 80 / 100;
    }else if(typeService == "express" && kgShipment >= 1 && kgShipment <= 10){
        upPrice = price  * 40 / 100;
    }else if(typeService == "express" && kgShipment > 10 && kgShipment <= 40){
        upPrice = price  * 5 / 100;
    }else if(typeService == "express" && kgShipment > 40 && kgShipment <= 90){
        upPrice = price  * 2 / 100;
    }else if(typeService == "express" && kgShipment > 90 && kgShipment <= 150){
        upPrice = price  * 1 / 100;
    }

    let upKg = upPrice * kgShipment;
    let upKm = distanceInKm * upKg;
    let newTotalPrice = totalPrice + upKm;
    
    if(typeService == "standard"){
        console.log(`The delivery of your shipment with weight of ${kgShipment.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
    }else if(typeService == "express"){
        console.log(`The delivery of your shipment with weight of ${kgShipment.toFixed(3)} kg. would cost ${newTotalPrice.toFixed(2)} lv.`);
    }
}

courierExpress(["1.5", "standard", "100"]);
courierExpress(["87", "express", "130"])