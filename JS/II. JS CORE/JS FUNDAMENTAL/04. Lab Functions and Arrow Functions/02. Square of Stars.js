function squareOfStars(n) {
    let stars = n;
    for (let i = 1; i <= n; i++) {
        console.log("* ".repeat(stars));   
    }
}

squareOfStars(5)