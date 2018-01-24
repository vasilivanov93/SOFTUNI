function checkPrime([arg1]){
    let n = arg1;
    let isPrime = true;

    if (n < 2)
    {
        isPrime = false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(n); divisor++){
        if (n % divisor == 0)
        {
            isPrime = false;
            break;
        }
    }

    if (isPrime){
        console.log("Prime");
    }else{
        console.log("Not Prime");
    }
}