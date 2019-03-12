function task(arr) {
    let priceToGo = Number(arr[0]);
    let priceToReturn = Number(arr[1]);
    let priceTicketMatch = Number(arr[2]);
    let numberMatch = Number(arr[3]);
    let percentDiscount = Number(arr[4]);

    let totalPerson = 6;

    let totalMoneyForAirplain = totalPerson * (priceToGo + priceToReturn);
    let totalMoneyForAirplainAfterDiscount = totalMoneyForAirplain - (totalMoneyForAirplain * (percentDiscount / 100));
    let totalMoneyForTicketMatch = totalPerson * numberMatch * priceTicketMatch;
    let totalMoney = totalMoneyForAirplainAfterDiscount + totalMoneyForTicketMatch;

    let moneyForOne = totalMoney / totalPerson;

    console.log(`Total sum: ${totalMoney.toFixed(2)} lv.
Each friend has to pay ${moneyForOne.toFixed(2)} lv.
`);
}