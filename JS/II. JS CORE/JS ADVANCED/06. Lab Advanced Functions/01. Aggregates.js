function aggregates(arr) {
    console.log(`Sum = ${arr.reduce((a, b) => a + b)}`);
    console.log(`Min = ${Math.min(...arr)}`);
    console.log(`Max = ${Math.max(...arr)}`);
    console.log(`Product = ${arr.reduce((a, b) => a * b)}`);
    console.log(`Print = ${arr.join('')}`);
}

aggregates([2,3,10,5]);