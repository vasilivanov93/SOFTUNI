function cappyJuice(arr) {
    let result = {};
    let bottles = {};
    
    for (let str of arr) {
        let tokens = str.split(' => ').filter(a => a !== '');
        let typeJuice = tokens[0];
        let quantity = Number(tokens[1]);

        if (!result.hasOwnProperty(typeJuice)) {
            result[typeJuice] = 0;
        }

        result[typeJuice] += quantity;
        if (result[typeJuice] >= 1000) {
            bottles[typeJuice] = parseInt(result[typeJuice] / 1000);
        }
    }

    for (let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

cappyJuice(['Orange => 2000', 
    'Peach => 1432', 
    'Banana => 450', 
    'Peach => 600', 
    'Strawberry => 549']);