function task(arr) {
    let n = Number(arr[0]);
    let m = Number(arr[1]);
    let s = Number(arr[2]);

    let result = [];

    for (let i = m; i >= n; i--) {
        if (i % 2 === 0) {
            if (i % 3 === 0) {
                if (i === s) {
                    break;
                }
                result.push(i);
            }
        }
    }

    console.log(result.join(' '));
}