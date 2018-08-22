class PaymentProcessor {
    constructor(id, name, type, value) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._value = value;
        this._paymentsMap = [];
        this.precision = 2;
        this.optionsType = ["service", "product", "other"];

    }

    registerPayment(id, name, type, value) {
        if (this._validate(id, name, type, value)) {
            this._paymentsMap.push({id: id, name: name, type: type, value: value});
        }
    }

    get(id) {
        let validID = false;
        for (let obj of this._paymentsMap) {
            if (obj.id === id) {
                let output = "";
                output += `Details about payment ID: ${obj.id}\n`;
                output += `- Name: ${obj.name}\n`;
                output += `- Type: ${obj.type}\n`;
                output += `- Value: ${obj.value.toFixed(this.precision)}\n`;
                validID = true;
                return output
            }
        }
        
        if (!validID) {
            throw new Error('ID not found');
        }
    }

    setOptions(value) {
        if (value.hasOwnProperty('types')) {
            for (let obj of value.types) {
                this.optionsType.push(obj);
            }
        }

        if (value.hasOwnProperty('precision')) {
            this.precision = value.precision;
            console.log(value.precision);
        }
    }

    deletePayment(id) {
        let validID = false;
        for (let obj of this._paymentsMap) {
            if (obj.id === id) {
                obj.id = "deleteMe";
                validID = true;
            }
        }

        if (!validID) {
            throw new Error('ID not found');
        }
    }


    _validate(id, name, type, value) {
        if (typeof id === "string" && id !== null &&
            typeof name === "string" && name !== null &&
            typeof value === "number" &&
            this.optionsType.indexOf(type) >= 0) {
            return true;
        } else if (this.optionsType.indexOf(type) < 0) {
            throw new Error('Bad material');
        }
    }
    
    toString() {
        let output = "";
        let sum = 0;
        for (let obj of this._paymentsMap) {
            sum += obj.value;
        }
        output += "Summary:\n";
        output += `- Payments: ${this._paymentsMap.length}\n`;
        output += `- Balance: ${sum.toFixed(this.precision)}`;
        return output;
    }
}