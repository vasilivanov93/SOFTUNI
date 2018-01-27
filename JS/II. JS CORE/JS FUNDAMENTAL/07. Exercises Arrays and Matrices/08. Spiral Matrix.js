function spiralMatrix(rows, cols) {
    let matrix = [];
    let num = 1;

    for (let i = 0; i < cols; i++) {
        matrix.push('0'.repeat(rows).split('').map(Number));   
    }

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;
 
    let index = 1;
    let direction = 0;
    while (top <= bottom && left <= right) {
        switch (direction % 4) {
            case 0:
                for (let col = left; col <= right; col++) {
                    matrix[top][col] = index++;
                }
                top++;
                direction++;
                break;
            case 1:
                for (let row = top; row <= bottom; row++) {
                    matrix[row][right] = index++;
                }
                right--;
                direction++;
                break;
            case 2:
                for (let col = right; col >= left; col--) {
                    matrix[bottom][col] = index++;
                }
                bottom--;
                direction++;
                break;
            default:
                for (let row = bottom; row >= top; row--) {
                    matrix[row][left] = index++;
                }
                left++;
                direction++;
                break;
        }
    }

    let result = matrix.map(row => row.join(' ')).join('\n');
    console.log(result); 
}

spiralMatrix(5, 5)