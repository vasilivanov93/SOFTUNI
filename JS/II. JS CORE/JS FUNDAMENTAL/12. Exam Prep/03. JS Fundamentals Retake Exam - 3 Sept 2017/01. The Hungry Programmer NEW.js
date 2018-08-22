function solve(products, commandData) {
    let count = 0;
    for (let i = 0; i < commandData.length; i++) {
        let data = commandData[i].split(' ').filter(w => w !== '');
        let command = data[0];

        if (command === 'Serve') {
            let mealServe = products.pop();
            if (mealServe !== undefined) {
                console.log(`${mealServe} served!`);
            }
        } else if (command === 'Eat') {
            let mealEat = products.shift();
            if (mealEat !== undefined) {
                count++;
                console.log(`${mealEat} eaten`);
            }
        } else if (command === 'Add') {
            let productForAdd = data[1];
            if (productForAdd !== undefined) {
                products.unshift(productForAdd);
            }
        } else if (command === 'Consume') {
            let startIndex = Number(data[1]);
            let endIndex = Number(data[2]);
            if (products[startIndex] !== undefined && products[endIndex] !== undefined) {
                count += endIndex - startIndex + 1;
                products.splice(startIndex, count);
                console.log(`Burp!`);
            }
        } else if (command === 'Shift') {
            let startIndex = Number(data[1]);
            let endIndex = Number(data[2]);
            swap(products, startIndex, endIndex);
        } else if (command === 'End') {
            break;
        }
    }

    if (products.length > 0) {
        console.log(`Meals left: ${products.join(', ')}`);
    } else {
        console.log(`The food is gone`);
    }
    console.log(`Meals eaten: ${count}`);

    function swap(products, start, end) {
        if (products[start] !== undefined && products[end] !== undefined) {
            let tmp = products[start];
            products[start] = products[end];
            products[end] = tmp;
        }
    }
}