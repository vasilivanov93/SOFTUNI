let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

document.body.innerHTML = 
`<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;

describe('Shared Object Unit Tests', () => {
    describe('Initial Value Tests', () => {
        it('test name initial value', () => {
            expect(sharedObject.name).to.be.null;
        });
        it('test income initial value', () => {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe('changeName tests', () => {
        it('with empty string (name should be null)', () => {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('with not-empty string (name should not be null)', () => {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho', `Name didn't change correctly!`);
        });

        describe('Name input Tests', () => {
            it('with empty string (name should be null)', () => {
                sharedObject.changeName('Nakov');
                sharedObject.changeName('');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Nakov', `Name didn't change correctly!`);
            });
            it('with not-empty string (name should not be null)', () => {
                sharedObject.changeName('Pesho');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Pesho', `Name didn't change correctly!`);
            });
        });
    });

    describe('changeIncome tests', () => {
        it('with string (income should be null)', () => {
            sharedObject.changeIncome('d');
            expect(sharedObject.income).to.be.null;
        });
        it('with floating-point', () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.11);
            expect(sharedObject.income).to.be.equal(5, `Income didn't change correctly!`);
        });
        it('with negative number', () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-4);
            expect(sharedObject.income).to.be.equal(5, `Income didn't change correctly!`);
        });
        it('with zero', () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5, `Income didn't change correctly!`);
        });
        it('with positive number', () => {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5, `Income didn't change correctly!`);
        });

        describe('Income input Tests', () => {
            it('with string (should not change correctly)', () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('d');
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5', `Income input didn't change correctly!`);
            });
            it('with positive number', () => {
                sharedObject.changeIncome(5);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5', `Income input didn't change correctly!`);
            });
            it('with negative number', () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-4);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5', `Income input didn't change correctly!`);
            });
            it('with zero', () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5', `Income input didn't change correctly!`);
            });
            it('with floating-point', () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(4.11);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5', `Income input didn't change correctly!`);
            });
        });
    });

    describe('updateName tests', () => {
        it('with an empty string (should not change property)', () => {
            sharedObject.changeName('Viktor');
            let nameElement = $('#name');
            nameElement.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Viktor');
        });
        it('with an empty string (should not change property)', () => {
            sharedObject.changeName('Viktor');
            let nameElement = $('#name');
            nameElement.val('Kiril');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Kiril');
        });
    });

    describe('updateIncome tests', () => {
        it('with a string should not change property', () => {
            sharedObject.changeIncome(3);
            let incomeElement = $('#income');
            incomeElement.val('income');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it('with a floating-point should not change property', () => {
            sharedObject.changeIncome(3);
            let incomeElement = $('#income');
            incomeElement.val('3.14');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it('with a negative number should not change property', () => {
            sharedObject.changeIncome(3);
            let incomeElement = $('#income');
            incomeElement.val('-3.14');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it('with a zero should not change property', () => {
            sharedObject.changeIncome(3);
            let incomeElement = $('#income');
            incomeElement.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it('with a positive number should not change property', () => {
            sharedObject.changeIncome(3);
            let incomeElement = $('#income');
            incomeElement.val('8');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(8);
        });
    });
});