let expect = require('chai').expect;

class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
           throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}





describe('General Unit Test', () => {
    let output;

    beforeEach(() => {
        output  = new Calculator();
    });

    it('add return true', () => {
        expect(Calculator.prototype.hasOwnProperty('add')).to.be.true
    });
    it('remove return true', () => {
        expect(Calculator.prototype.hasOwnProperty('divideNums')).to.be.true
    });
    it('get return true', () => {
        expect(Calculator.prototype.hasOwnProperty('toString')).to.be.true
    });
    it('get return true', () => {
        expect(Calculator.prototype.hasOwnProperty('orderBy')).to.be.true
    });


    it("should be an object", () => {
        expect(Object.prototype.toString.call(output)).to.equal('[object Object]');
    });
    it('should return object for listData', () => {
        expect(typeof output).to.be.equal('object')
    });
    it('should return function for listSorted.add', () => {
        expect(typeof output.add).to.be.equal('function')
    });
    it('should return function for listSorted.remove', () => {
        expect(typeof output.divideNums).to.be.equal('function')
    });
    it('should return function for listSorted.get', () => {
        expect(typeof output.toString).to.be.equal('function')
    });
    it('should return function for listSorted.get', () => {
        expect(typeof output.orderBy).to.be.equal('function')
    });

    it('should return true for data exist', () => {
        expect(output.hasOwnProperty('expenses')).to.be.true;
    });
    it('should return true for list instanceof', () => {
        expect(output.expenses instanceof Array).to.be.true;
    });
    it('should return 0 for list.length', () => {
        expect(output.expenses.length).to.be.equal(0);
    });

    it('should return 0 for list.length', () => {
        expect(output.toString()).to.be.equal('empty array');
    });
    it('should return 0 for list.length', () => {
        output.add(10)
        expect(output.toString()).to.be.equal('10');
    });
    it('should return 0 for list.length', () => {
        output.add(10)
        output.add(1)
        expect(output.toString()).to.be.equal('10 -> 1');
    });
    it('should return 0 for list.length', () => {
        output.add(10)
        output.add(1)
        output.add(45)
        expect(output.toString()).to.be.equal('10 -> 1 -> 45');
    });
    it('should return 0 for list.length', () => {
        output.add(10)
        output.add('Pesho')
        output.add('5')
        output.add(10)
        expect(output.divideNums()).to.be.equal(1);
    });
    it('should return 0 for list.length', () => {
        output.add(-10)
        output.add(-5)
        expect(output.divideNums()).to.be.equal(2);
    });
    it('should return 0 for list.length', () => {
        output.add(-5)
        output.add(-10)
        expect(output.divideNums()).to.be.equal(0.5);
    });
    it('should return 0 for list.length', () => {
        output.add(1.1)
        output.add(25.9)
        expect(output.divideNums()).to.be.closeTo(0.04, 0.01);
    });
    it('should return 0 for list.length', () => {
        output.add(5)
        output.add(25.9)
        output.add(0);
        expect(output.divideNums()).to.be.equal('Cannot divide by zero');
    });
    it('should return 0 for list.length', () => {
        expect(() => output.divideNums()).to.be.throw('There are no numbers in the array!');
    });
    it('should return 0 for list.length', () => {
        output.add('Pesho');
        output.add('Gosho');
        output.add('Minka')
        expect(output.orderBy()).to.be.equal('Gosho, Minka, Pesho');
    });
    it('should return 0 for list.length', () => {
        output.add(5.55);
        output.add(-2);
        output.add(1200)
        expect(output.orderBy()).to.be.equal('-2, 5.55, 1200');
    });
    it('should return 0 for list.length', () => {
        output.add(5.55);
        output.add(-2);
        output.add('Gosho');
        output.add(1200)
        output.add('Pesho');
        output.add('Minka')
        expect(output.orderBy()).to.be.equal('-2, 1200, 5.55, Gosho, Minka, Pesho');
    });
    it('should return 0 for list.length', () => {
        expect(output.orderBy()).to.be.equal('empty');
    });
});
