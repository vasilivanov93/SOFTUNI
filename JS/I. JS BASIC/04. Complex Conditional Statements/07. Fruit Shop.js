function fruitShop([arg1, arg2, arg3]){
    let fruit = arg1.toLowerCase();
    let day = arg2.toLowerCase();
    let quantity = Number(arg3);

    if(day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"){
        if(fruit == "banana"){
            console.log((quantity * 2.5).toFixed(2));
        }else if(fruit == "apple"){
            console.log((quantity * 1.2).toFixed(2));
        }else if(fruit == "orange"){
            console.log((quantity * 0.85).toFixed(2));
        }else if(fruit == "grapefruit"){
            console.log((quantity * 1.45).toFixed(2));
        }else if(fruit == "kiwi"){
            console.log((quantity * 2.7).toFixed(2));
        }else if(fruit == "pineapple"){
            console.log((quantity * 5.5).toFixed(2));
        }else if(fruit == "grapes"){
            console.log((quantity * 3.85).toFixed(2));
        }else{
            console.log("error")
        }
    }else if(day == "saturday"|| day == "sunday"){
        if(fruit == "banana"){
            console.log((quantity * 2.7).toFixed(2));
        }else if(fruit == "apple"){
            console.log((quantity * 1.25).toFixed(2));
        }else if(fruit == "orange"){
            console.log((quantity * 0.90).toFixed(2));
        }else if(fruit == "grapefruit"){
            console.log((quantity * 1.60).toFixed(2));
        }else if(fruit == "kiwi"){
            console.log((quantity * 3).toFixed(2));
        }else if(fruit == "pineapple"){
            console.log((quantity * 5.6).toFixed(2));
        }else if(fruit == "grapes"){
            console.log(quantity * 4.2);
        }else{
            console.log("error")
        }
    }else{
        console.log('error')
    }
}