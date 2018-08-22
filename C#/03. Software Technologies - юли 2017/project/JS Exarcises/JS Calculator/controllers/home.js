const Calclator = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        const calcParams = req.body['calculator'];

        let leftOperand = Number(calcParams.leftOperand);
        let rightOperand = Number(calcParams.rightOperand);
        let operator = calcParams.operator;

        let calculator = new Calclator(leftOperand, rightOperand, operator);

        let result = calculator.calculateResult();

        res.render('home/index', {'calculator': calculator, 'result': result});
    }
};