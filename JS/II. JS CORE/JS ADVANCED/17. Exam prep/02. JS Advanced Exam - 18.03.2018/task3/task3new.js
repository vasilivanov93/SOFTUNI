class PaymentProcessor {
    constructor() {
        this.options = {
            types: ["service", "product", "other"],
            precision: 2
        }
        this.updateOptions(...arguments)

        this.payments = new Map()
    }

    registerPayment(id, name, type, value) {
        if (id === '' || typeof id !== 'string')
            throw new Error('id must be non-empty string')
        if (name === '' || typeof name !== 'string')
            throw new Error('name must be non-empty string')
        if (typeof value !== 'number')
            throw new Error('value must be a number')
        if (!this.options.types.includes(type)) {
            throw new Error('type not supported')
        }
        if (this.payments.has(id)) {
            throw new Error('Id already exists')
        }

        this.payments.set(id, {
            id,
            name,
            type,
            value: value.toFixed(this.options.precision)
        })
    }

    deletePayment(id) {
        if (!this.payments.has(id)) {
            throw new Error('Id not found')
        }
        this.payments.delete(id)
    }

    get(id) {
        if (!this.payments.has(id)) {
            throw new Error('Id not found')
        }
        let payment = this.payments.get(id)
        return `Details about payment ID: ${payment.id}\n` +
            `- Name: ${payment.name}\n` +
            `- Type: ${payment.type}\n` +
            `- Value: ${payment.value}\n`
    }

    setOptions(options) {
        this.updateOptions(options)
    }

    toString() {
        let balance = 0
        this.payments.forEach((v, k, m) => {
            balance += Number(v.value)
        })
        return `Summary:\n` +
            `- Payments: ${this.payments.size}\n` +
            `- Balance: ${balance.toFixed(this.options.precision)}\n`
    }

    updateOptions() {
        if (arguments.length !== 0) {
            Object.keys(arguments[0]).forEach(key => {
                this.options[key] = arguments[0][key]
            })
        }
    }
}