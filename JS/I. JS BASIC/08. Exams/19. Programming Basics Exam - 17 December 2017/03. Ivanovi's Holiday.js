function ivanoviHoliday([arg1, arg2, arg3]) {
    let numberNights = Number(arg1);
    let typeDestination = arg2;
    let typeTransport = arg3;

    let priceNightChild = 0;
    let priceNightAdult = 0;

    let priceTransportChild = 0;
    let priceTransportAdult = 0;

    if(typeDestination == "Miami" && numberNights >= 1 && numberNights <= 10){
        priceNightAdult = 24.99;
        priceNightChild = 14.99;
    }else if(typeDestination == "Miami" && numberNights > 10 && numberNights <= 15){
        priceNightAdult = 22.99;
        priceNightChild = 11.99;
    }else if(typeDestination == "Miami" && numberNights > 15){
        priceNightAdult = 20.00;
        priceNightChild = 10.00;
    }

    if(typeDestination == "Canary Islands" && numberNights >= 1 && numberNights <= 10){
        priceNightAdult = 32.50;
        priceNightChild = 28.50;
    }else if(typeDestination == "Canary Islands" && numberNights > 10 && numberNights <= 15){
        priceNightAdult = 30.50;
        priceNightChild = 25.60;
    }else if(typeDestination == "Canary Islands" && numberNights > 15){
        priceNightAdult = 28.00;
        priceNightChild = 22.00;
    }

    if(typeDestination == "Philippines" && numberNights >= 1 && numberNights <= 10){
        priceNightAdult = 42.99;
        priceNightChild = 39.99;
    }else if(typeDestination == "Philippines" && numberNights > 10 && numberNights <= 15){
        priceNightAdult = 41.00;
        priceNightChild = 36.00;
    }else if(typeDestination == "Philippines" && numberNights > 15){
        priceNightAdult = 38.50;
        priceNightChild = 32.40;
    }

    let totalPriceNights = (numberNights * ((priceNightAdult * 2) + (priceNightChild * 3))) + ((numberNights * ((priceNightAdult * 2) + (priceNightChild * 3))) * 0.25);

    if(typeTransport == "train"){
        priceTransportAdult = 22.30;
        priceTransportChild = 12.50;
    }else if(typeTransport == "bus"){
        priceTransportAdult = 45.00;
        priceTransportChild = 37.00;
    }else if(typeTransport == "airplane"){
        priceTransportAdult = 90.00;
        priceTransportChild = 68.50;
    }

    let totalPriceTransport = (priceTransportAdult * 2) + (priceTransportChild * 3);

    let totalPriceForHoliday = totalPriceNights + totalPriceTransport;

    console.log(totalPriceForHoliday.toFixed(3));
}

ivanoviHoliday(["10", "Miami", "airplane"])