function magicMatrices(matrix) {
    let sumInitial = matrix[0].reduce((a, b) => a + b, 0);

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = matrix[row].reduce((a, b) => a + b, 0);
        if (sumRow != sumInitial) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sumCol = 0;
        for (let row = 0; row < matrix.length; row++) {
            sumCol += matrix[col][row];
        }
        if (sumCol != sumInitial) {
            return false;
        }
    }

    return true;
}

magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);