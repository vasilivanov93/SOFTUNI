class SubscriptionCard {
    constructor(firstName, lastName, SSN) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._SSN = SSN;
        this._subscriptions = [];
        this._blocked = false;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get SSN() {
        return this._SSN;
    }

    get isBlocked() {
        return this._blocked;
    }

    addSubscription(line, startDate, endDate) {
        this._subscriptions.push({
            line,
            startDate,
            endDate
        });
    }

    isValid(line, date) {
        if (this.isBlocked) return false;
        return this._subscriptions.filter(s => s.line === line || s.line === '*')
            .filter(s => {
                return s.startDate <= date &&
                    s.endDate >= date;
            }).length > 0;
    }

    block() {
        this._blocked = true;
    }

    unblock() {
        this._blocked = false;
    }
}

let expect = require('chai').expect;

describe('Subscription Card Unit Tests', () => {
    describe('General Unit Tests', () => {
        it('should return true for firstName exist', () => {
            expect(SubscriptionCard.prototype.hasOwnProperty('firstName')).to.be.true;
        });
        it('should return true for lastName exist', () => {
            expect(SubscriptionCard.prototype.hasOwnProperty('lastName')).to.be.true;
        });
        it('should return true for SSN exist', () => {
            expect(SubscriptionCard.prototype.hasOwnProperty('SSN')).to.be.true;
        });
        it('should return true for isBlocked exist', () => {
            expect(SubscriptionCard.prototype.hasOwnProperty('isBlocked')).to.be.true;
        });
        it('should return true for addSubscription exist', () => {
            expect(SubscriptionCard.prototype.hasOwnProperty('addSubscription')).to.be.true;
        });
        it('should return true for isValid exist', () => {
            expect(SubscriptionCard.prototype.hasOwnProperty('isValid')).to.be.true;
        });
        it('should return true for block exist', () => {
            expect(SubscriptionCard.prototype.hasOwnProperty('block')).to.be.true;
        });
        it('should return true for unblock exist', () => {
            expect(SubscriptionCard.prototype.hasOwnProperty('unblock')).to.be.true;
        });
    });

    describe('Others General Unit Tests', () => {
        let card;

        beforeEach(() => {
            card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
        });

        it('should return string for list.firstName', () => {
            expect(typeof card.firstName).to.be.equal('string')
        });
        it('should return string for list.lastName', () => {
            expect(typeof card.lastName).to.be.equal('string')
        });
        it('should return string for list.lastName', () => {
            expect(typeof card._subscriptions).to.be.equal('object')
        });
        it('should return string for list.SSN', () => {
            expect(typeof card.SSN).to.be.equal('string')
        });
        it('should return boolean for list.isBlocked', () => {
            expect(typeof card.isBlocked).to.be.equal('boolean')
        });
        it('should return function for list.addSubscription', () => {
            expect(typeof card.addSubscription).to.be.equal('function')
        });
        it('should return function for list.isValid', () => {
            expect(typeof card.isValid).to.be.equal('function')
        });
        it('should return function for list.block', () => {
            expect(typeof card.block).to.be.equal('function')
        });
        it('should return function for list.unblock', () => {
            expect(typeof card.unblock).to.be.equal('function')
        });
        it("should be an object", () => {
            expect(Object.prototype.toString.call(card)).to.equal('[object Object]');
        });
        it('should return function for list.unblock', () => {
            expect(card.isBlocked).to.be.equal(false)
        });
        it('should return function for list.unblock', () => {
            expect(card._blocked).to.be.equal(false)
        });
    });

    describe('', () => {
        let card;
        beforeEach(() => {
            card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
        });

        it('should return true', () => {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            card.block();
            card.unblock();
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.true;
        });
        it('should return true', () => {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('*'), new Date('*'));
            card.block();
            card.unblock();
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.true;
        });
        it('should return Pesho', () => {
            card.firstName = 'Gosho';
            expect(card.firstName).to.be.equal('Pesho')
            expect(card._subscriptions.length).to.be.equal(0)
        });
        it('should return Petrov', () => {
            card.lastName = 'Goshev';
            expect(card.lastName).to.be.equal('Petrov')
        });
        it('should return 00000000', () => {
            card.SSN = '00000001';
            expect(card.SSN).to.be.equal('00000000')
        });
    });
});