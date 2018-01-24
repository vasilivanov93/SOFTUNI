function backToThePast([arg1, arg2]){
    let inheritance = parseFloat(arg1);
    let yearToLive = Number(arg2);
    let years = 18;

    for (let i = 1800; i <= yearToLive; i++)
    {
        if (i % 2 == 0)
        {
            inheritance -= 12000;
        }
        else
        {
            inheritance -= (12000 + 50 * years);
        }
        years++;
    }
    if (inheritance < 0)
    {
        console.log(`He will need ${Math.abs(inheritance).toFixed(2)} dollars to survive.`);
    }
    else
    {
        console.log(`Yes! He will live a carefree life and will have ${inheritance.toFixed(2)} dollars left.`);
    }
}