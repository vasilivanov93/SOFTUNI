function task(arr) {
    let type = arr[0];
    let restaurant = arr[1];
    let numberPortions = Number(arr[2]);
    let order = arr[3];

    if (restaurant !== 'Sushi Zone' && restaurant !== 'Sushi Time' && restaurant !== 'Sushi Bar' && restaurant !== 'Asian Pub') {
        console.log(`${restaurant} is invalid restaurant!`);
    } else {
        let price = 0;
        if (restaurant === 'Sushi Zone' && type === 'sashimi') {
            price = 4.99;
        } else if (restaurant === 'Sushi Zone' && type === 'maki') {
            price = 5.29;
        }  else if (restaurant === 'Sushi Zone' && type === 'uramaki') {
            price = 5.99;
        }  else if (restaurant === 'Sushi Zone' && type === 'temaki') {
            price = 4.29;
        }

        if (restaurant === 'Sushi Time' && type === 'sashimi') {
            price = 5.49;
        } else if (restaurant === 'Sushi Time' && type === 'maki') {
            price = 4.69;
        }  else if (restaurant === 'Sushi Time' && type === 'uramaki') {
            price = 4.49;
        }  else if (restaurant === 'Sushi Time' && type === 'temaki') {
            price = 5.19;
        }

        if (restaurant === 'Sushi Bar' && type === 'sashimi') {
            price = 5.25;
        } else if (restaurant === 'Sushi Bar' && type === 'maki') {
            price = 5.55;
        }  else if (restaurant === 'Sushi Bar' && type === 'uramaki') {
            price = 6.25;
        }  else if (restaurant === 'Sushi Bar' && type === 'temaki') {
            price = 4.75;
        }

        if (restaurant === 'Asian Pub' && type === 'sashimi') {
            price = 4.50;
        } else if (restaurant === 'Asian Pub' && type === 'maki') {
            price = 4.80;
        }  else if (restaurant === 'Asian Pub' && type === 'uramaki') {
            price = 5.50;
        }  else if (restaurant === 'Asian Pub' && type === 'temaki') {
            price = 5.50;
        }

        let total = price * numberPortions;

        if (order === 'Y') {
            console.log(`Total price: ${Math.ceil(total + (total * 0.2))} lv.`);
        } else {
            console.log(`Total price: ${Math.ceil(total)} lv.`);
        }
    }
}

task([
        'maki',
        'Sushi Zone',
        '4',
        'Y'
    ]
);