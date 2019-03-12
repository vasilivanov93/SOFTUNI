function task(arr) {
    let budget = Number(arr.shift());

    let sum = 2.50;
    let count = 0;
    let countMore = 0;
    for (let i = 0; i < arr.length; i += 2) {
        let order = arr[i];
        let price = Number(arr[i + 1]);

        if (order === 'Order') {
            break;
        } else {
            if (price !== undefined) {
                count++;
                sum += price;

                if (sum > budget) {
                    console.log('You will exceed the budget if you order this!');
                    countMore++;
                    sum -= price;
                }
            }
        }
    }

    console.log(`You ordered ${count - countMore} items!`);
    console.log(`Total: ${sum.toFixed(2)}`);
}

task([
        '25.00',
        'Soup',
        '3.50',
        'Salad',
        '7.80',
        'Fish',
        '9.00',
        'Cake',
        '5.00',
        'Ice cream',
        '2.00',
        'Order'
    ]
);