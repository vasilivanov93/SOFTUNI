function dailyProfit([arg1, arg2, arg3]){
    let workDays = Number(arg1);
    let moneyPerDay = parseFloat(arg2);
    let courseDollar = parseFloat(arg3);

    let salaryPerMonth = parseFloat(workDays * moneyPerDay);   
    let annualProfit = parseFloat((salaryPerMonth * 12) + (salaryPerMonth * 2.5));
    let tax = parseFloat(annualProfit * 0.25);

    let netAnnualProfit = parseFloat((annualProfit - tax) * courseDollar);
    let averageProfitPerDay = parseFloat(netAnnualProfit / 365);

    console.log(averageProfitPerDay.toFixed(2));
}