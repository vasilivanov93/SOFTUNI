function task(arr) {
    let number = arr[0].split('');
    let number1 = Number(number[0]);
    let number2 = Number(number[1]);
    let number3 = Number(number[2]);

    let sumNumber1And2 = number1 + number2;
    let sumNumber1And3 = number1 + number3;

    let digit = Number(arr[0]);
    let result = "";

    for (let i = 1; i <= sumNumber1And2; i++) {
        result = "";
        for (let o = 1; o <= sumNumber1And3; o++) {
            if (digit % 5 === 0) {
                digit -= number1;
            } else if (digit % 3 === 0) {
                digit -= number2;
            } else {
                digit += number3;
            }

            result += `${digit} `;
        }
        console.log(result);
    }
}

task([
        '132'
    ]
);