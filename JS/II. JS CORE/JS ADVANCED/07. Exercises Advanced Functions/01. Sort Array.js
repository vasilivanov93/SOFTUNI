function solve(arr, orderType) {
    if (orderType === 'asc') {
        return arr.sort((a, b) => a - b);
    } else if (orderType === 'desc') {
        return arr.sort((a, b) => b - a);
    }
}

console.log(solve([3, 1, 2, 10, 4, 8, 5, 7, 9, 20, 6], 'desc'));