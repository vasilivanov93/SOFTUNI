function rhombusOfStars([arg1]){
    let n = Number(arg1);

    for(let i = 1; i <= n; i++){
        console.log(" ".repeat(n - i) + "* ".repeat(i));
    }

    for(let j = n - 1; j >= 1; j--){
        console.log(" ".repeat(n - j) + "* ".repeat(j));
    }
}