function hotelRoom([arg1, arg2]){
    let month = arg1;
    let days = Number(arg2);

    let priceApartment = 0;
    let priceStudio = 0;

    let discountApartment = 0;
    let discountStudio = 0;

    if(month == "May" || month == "October"){
        priceApartment = 65;
        priceStudio = 50;
        if(days > 14){
            priceApartment -= 65 * 0.1;
            priceStudio -= 50 * 0.3;
        }else if(days > 7){
            priceStudio -= 50 * 0.05;
        }
    }else if(month == "June" || month == "September"){
        priceApartment = 68.70;
        priceStudio = 75.20;

        if(days > 14){
            priceApartment -= 68.70 * 0.1;
            priceStudio -= 75.20 * 0.2;
        }
    }else if(month == "July" || month == "August"){
        priceApartment = 77;
        priceStudio = 76;

        if(days > 14){
            priceApartment -= 77 * 0.1;
        }
    }

    let totalApartmentPrice = priceApartment * days;
    let totalStudioPrice = priceStudio * days;

    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);
}