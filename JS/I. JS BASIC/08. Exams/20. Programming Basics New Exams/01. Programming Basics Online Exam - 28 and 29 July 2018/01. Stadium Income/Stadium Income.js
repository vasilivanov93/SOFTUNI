function task(arr) {
   let numberSectors = Number(arr[0]);
   let capacityStadium = Number(arr[1]);
   let priceTicket = Number(arr[2]);

   let profitPerOneSector = (capacityStadium * priceTicket) / numberSectors;
   let totalProfit = profitPerOneSector * numberSectors;

   let charity = (totalProfit - (profitPerOneSector * 0.75)) / 8;

   console.log(`Total income - ${totalProfit.toFixed(2)} BGN
Money for charity - ${charity.toFixed(2)} BGN
`);
}

task(['8',
        '10000',
        '3.25'
    ]
);