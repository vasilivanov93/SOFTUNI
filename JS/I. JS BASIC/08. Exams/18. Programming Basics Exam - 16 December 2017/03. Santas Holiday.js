function santasHoliday([arg1, arg2, arg3]) {
    let numberDays = Number(arg1);
    let typeRoom = arg2;
    let rating = arg3;

    if(typeRoom == "room for one person"){
        price = 18.00;
    }else if(typeRoom == "apartment"){
        price = 25.00;
    }else if(typeRoom == "president apartment"){
        price = 35.00;
    }

    let totalPrice = (numberDays - 1) * price;

    if(typeRoom == "apartment" && numberDays < 10){
        totalPrice = totalPrice - (totalPrice * 0.30);
    }else if(typeRoom == "apartment" && numberDays >= 10 && numberDays <= 15){
        totalPrice = totalPrice - (totalPrice * 0.35);
    }else if(typeRoom == "apartment" && numberDays > 15){
        totalPrice = totalPrice - (totalPrice * 0.50);
    }

    if(typeRoom == "president apartment" && numberDays < 10){
        totalPrice = totalPrice - (totalPrice * 0.10);
    }else if(typeRoom == "president apartment" && numberDays >= 10 && numberDays <= 15){
        totalPrice = totalPrice - (totalPrice * 0.15);
    }else if(typeRoom == "president apartment" && numberDays > 15){
        totalPrice = totalPrice - (totalPrice * 0.20);
    }

    if(rating == "positive"){
        totalPrice += totalPrice * 0.25;
    }else if(rating == "negative"){
        totalPrice -= totalPrice * 0.10;
    }

    console.log(totalPrice.toFixed(2));
}

santasHoliday(["11", "apartment", "positive"])