function gladiatorInventory(arr) { 
let inventory = arr.shift().split(' ').filter(w => w !== '');
    for (let el of arr) {
        let tokens = el.split(' ').filter(w => w !== '');
        let command = tokens[0];
        let equipment = tokens[1];

        if (command === 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        } else if (command === 'Trash') {
            for (let i = inventory.length - 1; i >= 0; i--) {
                if (inventory[i] === equipment) {
                    inventory.splice(i, 1);
                }
            }
        } else if (command === 'Repair') {
            for (let i = inventory.length - 1; i >= 0; i--) {
                if (inventory[i] === equipment) {
                    let rep = inventory.splice(i, 1);
                    inventory.push(rep.join(''));
                }
            }
        } else if (command === 'Upgrade') {
            let token = equipment.split('-').filter(w => w !== '');
            let itemForUpgrade = token[0];
            let upgrade = token[1];
            let upg = `${itemForUpgrade}:${upgrade}`;
            for (let i = inventory.length - 1; i >= 0; i--) {
                if (inventory[i] === itemForUpgrade) {
                    inventory.splice(i + 1, 0, upg);
                }
            }
        } else if (command === 'Fight!') {
            break;
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Buy Bag',
    'Fight!'
]);