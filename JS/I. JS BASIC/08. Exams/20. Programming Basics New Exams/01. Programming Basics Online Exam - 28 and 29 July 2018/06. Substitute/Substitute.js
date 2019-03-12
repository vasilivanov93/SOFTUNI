function num(arr) { 
    let k = Number(arr[0]);
    let l = Number(arr[1]);
    let m = Number(arr[2]);
    let n = Number(arr[3]);

    let counter = 0;

    for (let first = k; first <= 8; first++) {
        for (let second = 9; second >= l; second--){
            for (let third = m; third <= 8; third++){
                for (let fourth = 9; fourth >= n; fourth--){
                    if (first % 2 == 0 && second % 2 != 0 && third % 2 == 0 && fourth % 2 != 0) {
                        if (first == third && second == fourth) {
                            console.log("Cannot change the same player.");
                        } else {
                            console.log(`${first}${second} - ${third}${fourth}`);
                            counter++;
                        }

                        if (counter >= 6) {
                            return;
                        }
                    }
                }
            }
        }
    }
 }