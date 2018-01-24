function figureOfFourSquares(input){
    let n = Number(input);
    let dash = '-';
    let char = '|';
    let plus = '+';
 
    if(n != 2){
        console.log(plus + dash.repeat(n - 2) + plus + dash.repeat(n - 2) + plus);
        
        for(let i = 0; i < n / 2 - 2; i++){
            console.log(char + " ".repeat(n - 2) + char + " ".repeat(n - 2) + char);
        }

        console.log(plus + dash.repeat(n-2) + plus + dash.repeat(n - 2) + plus);

        for(let i = 0; i < n / 2 - 2; i++){
            console.log(char + " ".repeat(n - 2) + char + " ".repeat(n - 2) + char);
        }

        console.log(plus + dash.repeat(n - 2) + plus + dash.repeat(n - 2) + plus);
    }
    else{
        console.log(plus + plus + plus);
    }
}


figureOfFourSquares(7);