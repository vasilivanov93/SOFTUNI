function Calculator(leftOperant, rightOperant, operator) {
    this.leftOperant = leftOperant;
    this.rightOperant = rightOperant;
    this.operator = operator;

    this.calculateResult = function() {
        let result = 0;

        switch(this.operator) {
            case "+": result = this.leftOperant + this.rightOperant; break;
            case "-": result = this.leftOperant - this.rightOperant; break;
            case "*": result = this.leftOperant * this.rightOperant; break;
            case "/": result = this.leftOperant / this.rightOperant; break;
        }

        return result;
    }
}

module.exports = Calculator;