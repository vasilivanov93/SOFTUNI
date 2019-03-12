function task(arr) {
    let moneyToCollect = Number(arr[0]);
    let numberBookFantasy = Number(arr[1]);
    let numberBookHorror = Number(arr[2]);
    let numberBookRomance = Number(arr[3]);

    let pricePerBookFantasy = 14.90;
    let pricePerBookHorror = 9.80;
    let pricePerBookRomance = 4.30;

    let totalMoney = (numberBookFantasy * pricePerBookFantasy) + (numberBookHorror * pricePerBookHorror) + (numberBookRomance * pricePerBookRomance);

    let tax = totalMoney * 0.2;

    let totalMoneyAfterTax = totalMoney - tax;

    if (totalMoneyAfterTax > moneyToCollect) {
        let profit = totalMoneyAfterTax - moneyToCollect;
        let moneyForSellers = Math.floor(profit * 0.1);

        let finalMoney = totalMoneyAfterTax - moneyForSellers;
        console.log(`${finalMoney.toFixed(2)} leva donated.
Sellers will receive ${moneyForSellers} leva.
`);

    } else {
        let diff = moneyToCollect - totalMoneyAfterTax;

        console.log(`${diff.toFixed(2)} money needed.`)
    }
}