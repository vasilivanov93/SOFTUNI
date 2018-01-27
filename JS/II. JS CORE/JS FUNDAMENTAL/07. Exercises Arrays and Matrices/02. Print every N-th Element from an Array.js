function printEveryNthElement(arr) {
    let nThElement = Number(arr.splice(arr.length - 1));

    for (let i = 0; i < arr.length; i += nThElement) {
        let element = arr[i];
        console.log(element)
    }
}

printEveryNthElement(["5", "20", "31", "4", "20", "2"]);