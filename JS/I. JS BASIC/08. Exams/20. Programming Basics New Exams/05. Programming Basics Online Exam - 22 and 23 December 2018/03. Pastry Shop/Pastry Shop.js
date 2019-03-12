function task(arr) {
    let typeSweets = arr[0];
    let numberSweets = Number(arr[1]);
    let day = Number(arr[2]);

    let money = 0;

    if (day <= 24) {
        if (typeSweets === 'Cake') {
            if (day <= 15) {
                money = numberSweets * 24;
            } else if (day > 15) {
                money = numberSweets * 28.70;
            }
        } else if (typeSweets === 'Souffle') {
            if (day <= 15) {
                money = numberSweets * 6.66;
            } else if (day > 15) {
                money = numberSweets * 9.80;
            }
        } else if (typeSweets === 'Baklava') {
            if (day <= 15) {
                money = numberSweets * 12.60;
            } else if (day > 15) {
                money = numberSweets * 16.98;
            }
        }
    }

    let discount = 0;

    if (day <= 22) {
        if (money >= 100 && money <= 200) {
            discount = money * 0.85;

            if (day <= 15) {
                console.log((discount * 0.9).toFixed(2));
            } else {
                console.log(discount.toFixed(2));
            }
        } else if (money > 200) {
            discount = money * 0.75;

            if (day <= 15) {
                console.log((discount * 0.9).toFixed(2));
            } else {
                console.log(discount.toFixed(2));
            }
        }
    } else {
        console.log(money.toFixed(2));
    }
}