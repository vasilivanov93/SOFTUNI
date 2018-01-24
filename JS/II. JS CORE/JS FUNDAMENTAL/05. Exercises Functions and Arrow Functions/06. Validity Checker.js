function validityChecker(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

        let d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((0 - 0), 2));
        let d1 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((0 - 0), 2));
        let d2 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));


    if(d % 1 == 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    if(d1 % 1 == 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
}

validityChecker([2, 1, 1, 1]);