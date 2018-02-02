function autoEngineeringCompany(arr) {
    let result = new Map();
    for (let str of arr) {
        let tokens = str.split(' | ');
        let brand = tokens[0];
        let model = tokens[1];
        let producedCars = Number(tokens[2]);
        
        if(!result.get(brand)){
            result.set(brand, new Map());
        }

        if(!result.get(brand).get(model)){
            result.get(brand).set(model, 0);
        }

        result.get(brand).set(model, result.get(brand).get(model) + producedCars);
    }

    for (let [key, value] of result) {
        console.log(`${key}`);

        for (const [model, producedCars] of value) {
            console.log(`###${model} -> ${producedCars}`)
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000', 
    'Audi | Q6 | 100', 
    'BMW | X5 | 1000', 
    'BMW | X6 | 100', 
    'Citroen | C4 | 123', 
    'Volga | GAZ-24 | 1000000', 
    'Lada | Niva | 1000000', 
    'Lada | Jigula | 1000000', 
    'Citroen | C4 | 22', 
    'Citroen | C5 | 10']);