function janNotation(arr) {
    let numbers = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (typeof(element) === 'number') {
            numbers.push(element)
        } else {
            if (numbers.length > 1) {
                let num1 = numbers.pop();
                let num2 = numbers.pop();

                switch (element) {
                    case '+':
                        numbers.push(num2 + num1);
                        break;
                    case '-':
                        numbers.push(num2 - num1);
                        break; 
                    case '*':
                        numbers.push(num2 * num1);
                        break; 
                    case '/':
                        numbers.push(num2 / num1);
                        break;  
                    default:
                        break;
                }
            } else {
                console.log(`Error: not enough operands!`);
                return;
            }
        }
    }

    if (numbers.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(numbers[0]);
    }
}