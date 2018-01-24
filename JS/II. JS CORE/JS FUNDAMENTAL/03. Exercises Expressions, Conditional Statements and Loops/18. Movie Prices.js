function moviePrices([arg1, arg2]) {
    let film = arg1.toLowerCase();
    let day = arg2.toLowerCase();

    let price = 0;

    if (film == "the godfather" && day == "monday") {
        price = 12;
    }else if (film == "the godfather" && day == "tuesday") {
        price = 10;
    }else if (film == "the godfather" && day == "wednesday") {
        price = 15;
    }else if (film == "the godfather" && day == "thursday") {
        price = 12.50;
    }else if (film == "the godfather" && day == "friday") {
        price = 15;
    }else if (film == "the godfather" && day == "saturday") {
        price = 25;
    }else if (film == "the godfather" && day == "sunday") {
        price = 30;
    }

    if (film == "the wizard of oz" && day == "monday") {
        price = 10;
    }else if (film == "the wizard of oz" && day == "tuesday") {
        price = 10;
    }else if (film == "the wizard of oz" && day == "wednesday") {
        price = 10;
    }else if (film == "the wizard of oz" && day == "thursday") {
        price = 10;
    }else if (film == "the wizard of oz" && day == "friday") {
        price = 10;
    }else if (film == "the wizard of oz" && day == "saturday") {
        price = 15;
    }else if (film == "the wizard of oz" && day == "sunday") {
        price = 15;
    }

    if (film == "casablanca" && day == "monday") {
        price = 8.00;
    }else if (film == "casablanca" && day == "tuesday") {
        price = 8.00;
    }else if (film == "casablanca" && day == "wednesday") {
        price = 8.00;
    }else if (film == "casablanca" && day == "thursday") {
        price = 8.00;
    }else if (film == "casablanca" && day == "friday") {
        price = 8.00;
    }else if (film == "casablanca" && day == "saturday") {
        price = 10;
    }else if (film == "casablanca" && day == "sunday") {
        price = 10;
    }

    if (film == "schindler's list" && day == "monday") {
        price = 8.50;
    }else if (film == "schindler's list" && day == "tuesday") {
        price = 8.50;
    }else if (film == "schindler's list" && day == "wednesday") {
        price = 8.50;
    }else if (film == "schindler's list" && day == "thursday") {
        price = 8.50;
    }else if (film == "schindler's list" && day == "friday") {
        price = 8.50;
    }else if (film == "schindler's list" && day == "saturday") {
        price = 15;
    }else if (film == "schindler's list" && day == "sunday") {
        price = 15;
    }

    if(price == 0){
        console.log("error");
    }

    console.log(price);
}

moviePrices(["Schindler's LIST", "monday"]);