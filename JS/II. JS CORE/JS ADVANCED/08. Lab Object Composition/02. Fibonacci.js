function getFibonator() {
    let f0 = 0; 
    let f1 = 1;
    return function() {
        let f2 = f0 + f1;
        f0 = f1;
        f1 = f2;

        return f0;
    };
}
let fib = getFibonator();
  
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
