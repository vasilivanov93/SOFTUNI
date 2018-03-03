let expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('Odd or Even Unit Tests', () => {
    it('should return undefined for not string', () => {
        expect(isOddOrEven(2)).to.be.undefined;
    });
    it('should return undefined for not string', () => {
        expect(isOddOrEven({name: 'pesho'})).to.be.undefined;
    });
    it('should return undefined for not string', () => {
        expect(isOddOrEven('5')).to.be.equal('odd');
    });
    it('should return odd for river', () => {
        expect(isOddOrEven('river')).to.be.equal('odd');
    });
    it('should return even for nice', () => {
        expect(isOddOrEven('nice')).to.be.equal('even');
    });
});
