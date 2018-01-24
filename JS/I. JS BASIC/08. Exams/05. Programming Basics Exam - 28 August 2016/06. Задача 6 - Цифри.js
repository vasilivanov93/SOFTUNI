function digits([args]){
    let number1 = Number(args[0]);
    let number2 = Number(args[1]);
    let number3 = Number(args[2]);

    let sumNumber1And2 = number1 + number2;
    let sumNumber1And3 = number1 + number3;

    let digit = Number(number1.toString() + number2.toString() + number3.toString());
    let result = "";

    for(let i = 1; i <= sumNumber1And2; i++){
        result = "";
        for(let o = 1; o <= sumNumber1And3; o++){
            
            if(digit % 5 == 0){
                digit = digit - number1;                        
            }else if(digit % 3 == 0){
                digit = digit - number2;
            }else{
                digit = digit + number3;
            }
            result += `${digit} `;
        }
        console.log(result);
    }
}