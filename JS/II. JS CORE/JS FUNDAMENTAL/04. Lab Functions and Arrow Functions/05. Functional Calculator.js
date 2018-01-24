function functionalCalculator(num1, num2, sign) {
    let result = 0;

    if(sign === "+") {
        result = num1 + num2;
    }else if(sign === "-") {
        result = num1 - num2;
    }else if(sign === "*") {
        result = num1 * num2;
    }else if(sign === "/") {
        result = num1 / num2;
    }

    console.log(result);
}

functionalCalculator(2, 4, '+');