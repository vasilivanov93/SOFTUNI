function gladiatorExpenses(countLosses, priceHelmet, priceSword, priceShield, priceArmor) {
    let countBrokenHelmet = 0;
    let countBrokenSword = 0;
    let countBrokenShield = 0;
    let countBrokenArmor = 0;

    for (let i = 1; i <= countLosses; i++) {
        if (i % 2 === 0) {
            countBrokenHelmet++;
        }
        if (i % 3 === 0) {
            countBrokenSword++;
        }

        if (i % 6 === 0) {
            countBrokenShield++;
        }

        if (i % 12 === 0) {
            countBrokenArmor++;
        }
    }

    let result = (countBrokenHelmet * priceHelmet) + (countBrokenSword * priceSword)
        + (countBrokenShield * priceShield) + (countBrokenArmor * priceArmor);

    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.50, 21.50, 40, 200);