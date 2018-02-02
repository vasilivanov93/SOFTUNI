function storeCatalogue(arr) {
    let result = new Map();
    for (let str of arr) {
        let tokens = str.split(' : ').filter(a => a !== '');
        let product = tokens[0];
        let price = Number(tokens[1]);

        result.set(product, price);
    }

    let set = new Set();
    Array.from(result.keys()).forEach(a => set.add(a[0]));

    for(let char of Array.from(set.keys()).sort()) {
        console.log(char);

        for(let product of Array.from(result.keys()).sort()){
            if(product.startsWith(char)) {
                console.log(`  ${product}: ${result.get(product)}`);
            }
        }
    }
}

storeCatalogue(['Appricot : 20.4', 
    'Fridge : 1500', 
    'TV : 1499', 
    'Deodorant : 10', 
    'Boiler : 300', 
    'Apple : 1.25', 
    'Anti-Bug Spray : 15', 
    'T-Shirt : 10']);