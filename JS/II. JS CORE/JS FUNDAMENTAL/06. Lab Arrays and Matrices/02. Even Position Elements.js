function evenPossitionElements(arr) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if(i % 2 == 0){
            result += `${element} `;  
        }
    }

    console.log(result);
}

evenPossitionElements(['5', '10']);