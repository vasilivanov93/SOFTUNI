class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if (!/^\d{6}$/g.test(value)) {
            throw TypeError('Client ID must be a 6-digit number');
        } else {
            this._clientId = value;
        }
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if (!/^.[a-zA-Z\d]+\@[a-zA-Z.]+$/g.test(value)) {
            throw TypeError('Invalid e-mail');
        } else {
            this._email = value;
        }
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (value.length < 3 || value.length > 20) {
            throw TypeError('First name must be between 3 and 20 characters long');
        } else if (!/^[a-zA-Z]{3,20}$/.test(value)) {
            throw TypeError('First name must contain only Latin characters')
        } else {
            this._firstName = value;
        }
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if (value.length < 3 || value.length > 20) {
            throw TypeError('Last name must be between 3 and 20 characters long');
        } else if (!/^[a-zA-Z]{3,20}$/.test(value)) {
            throw TypeError('Last name must contain only Latin characters')
        } else {
            this._lastName = value;
        }
    }
}

let acc = new CheckingAccount('131466', 'ivan@some.com', 'Ivan', 'Petrov')