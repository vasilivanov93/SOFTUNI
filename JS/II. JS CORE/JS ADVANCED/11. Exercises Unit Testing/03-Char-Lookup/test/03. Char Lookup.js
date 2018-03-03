let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('Char Lookup Unit Tests', () => {
    it('should return undefined for number string', () => {
        expect(lookupChar(2, 0)).to.be.undefined;
    });
    it('should return undefined for string index', () => {
        expect(lookupChar('pesho', 'gosho')).to.be.undefined;
    });
    it('should return Incorrect index for floatingnegative number', () => {
        expect(lookupChar('pesho', 5.55)).to.be.undefined;
    });
    it('should return Incorrect index for bigger index of string', () => {
        expect(lookupChar('pesho', 13)).to.be.equal('Incorrect index');
    });
    it('should return Incorrect index for equal index with string', () => {
        expect(lookupChar('pesho', 5)).to.be.equal('Incorrect index');
    });
    it('should return Incorrect index for negative index', () => {
        expect(lookupChar('pesho', -1)).to.be.equal('Incorrect index');
    });
    it('should return p for pesho with index 0', () => {
        expect(lookupChar('pesho', 0)).to.be.equal('p');
    });
    it('should return m for stamat with index 3', () => {
        expect(lookupChar('stamat', 3)).to.be.equal('m');
    });
});