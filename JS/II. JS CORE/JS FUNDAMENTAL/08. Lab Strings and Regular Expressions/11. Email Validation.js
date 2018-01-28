function emailValidation(str) {
    let pattern = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)$/;
    let result = pattern.test(str);

    if (result) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}

emailValidation('invalid@emai1.bg')