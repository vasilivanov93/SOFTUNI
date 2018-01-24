function numberPyramid([arg1]) {
    let n = Number(arg1);

    let num = 1;

    let result = "";

    for (let row = 1; row <= n; row++)
    {
        for (let col = 1; col <= row; col++)
        {
            result += `${num} `;
            num++;

            if(num > n){
                break;
            }
        }

        if(num > n + 1){
            break;
        }

        console.log(result);
        result = "";
    }  
}

numberPyramid(["7"]);