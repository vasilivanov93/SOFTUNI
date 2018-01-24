function stringOfNumbers1N(number) {
    let n  = Number(number);

    let result = '';
    
    for (let i = 1; i <= n; i++) {
        result += `${i}`;   
    }

    console.log(result);
}

stringOfNumbers1N('11');