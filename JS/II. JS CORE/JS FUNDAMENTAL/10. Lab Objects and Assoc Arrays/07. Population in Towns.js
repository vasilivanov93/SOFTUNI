function populationInTowns(arr) {
    let myMap = new Map();
    for (let str of arr) {
        let [name, value] = str.split(' <-> ').filter(a => a.trim() !== '');
        if (myMap.has(name)) {
            myMap.set(name, myMap.get(name) + Number(value)) 
        } else {
            myMap.set(name, Number(value)) 
        }
    }

    for (let [key, value] of myMap) {
        console.log(`${key} : ${value}`);
    }
}

populationInTowns(['Istanbul <-> 100000', 
    'Honk Kong <-> 2100004', 
    'Jerusalem <-> 2352344', 
    'Mexico City <-> 23401925', 
    'Istanbul <-> 1000']);