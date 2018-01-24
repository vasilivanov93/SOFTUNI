function oddNumberOneToN(number) {
    if(number % 2 == 0) {
        for (let i = 1; i < number; i++) {
            if(i % 2 != 0){
                console.log(i);
            }
        }
    }else {
        for (let i = 1; i <= number; i++) {
            if(i % 2 != 0){
                console.log(i);
            }
        }
    }
}

oddNumberOneToN(5);
