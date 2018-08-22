class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

let expect = require('chai').expect;

describe('String Builder Unit Tests', () => {

    describe('General Unit Tests', () => {
        let str;
        beforeEach(() => {
            str = new StringBuilder();
        });
        it('should return true for append exist', () => {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.true;
        });
        it('should return true for prepend exist', () => {
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.true;
        });
        it('should return true for insertAt exist', () => {
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.true;
        });
        it('should return true for remove exist', () => {
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.true;
        });
        it('should return true for toString exist', () => {
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.true;
        });
        it('should return true for _stringArray exist', () => {
            expect(str.hasOwnProperty('_stringArray')).to.be.true;
        });
        it('should return true for _stringArray instanceof', () => {
            expect(str._stringArray instanceof Array).to.be.true;
        });
        it('should return 0 for _stringArray.length', () => {
            expect(str._stringArray.length).to.be.equal(0);
        });
        it('should return object for str._stringArray', () => {
            expect(typeof str._stringArray).to.be.equal('object');
        });
    });

    describe('append Unit Tests', () => {
        let startingString = 'hello';
        let str;
        beforeEach(() => {
            str = new StringBuilder(startingString);
        });

        it('should return 5 for append one string', () => {
            expect(str._stringArray.length).to.be.equal(5);
        });
        it('should return 14 for append many string', () => {
            str.append('Pesho');
            str.append('kiro');
            str.append('ninka')
            expect(str._stringArray.length).to.be.equal(19);
        });
        it('should return function for typeof append', () => {
            expect(typeof str.append).to.be.equal('function');
        });
        it('should return throw for append many string', () => {
            let result = () => str.append(5)
            expect(result).to.throw();
        });
        it('append correctly', () => {
            let string = ', world';
            str.append(string);
            compareArray(str._stringArray, Array.from(startingString + string));
        });
    });

    describe('prepend Unit Tests', () => {
        let startingString = 'hello';
        let str;
        beforeEach(() => {
            str = new StringBuilder(startingString);
        });
        it('prepend correctly', () => {
            let string = 'world, ';
            str.prepend(string);
            compareArray(str._stringArray, Array.from(string + startingString));
        });
    });

    describe('inserts Unit Test', () => {
        let startingString = 'hello';
        let str;
        beforeEach(() => {
            str = new StringBuilder(startingString);
        });
        it('inserts correctly', function () {
            let string = 'kek';
            str.insertAt(string, 3);
            let expected = Array.from(startingString);
            expected.splice(3, 0, ...string);
            compareArray(str._stringArray, expected);
        });
    });

    describe('remove Unit Test', () => {
        let startingString = 'hello';
        let str;
        beforeEach(() => {
            str = new StringBuilder(startingString);
        });
        it('remove correctly', () => {
            str.remove(1, 3);
            compareArray(str._stringArray, Array.from('ho'));
        });
    });

    describe('toString Unit Test', () => {
        let startingString = 'hello';
        let str;
        beforeEach(() => {
            str = new StringBuilder(startingString);
        });
        it('toString correctly', () => {
            expect(str.toString()).to.be.equal(startingString);
        });
    });

    function compareArray(source, expected) {
        expect(source.length).to.equal(expected.length, "Arrays don't match");
        for (let i = 0; i < source.length; i++) {
            expect(source[i]).to.equal(expected[i], 'Element ' + i + ' mismatch');
        }
    }
});