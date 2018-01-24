function quadraticEquation(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);

    if(d < 0){
        console.log("No");
    }else if(x1 == x2){
        console.log(x2);
    }else{
        console.log(x2);
        console.log(x1);
    }
}

quadraticEquation([6, 11, -35]);