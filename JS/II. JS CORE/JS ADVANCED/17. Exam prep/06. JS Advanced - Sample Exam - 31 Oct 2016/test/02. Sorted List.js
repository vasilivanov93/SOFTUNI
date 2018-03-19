class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}


let expect = require('chai').expect;

describe('Sorted List Unit Tests', () => {
    let myList;
    beforeEach(() => {
        myList = new SortedList();
    });
    describe('General Unit Tests', () => {
        it('should return true for add exist', () => {
            expect(SortedList.prototype.hasOwnProperty('add')).to.be.true;
        });
        it('should return true for remove exist', () => {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.be.true;
        });
        it('should return true for get exist', () => {
            expect(SortedList.prototype.hasOwnProperty('get')).to.be.true;
        });
        it('should return true for vrfyRange exist', () => {
            expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.be.true;
        });
    });

    describe('add Unit Tests', () => {
        it('should return 5 for add one number', () => {
            myList.add(5);
            expect(myList.list.join(', ')).to.be.equal('5');
        });
        it('should return 5, 6 for add many number', () => {
            myList.add(5);
            myList.add(6);
            myList.add(1);
            expect(myList.list.join(', ')).to.be.equal('1, 5, 6');
        });
    });

    describe('remove Unit Tests', () => {
        it('should return error for remove empty list', () => {
            expect(() => myList.remove()).throw(Error, 'Collection is empty.')
        });
        it('should return error for remove negative index', () => {
            myList.add(3);
            expect(() => myList.remove(-1)).throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should return error for remove equal index', () => {
            myList.add(3);
            expect(() => myList.remove(1)).throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should return error for remove bigger index', () => {
            myList.add(3);
            expect(() => myList.remove(10)).throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should return 5 for remove index 1', () => {
            myList.add(5);
            myList.add(6);
            myList.add(1);
            myList.remove(1);
            expect(myList.list.join(', ')).to.be.equal('1, 6');
        });
    });

    describe('get Unit Tests', () => {
        it('should return error for get empty list', () => {
            expect(() => myList.get()).throw(Error, 'Collection is empty.')
        });
        it('should return error for get negative index', () => {
            myList.add(3)
            expect(() => myList.get(-1)).throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should return error for  get equal index', () => {
            myList.add(3)
            expect(() => myList.get(1)).throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should return error for get bigger index', () => {
            myList.add(3)
            expect(() => myList.get(10)).throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should return 1 for get index 0', () => {
            myList.add(5);
            myList.add(6);
            myList.add(1);
            let element = myList.get(0);
            expect(element).to.be.equal(1);
        });
    });

    describe('size Unit Tests', () => {
        it('should return 0 for empty list', () => {
            expect(myList.size).to.be.equal(0);
        });
        it('should return 0 for empty list', () => {
            myList.add(5);
            myList.add(6);
            myList.add(11);
            expect(myList.size).to.be.equal(3);
        });
    });
});