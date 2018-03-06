function dataClass(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let result = [];
    for (let data of arr) {
        let tokens = data.split('|');
        let destination = tokens[0];
        let price = tokens[1];
        let status = tokens[2];

        let ticket = new Ticket(destination, price, status);
        result.push(ticket);
    }
    return result.sort((a, b) => a[criteria] > b[criteria]);
}

console.log(dataClass(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'))