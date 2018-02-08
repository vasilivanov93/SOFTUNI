function arithmephile(arr) {
    arr = arr.map(Number);
    let maxProduct = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element >= 0 && element < 10) {
            let product = 1;
            for (let index = i + 1; index <= i + element; index++) {
                product *= arr[index];
            }

            if (product > maxProduct) {
                maxProduct = product;
            }
        } 
    }

    console.log(maxProduct);
}