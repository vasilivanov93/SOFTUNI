let expect = require('chai').expect;

describe('Add or Delete in list Unit Tests', () => {
    // For test local uncoment next code. For judge don't need this code.
    let list;
    beforeEach(function () {
        list = (function(){
            let data = [];
            return {
                add: function(item) {
                    data.push(item);
                },
                delete: function(index) {
                    if (Number.isInteger(index) && index >= 0 && index < data.length) {
                        return data.splice(index, 1)[0];
                    } else {
                        return undefined;
                    }
                },
                toString: function() {
                    return data.join(", ");
                }
            };
        })();
    });

    describe('General Unit Tests', () => {
        it("should be an object", () => {
            expect(Object.prototype.toString.call(list)).to.equal('[object Object]');
        });
        it('should return object for list', () => {
            expect(typeof list).to.be.equal('object')
        });
        it('should return true for list', () => {
            expect(list.hasOwnProperty('add')).to.be.true
        });
        it('should return true for list', () => {
            expect(list.hasOwnProperty('delete')).to.be.true
        });
        it('should return true for list', () => {
            expect(list.hasOwnProperty('toString')).to.be.true
        });
        it('should return function for list.add', () => {
            expect(typeof list.add).to.be.equal('function')
        });
        it('should return function for list.delete', () => {
            expect(typeof list.delete).to.be.equal('function')
        });
        it('should return function for list.toString', () => {
            expect(typeof list.toString).to.be.equal('function')
        });
    });

    describe('add Unit Tests', () => {
        it("add many elements", () => {
            list.add(1);
            list.add(2);
            list.add('pesho');
            expect(list.toString()).to.equal('1, 2, pesho');
        });
        it("add one element", () => {
            list.add(1);
            expect(list.toString()).to.equal('1');
        });
    });

    describe('delete Unit Tests', () => {
        it('remove one element', () => {
            list.add(1);
            list.add(2);
            list.add('pesho');
            list.delete(0);
            expect(list.toString()).to.be.equal('2, pesho')
        });
        it('remove one element', () => {
            list.add(1);
            list.add(2);
            list.add([1, 2, 3]);
            list.delete(2);
            expect(list.toString()).to.be.equal('1, 2')
        });
        it('remove index string', () => {
            list.add(2);
            expect(list.delete('pesho')).to.be.undefined
        });
        it('remove with negative index', () => {
            list.add(2);
            list.add(5);
            list.add(9);
            expect(list.delete(-1)).to.be.undefined
        });
        it('remove with bigger index', () => {
            list.add(2);
            list.add(5);
            list.add(9);
            expect(list.delete(20)).to.be.undefined
        });
    });
});
