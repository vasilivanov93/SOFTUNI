function heroicInventory(arr) {
    let result = [];

    for (let str of arr) {
        let tokens = str.split(' / ').filter(a => a !== '');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = [];

        if(tokens.length > 2) {
            items = tokens[2].split(", ");
        }

        let hero = {name:name, level:level, items:items}
        result.push(hero);
    }

    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun' ,
    'Derek / 12 / BarrelVest, DestructionSword' ,
    'Hes / 1 / Desolator, Sentinel, Antara']);