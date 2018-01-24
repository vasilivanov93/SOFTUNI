function sumAndVAT(args) {
    let sum = 0;

    for (let number of args) {
        sum += number;
    }

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${sum * 0.2}`);
    console.log(`total = ${(sum + (sum * 0.2))}`)
}

sumAndVAT([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);