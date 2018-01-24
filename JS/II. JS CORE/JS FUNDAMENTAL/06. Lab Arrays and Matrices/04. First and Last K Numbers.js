function firstAndLastKNumbers(arr) {
    let search = arr[0];
    console.log(arr.slice(1, search + 1).join(' '));
    console.log(arr.reverse().slice(0, search).reverse().join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9])