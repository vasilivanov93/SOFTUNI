package com.softuni.models;

public class Calculator {
    private int leftOperand;
    private int rightOperand;
    private String operator;

    public Calculator(int leftOperand, int rightOperand, String operator) {
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
        this.operator = operator;
    }

    public int getLeftOperand() {
        return leftOperand;
    }

    public void setLeftOperand(int leftOperand) {
        this.leftOperand = leftOperand;
    }

    public int getRightOperand() {
        return rightOperand;
    }

    public void setRightOperand(int rightOperand) {
        this.rightOperand = rightOperand;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public double calculateResult() {
        double result = 0;

        switch (this.operator){
            case"+":
                result = this.leftOperand + this.rightOperand;
                break;
            case"-":
                result = this.leftOperand - this.rightOperand;
                break;
            case"*":
                result = this.leftOperand * this.rightOperand;
                break;
            case"/":
                result = this.leftOperand / this.rightOperand;
                break;
            default: result = 0;
                break;
        }

        return  result;
    }
}
