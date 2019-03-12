function task(arr) {
    let annualMoney = Number(arr[0]);

    let shoes = annualMoney - (annualMoney * 0.4);
    let sportOutfit = shoes - (shoes * 0.2);
    let ball = sportOutfit / 4;
    let accessories = ball / 5;

    let total = annualMoney + shoes + sportOutfit + ball + accessories;

    console.log(total.toFixed(2));
}

task([
    '230'
    ]
);