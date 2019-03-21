function tickets(arr, criteria) {
    class Ticket {
        constructor(public destinationName: string,
                    public price: number,
                    public status: string) {
            this.destinationName = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for(let data of arr) {
        let tokens = data.split('|');
        let destinationName = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        let ticket = new Ticket(destinationName, price, status);
        result.push(ticket);
    }

    // @ts-ignore
    return result.sort((a, b) => a[criteria] > b[criteria]);
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));