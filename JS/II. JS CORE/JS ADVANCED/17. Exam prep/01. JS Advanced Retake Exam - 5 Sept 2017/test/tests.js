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
