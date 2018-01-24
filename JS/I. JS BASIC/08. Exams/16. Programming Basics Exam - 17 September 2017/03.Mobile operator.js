function mobileOperator([arg1, arg2, arg3, arg4]){
    let tern = arg1;
    let packet = arg2;
    let internetYesOrNo = arg3;
    let numberMonthForPay = parseFloat(arg4);

    let price = 0;

    if(tern == "one" && packet == "Small"){
        price = 9.98;
    }else if(tern == "one" && packet == "Middle"){
        price = 18.99;
    }else if(tern == "one" && packet == "Large"){
        price = 25.98;
    }else if(tern == "one" && packet == "ExtraLarge"){
        price = 35.99;
    }

    if(tern == "two" && packet == "Small"){
        price = 8.58;
    }else if(tern == "two" && packet == "Middle"){
        price = 17.09;
    }else if(tern == "two" && packet == "Large"){
        price = 23.59;
    }else if(tern == "two" && packet == "ExtraLarge"){
        price = 31.79;
    }

    if(internetYesOrNo == "yes" && price <= 10){
        price += 5.50
    }else if(internetYesOrNo == "yes" && (price > 10 && price <= 30)){
        price += 4.35;
    }else if(internetYesOrNo == "yes" && price > 30){
        price += 3.85
    }

    let totalPrice = price * numberMonthForPay;

    if(tern == "two"){
        totalPrice = totalPrice - (totalPrice * 0.0375)
    }

    console.log(`${totalPrice.toFixed(2)} lv.`)
}

mobileOperator(["one", "Small", "yes", "10"]);
