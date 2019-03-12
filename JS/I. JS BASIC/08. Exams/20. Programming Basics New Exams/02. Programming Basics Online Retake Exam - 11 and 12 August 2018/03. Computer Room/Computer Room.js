function task(arr) {
    let month = arr[0];
    let hours = Number(arr[1]);
    let people = Number(arr[2]);
    let dayOrNight = arr[3];

    let priceDay = 0;
    let priceNight = 0;
    if (month === 'march' || month === 'april' || month === 'may') {
        priceDay = 10.50;
        priceNight = 8.40;
    } else if (month === 'june' || month === 'july' || month === 'august') {
        priceDay = 12.60;
        priceNight = 10.20;
    }

    if (people >= 4) {
        priceDay *= 0.9;
        priceNight *= 0.9;
    }

    if (hours >= 5) {
        priceDay *= 0.5;
        priceNight *= 0.5;
    }

    let pricePerPeople = 0;
    if (dayOrNight === 'day') {
        pricePerPeople = priceDay;
    } else if (dayOrNight === 'night') {
        pricePerPeople = priceNight;
    }

    let totalPrice = (pricePerPeople * people) * hours;

    console.log(`Price per person for one hour: ${pricePerPeople.toFixed(2)}
Total cost of the visit: ${totalPrice.toFixed(2)}
`);
}