let add = (function () {
    let sum = 0;

    return function newAdd(number) {
        sum += number;
        newAdd.toString = function () {
            return sum;
        }
        return newAdd;
    }
    
})();

console.log(add(1)(6)(-3));