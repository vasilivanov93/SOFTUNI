let solution = function() {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme : {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function(inputString) {
        let tokens = inputString.split(' ');
        let command = tokens[0];

        if (command === 'restock') {
            let microelements = tokens[1];
            let quantity = Number(tokens[2]);
            robot[microelements] += quantity;
            return 'Success';
        } else if (command === 'prepare') {
            let recipe = tokens[1];
            let quantity = Number(tokens[2]);
            let currentProductStats = products[recipe];

            let canProductBeCooked = true;
            for (let microelements in currentProductStats) {
                if (currentProductStats.hasOwnProperty(microelements)) {
                    let microElementQuantity = currentProductStats[microelements];
                    
                    if (robot[microelements] < microElementQuantity * quantity) {
                        canProductBeCooked = false;
                        return `Error: not enough ${microelements} in stock`;
                        break;
                    }
                }
            }

            if (canProductBeCooked) {
                for (let microelements in currentProductStats) {
                    if (currentProductStats.hasOwnProperty(microelements)) {
                        let microElementQuantity = currentProductStats[microelements];
                        
                        robot[microelements] -= microElementQuantity * quantity;
                    }
                }
                return 'Success';
            }
        } else if (command === 'report') {
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;
        }
    }
};

solution = solution();
console.log(solution('restock protein 100'));
console.log(solution('restock carbohydrate 100'));
console.log(solution('restock fat 100'));
console.log(solution('restock flavour 100'));
console.log(solution('report'));
console.log(solution('prepare coke 2'));
console.log(solution('report'));
console.log(solution('prepare coke 1'));
console.log(solution('report'));