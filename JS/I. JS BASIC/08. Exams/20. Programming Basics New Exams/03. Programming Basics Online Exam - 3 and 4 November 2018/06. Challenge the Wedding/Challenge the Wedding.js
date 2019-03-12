function task(arr) {
    let men = Number(arr[0]);
    let women = Number(arr[1]);
    let table = Number(arr[2]);

    let counter = 0;
    let result = "";

    for(let i = 1; i <= men; i++){
        for(let o = 1; o <= women; o++){
            if(counter < table){
                result += `(${i} <-> ${o}) `;
            }
            counter++;
        }
    }

    console.log(result);
}


task([
        '2',
        '2',
        '6'
    ]
);