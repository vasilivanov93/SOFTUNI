class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

let expect = require('chai').expect;

describe('Sumator Class Unit Tests', () => {
    let list;

    beforeEach(() => {
        list = new Sumator();
    });
    describe('General Unit Tests', () => {
        it('should return true for add exist', () => {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.true;
        });
        it('should return true for sumNums exist', () => {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.true;
        });
        it('should return true for removeByFilter exist', () => {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.true;
        });
        it('should return true for toString exist', () => {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.true;
        });
        it('should return true for data exist', () => {
            expect(list.hasOwnProperty('data')).to.be.true;
        });
        it('should return true for data instanceof', () => {
            expect(list.data instanceof Array).to.be.true;
        });
        it('should return 0 for data.length', () => {
            expect(list.data.length).to.be.equal(0);
        });
        it('should return object for list.data', () => {
            expect(typeof list.data).to.be.equal('object');
        });
    });

    describe('add Unit Tests', () => {
        it('should return 1 for add one number', () => {
            list.add(5);
            expect(list.data.length).to.be.equal(1);
        });
        it('should return 3 for add many elements', () => {
            list.add(5);
            list.add(4);
            list.add('pesho');
            expect(list.data.length).to.be.equal(3);
        });
        it('should return 3 for add arr', () => {
            list.add([5, 6, 8]);
            expect(list.data.length).to.be.equal(1);
        });
    });

    describe('sum Unit Tests', () => {
        it('should return 19 for 5 + 4', () => {
            list.add(5);
            list.add(4);
            list.add(10);
            expect(list.sumNums()).to.be.equal(19);
        });
        it('correctly filters non-numbers when summing', function () {
            list.add(4);
            list.add('pesho');
            list.add([1, 2, 3]);
            expect(list.sumNums()).to.equal(4, "Didn't filter sum");
        });
        it('should return 9 for 5', () => {
            list.add(5);
            expect(list.sumNums()).to.be.equal(5);
        });
        it('should return 2.2 for floating numbers', () => {
            list.add(1.1);
            list.add(1.1);
            expect(list.sumNums()).to.be.closeTo(2.2, 0.01);
        });
        it('should return 2.2 for negative numbers', () => {
            list.add(-10);
            list.add(-5);
            expect(list.sumNums()).to.be.equal(-15);
        });
        it('should return 0 for empty', () => {
            expect(list.sumNums()).to.be.equal(0);
        });
    });

    describe('removeByFilter Unit Tests', () => {
        it('remove one number', () => {
            list.add(4);
            list.add(5);
            list.removeByFilter((el) => el === 4);
            expect(list.sumNums()).to.be.equal(5);
        });
        it('removes all matching elements', function () {
            list.add(4);
            list.add('pesho');
            list.add(4);
            list.removeByFilter((e) => e === 4);
            expect(list.data).to.not.contains(4);
        });
    });

    describe('toString Unit Tests', () => {
        it('return empty for empty arr', () => {
            expect(list.toString()).to.be.equal('(empty)')
        });
        it('return pesho, gosho, 10 for add element', () => {
            list.add('pesho');
            list.add('gosho');
            list.add(10);
            expect(list.toString()).to.be.equal('pesho, gosho, 10')
        });
    });
});
