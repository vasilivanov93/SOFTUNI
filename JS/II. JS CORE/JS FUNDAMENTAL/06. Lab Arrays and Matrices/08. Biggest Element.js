function biggestElement(matrix) {
    console.log(matrix.map(arr => arr.sort((a, b) => a < b)[0]).sort((a, b) => a < b)[0]);
}

biggestElement([[20, 50, 10], [8, 33, 145]]);