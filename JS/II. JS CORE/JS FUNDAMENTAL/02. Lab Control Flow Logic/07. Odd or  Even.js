function oddOrEven(number) {
    if(number % 1 != 0){
        console.log("invalid");
    }else if(number % 2 == 0){
        console.log("even");
    }else if(number % 2 != 0){
        console.log("odd");       
    }
}

oddOrEven(5.5);