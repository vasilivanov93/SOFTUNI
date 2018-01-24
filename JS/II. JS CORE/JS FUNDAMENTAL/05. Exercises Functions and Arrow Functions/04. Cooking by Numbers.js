function cookingByNumbers(arr) {
    let number = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        let cooking = arr[i];
        
        if(cooking == "chop"){
            number = number / 2;
        }else if(cooking == "dice"){
            number = Math.sqrt(number);
        }else if(cooking == "spice"){
            number = number + 1;
        }else if(cooking == "bake"){
            number = number * 3;
        }else if(cooking == "fillet"){
            number = number - (number * 0.2);
        }
        console.log(number);
    }  
}

cookingByNumbers([9, "dice", "spice", "chop", "bake", "fillet"]);