class PaymentPackage {
    constructor(name, value) {
      this.name = name;
      this.value = value;
      this.VAT = 20;      // Default value    
      this.active = true; // Default value
    }
  
    get name() {
      return this._name;
    }
  
    set name(newValue) {
      if (typeof newValue !== 'string') {
        throw new Error('Name must be a non-empty string');
      }
      if (newValue.length === 0) {
        throw new Error('Name must be a non-empty string');
      }
      this._name = newValue;
    }
  
    get value() {
      return this._value;
    }
  
    set value(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('Value must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('Value must be a non-negative number');
      }
      this._value = newValue;
    }
  
    get VAT() {
      return this._VAT;
    }
  
    set VAT(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('VAT must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('VAT must be a non-negative number');
      }
      this._VAT = newValue;
    }
  
    get active() {
      return this._active;
    }
  
    set active(newValue) {
      if (typeof newValue !== 'boolean') {
        throw new Error('Active status must be a boolean');
      }
      this._active = newValue;
    }
  
    toString() {
      const output = [
        `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${this.value}`,
        `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
      ];
      return output.join('\n');
    }
}
  

let expect = require('chai').expect;

describe('', () => {
    describe('General Unit Tests', () => {
        it('should return true for toString exist', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.be.true;
        });
        it('should return true for name exist', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('name')).to.be.true;
        });
        it('should return true for value exist', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('value')).to.be.true;
        });
        it('should return true for VAT exist', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.be.true;
        });
        it('should return true for active exist', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('active')).to.be.true;
        });
    });

    describe('', () => {
        let list;

        beforeEach(() => {
            list = new PaymentPackage('Hr', 2);
        });

        it('should return function for matchEnforcer', () => {
            expect(typeof list.toString).to.be.equal('function')
        });
        it('should return function for matchEnforcer', () => {
            expect(typeof list.name).to.be.equal('string')
        });
        it('should return function for matchEnforcer', () => {
            expect(typeof list.value).to.be.equal('number')
        });
        it('should return function for matchEnforcer', () => {
            expect(typeof list.VAT).to.be.equal('number')
        });
        it('should return function for matchEnforcer', () => {
            expect(typeof list.active).to.be.equal('boolean')
        });
        it("should be an object", () => {
            expect(Object.prototype.toString.call(list)).to.equal('[object Object]');
        });
        it('should return function for matchEnforcer', () => {
            expect(list.toString(0)).to.be.equal('Package: Hr\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4')
        });
        it('should return function for matchEnforcer', () => {
            expect(list.active).to.be.equal(true)
        });
    });

    describe('', () => {
        let list;
        let wrongPack;
        beforeEach(() => {
            list = [
                new PaymentPackage('HR Services', 1500),
                new PaymentPackage('Consultation', 800),
                new PaymentPackage('Partnership Fee', 7000)
            ]
            wrongPack = new PaymentPackage('Transfer Fee', 100);
        });

        it('', () => {
            expect(list.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800,Package: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960,Package: Partnership Fee\n- Value (excl. VAT): 7000\n- Value (VAT 20%): 8400')
        });
        it('', () => {
            expect(() => wrongPack.active = null).to.throw(Error)
        });
    });

    describe("Throw error tests", () => {
        it("should throw an Error when instantiated with empty string as name", () => {
            expect(() => new PaymentPackage('', 232)).to.throw(Error);
        });

        it("should throw an Error when instantiated with non-string as name", () => {
            expect(() => new PaymentPackage([], 232)).to.throw(Error);
        });

        it("should throw an Error when try to set new name with empty string", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.name = '').to.throw(Error);
        });

        it("should throw an Error when try to set new name with non-string", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.name = {}).to.throw(Error);
        });

        it("should throw an Error when instantiated with negative number for value", () => {
            expect(() => new PaymentPackage('Test', -232)).to.throw(Error);
        });

        it("should not throw an Error when instantiated with 0", () => {
            expect(() => new PaymentPackage('Test', 0)).to.not.throw(Error);
        });

        it("should throw an Error when instantiated with NaN as value", () => {
            expect(() => new PaymentPackage('Test', [2323])).to.throw(Error);
        });

        it("should throw an Error when try to set new value with a negative number", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.value = -30).to.throw(Error);
        });

        it("should not throw an Error when try to set new value to 0", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.value = 0).to.not.throw(Error);
        });

        it("should throw an Error when try to set new name with NaN", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.value = {}).to.throw(Error);
        });

        it("should throw an Error when try to set new VAT with a negative number", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.VAT = -300).to.throw(Error);
        });

        it("should not throw an Error when set new VAT to 0", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.VAT = 0).to.not.throw(Error);
        });

        it("should throw an Error when try to set new VAT with NaN", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.VAT = []).to.throw(Error);
        });

        it("should throw an Error when try to set new status with non boolean", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.active = 'true').to.throw(Error);
        });
    });
});