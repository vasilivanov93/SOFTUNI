let expect = require('chai').expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe("Test isSymmetric", () => {
    describe('Value tests', () => {
        it('should return true for [-1,2,-1] ', () => {
            expect(isSymmetric([-1, 2,-1])).to.be.true
        });
        it('should return false for -1,2,-1', () => {
            expect(isSymmetric(-1, 2, -1)).to.be.false
        });
        it('should return true for [1]', () => {
            expect(isSymmetric([1])).to.be.true
        });
        it('should return true for [5,\'hi\',{a:5},new Date(),{a:5},\'hi\',5]', () => {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true
        });
        it('should return false for [5,\'hi\',{a:5},new Date(),{X:5},\'hi\',5]', () => {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.false
        });
    });
});