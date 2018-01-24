function binaryLogarithm(numbers) {
    for (let num of numbers) {
        console.log(Math.log2(num))
    }
}

binaryLogarithm([1024, 1048576, 256, 1, 2]);