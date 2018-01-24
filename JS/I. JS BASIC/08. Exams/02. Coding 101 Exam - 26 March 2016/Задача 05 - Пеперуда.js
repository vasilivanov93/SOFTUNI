function butterfly([arg1]){
    let n = Number(arg1);

    for(let i = 1; i <= n - 2; i++){
        if(i % 2 == 0){
            console.log("-".repeat(n - 2) + "\\" + " " + "/" + "-".repeat(n - 2));
        }else{
            console.log("*".repeat(n - 2) + "\\" + " " + "/" + "*".repeat(n - 2));
        }
    }

    console.log(" ".repeat(n - 1) + "@" + " ".repeat(n - 1));

    for(let j = n - 2; j >= 1; j--){
        if(j % 2 == 0){
            console.log("-".repeat(n - 2) + "/" + " " + "\\" + "-".repeat(n - 2));
        }else{
            console.log("*".repeat(n - 2) + "/" + " " + "\\" + "*".repeat(n - 2));
        }
    }    
}