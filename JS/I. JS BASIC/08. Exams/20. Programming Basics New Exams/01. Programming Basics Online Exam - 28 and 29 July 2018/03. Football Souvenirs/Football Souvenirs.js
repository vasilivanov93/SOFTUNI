function task(arr) {
    let team = arr[0];
    let typeStock = arr[1];
    let numberStock = Number(arr[2]);

    let total = 0;

    if ((team === 'Argentina' || team === 'Brazil' || team === 'Croatia' || team === 'Denmark') &&
        (typeStock === 'flags' || typeStock === 'caps' || typeStock === 'posters' || typeStock === 'stickers')) {

        if (team === 'Argentina' && typeStock === 'flags') {
            total = numberStock * 3.25;
        } else if (team === 'Brazil' && typeStock === 'flags') {
            total = numberStock * 4.20;
        } else if (team === 'Croatia' && typeStock === 'flags') {
            total = numberStock * 2.75;
        } else if (team === 'Denmark' && typeStock === 'flags') {
            total = numberStock * 3.10;
        }

        if (team === 'Argentina' && typeStock === 'caps') {
            total = numberStock * 7.20;
        } else if (team === 'Brazil' && typeStock === 'caps') {
            total = numberStock * 8.50;
        } else if (team === 'Croatia' && typeStock === 'caps') {
            total = numberStock * 6.90;
        } else if (team === 'Denmark' && typeStock === 'caps') {
            total = numberStock * 6.50;
        }

        if (team === 'Argentina' && typeStock === 'posters') {
            total = numberStock * 5.10;
        } else if (team === 'Brazil' && typeStock === 'posters') {
            total = numberStock * 5.35;
        } else if (team === 'Croatia' && typeStock === 'posters') {
            total = numberStock * 4.95;
        } else if (team === 'Denmark' && typeStock === 'posters') {
            total = numberStock * 4.80;
        }

        if (team === 'Argentina' && typeStock === 'stickers') {
            total = numberStock * 1.25;
        } else if (team === 'Brazil' && typeStock === 'stickers') {
            total = numberStock * 1.20;
        } else if (team === 'Croatia' && typeStock === 'stickers') {
            total = numberStock * 1.10;
        } else if (team === 'Denmark' && typeStock === 'stickers') {
            total = numberStock * 0.90;
        }

        console.log(`Pepi bought ${numberStock} ${typeStock} of ${team} for ${total.toFixed(2)} lv.`);
    } else if (team !== "Argentina" && team !== "Brazil" && team !== "Croatia" && team !== "Denmark") {
        console.log('Invalid country!');
    }  else if (typeStock !== 'flags' && typeStock !== 'caps' && typeStock !== 'posters' && typeStock !== 'stickers') {
        console.log('Invalid stock!');
    }
}

task(['Denmark', 'flagss', '5']
);