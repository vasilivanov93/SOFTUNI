function vacation([arg1, arg2, arg3, arg4]){
    let numberAdualt = Number(arg1);
    let numberStudent = Number(arg2);
    let numberOvernight = Number(arg3);
    let typeTransport = arg4;

    let priceAdult = 0;
    let priceStudent = 0;
    let totalPrice = 0;
    let priceHotel = numberOvernight * 82.99;
    let comission = 0;

    let totalTourists = numberAdualt + numberStudent;

    let totalSum = 0;

    if(typeTransport == "train"){
        if(totalTourists >= 50){
            priceAdult = 12.495;
            priceStudent = 7.495;
            totalPrice = ((numberAdualt * priceAdult) + (numberStudent * priceStudent)) * 2;
            comission = (totalPrice + priceHotel) * 0.1;
            
            totalSum = totalPrice + priceHotel + comission;
        }else{
            priceAdult = 24.99;
            priceStudent = 14.99;
            totalPrice = ((numberAdualt * priceAdult) + (numberStudent * priceStudent)) * 2;
        
            comission = (totalPrice + priceHotel) * 0.1;
            totalSum = totalPrice + priceHotel + comission;
        }  
    }else if(typeTransport == "bus"){
        priceAdult = 32.50;
        priceStudent = 28.50;
        totalPrice = ((numberAdualt * priceAdult) + (numberStudent * priceStudent)) * 2;
        comission = (totalPrice + priceHotel) * 0.1;

        totalSum = totalPrice + priceHotel + comission;
    }else if(typeTransport == "boat"){
        priceAdult = 42.99;
        priceStudent = 39.99;
        totalPrice = ((numberAdualt * priceAdult) + (numberStudent * priceStudent)) * 2;
        comission = (totalPrice + priceHotel) * 0.1;

        totalSum = totalPrice + priceHotel + comission;
    }else if(typeTransport == "airplane"){
        priceAdult = 70;
        priceStudent = 50;
        totalPrice = ((numberAdualt * priceAdult) + (numberStudent * priceStudent)) * 2;
        comission = (totalPrice + priceHotel) * 0.1;

        totalSum = totalPrice + priceHotel + comission;
    }


    console.log(totalSum.toFixed(2));
}