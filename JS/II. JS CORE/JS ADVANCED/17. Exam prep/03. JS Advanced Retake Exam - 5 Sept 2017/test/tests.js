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

const expect = require('chai').expect

describe("StringBuilder tests", function() {
    let builder
    beforeEach(function () {
        builder = new StringBuilder('test')
    })

    it("It should have initialized all methods", function() {
        expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.be.equal(true)
    })
	
	it('should return true for _stringArray exits', () => {
        expect(str.hasOwnProperty('_stringArray')).to.be.true;
    });
    it('should return true for instanceof _stringArray', () => {
        expect(str._stringArray instanceof Array).to.be.true;
    });
    it('should return 0 for empty _stringArray', () => {
        str = new StringBuilder();
        expect(str._stringArray.length).to.be.equal(0);
    });
    it('should return 5 for _stringArray', () => {
        expect(str._stringArray.length).to.be.equal(5);
    });

    it('should return object for str._stringArray', () => {
        expect(typeof str._stringArray).to.be.equal('object');
    });
    it('should return object for str', () => {
        expect(typeof str).to.be.equal('object')
    });
    it('should return function for str.append', () => {
        expect(typeof str.append).to.be.equal('function')
    });
    it('should return function for str.prepend', () => {
        expect(typeof str.prepend).to.be.equal('function')
    });
    it('should return function for str.insertAt', () => {
        expect(typeof str.insertAt).to.be.equal('function')
    });
    it('should return function for str.remove', () => {
        expect(typeof str.remove).to.be.equal('function')
    });
    it('should return function for str.toString', () => {
        expect(typeof str.toString).to.be.equal('function')
    });

    it("It should return same string", function() {
        expect(builder.toString()).to.be.equal('test')
    })

    it("It should return same string", function() {
        builder = new StringBuilder()
        expect(builder.toString()).to.be.equal('')
    })

    it("It should throw Error", function() {
        expect(() => {builder = new StringBuilder(5)}).to.throw(TypeError)
    })

    it("append", function() {
        builder.append(' function')
        expect(builder._stringArray.length).to.be.equal(13)
        expect(builder.toString()).to.be.equal('test function')
    })

    it("append Error", function() {
        expect(() => {builder.append({})}).to.throw(TypeError)
    })

    it("prepend", function() {
        builder.prepend('function ')
        expect(builder._stringArray.length).to.be.equal(13)
        expect(builder.toString()).to.be.equal('function test')
    })

    it("prepend Error", function() {
        expect(() => {builder.prepend(10)}).to.throw(TypeError)
    })

    it("insertAt", function() {
        builder.insertAt('ss', 2)
        expect(builder._stringArray.length).to.be.equal(6)
        expect(builder.toString()).to.be.equal('tessst')
    })

    it("insertAt Error", function() {
        expect(() => {builder.insertAt([], 2)}).to.throw(TypeError)
    })

    it("remove", function() {
        builder.remove(1, 2)
        expect(builder._stringArray.length).to.be.equal(2)
        expect(builder.toString()).to.be.equal('tt')
    })
})
