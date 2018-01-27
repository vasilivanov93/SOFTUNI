function printArrayWithGivenDelimiter(arr) {
    let delimiter = arr.splice(arr.length - 1);

    console.log(arr.join(`${delimiter}`));
}

printArrayWithGivenDelimiter(["One", "Two", "Three", "Four", "Five", "-"]);