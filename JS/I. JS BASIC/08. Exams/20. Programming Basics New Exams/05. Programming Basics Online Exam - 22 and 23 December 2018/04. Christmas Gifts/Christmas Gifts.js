function task(arr) {
    let adultsCount = 0;
    let kidsCount = 0;

    for (let i = 0; i <= arr.length - 1; i++)  {
        if (Number(arr[i]) <= 16) {
            kidsCount++;
        } else if (Number(arr[i]) > 16) {
            adultsCount++;
        } else {
            console.log(`Number of adults: ${adultsCount}
Number of kids: ${kidsCount}
Money for toys: ${kidsCount * 5}
Money for sweaters: ${adultsCount * 15}
`)
        }
    }
}