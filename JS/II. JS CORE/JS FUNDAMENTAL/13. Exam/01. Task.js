function solve(arr) {
    let totalGold = 0;

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' : ').filter(w => w !== '');
        let profession = tokens[0];
        let gold = Number(tokens[1]);

        if (gold < 200) {
            continue;
        }
        let currentGold = gold;

        if (profession === 'Programming' || profession === 'Hardware maintenance' || profession === 'Cooking' ||
        profession === 'Translating' || profession === 'Designing') {

            if ((i + 1) % 2 === 0) {
                totalGold += currentGold + (200 * 0.8);
            } else {
                totalGold += currentGold;
            }

        } else if (profession === 'Driving' || profession === 'Managing' || profession === 'Fishing' || profession === 'Gardening') {
            totalGold += currentGold;
        } else {
            if ((i + 1) % 2 === 0) {
                //
            } else  if ((i + 1) % 3 === 0) {
                //
            } else {
                totalGold += currentGold;
            }

        }



    }

    console.log(totalGold)
}

solve([ "Programming : 500",
        "Driving : 243.55",
        "Acting : 200",
        "Singing : 100",
        "Cooking : 199",
        "Hardware maintenance : 800",
        "Gardening : 700",
        "Programming : 500"]);