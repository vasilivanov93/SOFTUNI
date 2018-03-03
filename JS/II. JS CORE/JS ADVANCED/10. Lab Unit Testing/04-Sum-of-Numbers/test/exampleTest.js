let expect = require('chai').expect;

function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}
describe('Group', () => {
    it('should return 3 for [1, 2]', () => {
        expect(sum([1, 2])).to.be.equal(3)
    });
    it('should return 1 for [1]', () => {
        expect(sum([1])).to.be.equal(1)
    });
    it('should return 0 for []', () => {
        expect(sum([])).to.be.equal(0)
    });
    it('should return 3 for [1.5, 2.5, -1]', () => {
        expect(sum([1.5, 2.5, -1])).to.be.equal(3)
    });
    it('should return NaN for [NaN, 2, 3]', () => {
        expect(sum([NaN, 2, 3])).to.be.NaN
    });
    it('should return NaN for NaN', () => {
        expect(sum('NaN')).to.be.NaN
    });
});