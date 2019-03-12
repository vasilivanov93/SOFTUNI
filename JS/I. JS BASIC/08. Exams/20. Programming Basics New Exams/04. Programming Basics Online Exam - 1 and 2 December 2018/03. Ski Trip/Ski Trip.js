function task(arr) {
    let [days, type, rating] = arr;
    days = Number(days) - 1;

    let price = 0;
    if (type === 'room for one person') {
        price = 18;
    } else if (type === 'apartment') {
        price = 25;
    } else if (type === 'president apartment') {
        price = 35;
    }

    let discount = 0;
    if (type === 'apartment' && days < 10) {
        discount = 0.3;
    } else if (type === 'apartment' && days >= 10 && days <= 15) {
        discount = 0.35;
    } else if (type === 'apartment' && days > 15) {
        discount = 0.5;
    }

    if (type === 'president apartment' && days < 10) {
        discount = 0.1;
    } else if (type === 'president apartment' && days >= 10 && days <= 15) {
        discount = 0.15;
    } else if (type === 'president apartment' && days > 15) {
        discount = 0.2;
    }

    let total = price * days;
    let totalWithDiscount = total - (total * discount);

    if (rating === 'negative') {
        totalWithDiscount -= totalWithDiscount * 0.1;
    } else if (rating === 'positive') {
        totalWithDiscount += totalWithDiscount * 0.25;
    }

    console.log(totalWithDiscount.toFixed(2));
}

task([
        '12',
        'room for one person',
        'positive'
    ]
);