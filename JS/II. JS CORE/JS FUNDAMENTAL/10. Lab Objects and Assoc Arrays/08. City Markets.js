function cityMarkets(arr) {
    let towns = new Map();

    for (let str of arr) {
        let [town, product, value] = str.split(/\s*->\s*/).filter(a => a !== '');
    let multiply = value.split(/\s*:\s*/).map(Number).reduce((a, b) => a * b);
        if (towns.has(town)) {
           if (towns.get(town).has(product)) {
                towns.get(town).set(product, towns.get(product) + multiply);
           } else {
            towns.get(town).set(product, multiply);
           }
        } else {
            let itemsMap = new Map();

            itemsMap.set(product, multiply);
            towns.set(town, itemsMap);
        }
    }

    for (let [key, value] of towns) {
        console.log(`Town - ${key}`);

        for (let [products, sum] of towns.get(key)) {
            console.log(`$$$${products} : ${sum}`)
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000', 
    'Sofia -> Raspberry -> 200000 : 1500', 
    'Sofia -> Audi Q7 -> 200 : 100000', 
    'Montana -> Portokals -> 200000 : 1', 
    'Montana -> Qgodas -> 20000 : 0.2', 
    'Montana -> Chereshas -> 1000 : 0.3']);