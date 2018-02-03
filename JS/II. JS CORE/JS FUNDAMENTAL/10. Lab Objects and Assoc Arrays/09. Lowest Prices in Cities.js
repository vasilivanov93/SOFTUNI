function lowestPricesInCities(arr) {
    let result = new Map();
    for (let str of arr) {
        let tokens = str.split(' | ');
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);

        if(!result.has(product)) {
            result.set(product, new Map());
        } 

        result.get(product).set(town, price)
    }

    for (let [product, insideMap] of result) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let townWithLowestPrice = "";
        for (let [town, price] of insideMap) {
            if(price < lowestPrice) {
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000', 
'Sample Town | Orange | 2',  
'Sample Town | Peach | 1',   
'Sofia | Orange | 3',  
'Sofia | Peach | 2',  
'New York | Sample Product | 1000.1',  
'New York | Burger | 10']);