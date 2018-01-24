function sunglasses([arg1]){
    let n = Number(arg1);
    console.log("*".repeat(n * 2) + " ".repeat(n) + "*".repeat(n * 2));
    for(let i = 1; i <= n - 2; i++){
        if(i != Math.floor((n - 1) / 2)){
        console.log("*" + "/".repeat((n * 2) - 2) + "*" + " ".repeat(n) + "*" + "/".repeat((n * 2) - 2) + "*");
        }else{
            console.log("*" + "/".repeat((n * 2) - 2) + "*" + "|".repeat(n) + "*" + "/".repeat((n * 2) - 2) + "*");
        }
    }

    console.log("*".repeat(n * 2) + " ".repeat(n) + "*".repeat(n * 2));
}