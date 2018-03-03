let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('Math Enforcer Unit Test', () => {
    describe('AddFive Unit Test', () => {
        it('should return undefined for string', () => {
            expect(mathEnforcer.addFive('string')).to.be.undefined;
        });
        it('should return 7 for 2', () => {
            expect(mathEnforcer.addFive(2)).to.be.equal(7);
        });
        it('should return 1 for -4', () => {
            expect(mathEnforcer.addFive(-4)).to.be.equal(1);
        });
        it('should return 7.15 for 2.15', () => {
            expect(mathEnforcer.addFive(2.15)).to.be.closeTo(7.15, 0.01);
        });
    });

    describe('SubstractTen Unit Test', () => {
        it('should return undefined for string', () => {
            expect(mathEnforcer.subtractTen('string')).to.be.undefined;
        });
        it('should return 10 for 20', () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        });
        it('should return -20 for -10', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
        it('should return 15.56 for 25.56', () => {
            expect(mathEnforcer.subtractTen(25.56)).to.be.closeTo(15.56, 0.01);
        });
    });

    describe('Sum Unit Test', () => {
        it('should return undefined for string', () => {
            expect(mathEnforcer.sum('string', 2)).to.be.undefined;
        });
        it('should return undefined for string', () => {
            expect(mathEnforcer.sum(2, 'string')).to.be.undefined;
        });
        it('should return (20, 10) for 30', () => {
            expect(mathEnforcer.sum(20, 10)).to.be.equal(30);
        });
        it('should return (-10, 20) for -10', () => {
            expect(mathEnforcer.sum(-10, 20)).to.be.equal(10);
        });
        it('should return (1.1, 1.1) for 2.2', () => {
            expect(mathEnforcer.sum(1.1, 1.1)).to.be.closeTo(2.2, 0.01);
        });       
    });
});