function solve(arr) {
	let result = {};

    for (let el of arr) {
        let [country, town, price] = el.split(' > ').filter(w => w !== '');
        if (!result.hasOwnProperty(country)) {
            result[country] = {};
            result[country][town] = Number(price);
        } else {
            if (!result[country].hasOwnProperty(town)) {
                result[country][town] = Number(price)
            } else {
                if (result[country][town] > Number(price)) {
                    result[country][town] = Number(price)
                }
            }
        }
    }

    let sortedCountry = Object.keys(result).sort((a, b) => a.localeCompare(b));
    for (let country of sortedCountry) {
        let sortedTown = Object.keys(result[country]).sort((a, b) => a - b);
        let sec = ''
        for (let town of sortedTown) {

            sec = `${town} -> ${result[country][town]}`
        }
        console.log(`${country} -> ${sec}`)
    }
    //let sortedTown = Object.keys(result[country]).sort((a, b) => a - b);
    // for (let country of sortedCountry) {
    //     //console.log(country)
    //     let sortedTown = Object.keys(result[country]).sort((a, b) => a - b);
    //     for (let town of sortedTown) {
    //         secondPart = `${town} -> ${result[country][town]}`
    //
    //     }
    //
    //     for (let second of secondPart) {
    //         console.log(`${country} -> ${second}`)
    //     }
    //
    // }

}

solve(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
);