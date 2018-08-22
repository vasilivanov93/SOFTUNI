function makeList() {
    let data = [];
    return {
        addLeft: function (item) {
            data.unshift(item);
        },
        addRight: function (item) {
            data.push(item);
        },
        clear: function () {
            data = [];
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

let expect = require('chai').expect;

describe('AddLeft, AddRight, Clear in List Unit Tests', () => {
    let listData;
    beforeEach(() => {
        listData = makeList();
    });
    describe('General Unit Tests', () => {
        it("should be an object", () => {
            expect(Object.prototype.toString.call(listData)).to.equal('[object Object]');
        });
        it('should return object for listData', () => {
            expect(typeof listData).to.be.equal('object')
        });
        it('should return function for listData.addLeft', () => {
            expect(typeof listData.addLeft).to.be.equal('function')
        });
        it('should return function for listData.addRight', () => {
            expect(typeof listData.addRight).to.be.equal('function')
        });
        it('should return function for listData.clear', () => {
            expect(typeof listData.clear).to.be.equal('function')
        });
        it('should return function for listData.toString', () => {
            expect(typeof listData.toString).to.be.equal('function')
        });
        it('should return true for listData', () => {
            expect(listData.hasOwnProperty('addLeft')).to.be.true
        });
        it('should return true for listData', () => {
            expect(listData.hasOwnProperty('addRight')).to.be.true
        });
        it('should return true for listData', () => {
            expect(listData.hasOwnProperty('clear')).to.be.true
        });
        it('should return true for listData', () => {
            expect(listData.hasOwnProperty('toString')).to.be.true
        });
    });

    describe('addLeft Unit Tests', () => {
        it('should return 5 for addLeft with one element', () => {
            listData.addLeft(5);
            expect(listData.toString()).to.be.equal('5')
        });
        it('should return 5 for addLeft with many elements', () => {
            listData.addLeft(5);
            listData.addLeft('pesho');
            listData.addLeft(1);
            expect(listData.toString()).to.be.equal('1, pesho, 5')
        });
        it('should return .. for not addLeft', () => {
            expect(listData.toString()).to.be.equal('')
        });
    });

    describe('addLeft Unit Tests', () => {
        it('should return 5 for addRight with one element', () => {
            listData.addRight(5);
            expect(listData.toString()).to.be.equal('5')
        });
        it('should return 5 for addRight with many elements', () => {
            listData.addRight(5);
            listData.addRight('pesho');
            listData.addRight(1);
            expect(listData.toString()).to.be.equal('5, pesho, 1')
        });
    });
    describe('addLeft Unit Tests', () => {
        it('should return 5 for clearone element', () => {
            listData.addRight(5);
            listData.clear();
            expect(listData.toString()).to.be.equal('')
        });
        it('should return 5 for clear with many elements', () => {
            listData.addRight(5);
            listData.addRight('pesho');
            listData.clear();
            listData.addRight(1);
            listData.addLeft('nina');
            expect(listData.toString()).to.be.equal('nina, 1')
        });
    });
});