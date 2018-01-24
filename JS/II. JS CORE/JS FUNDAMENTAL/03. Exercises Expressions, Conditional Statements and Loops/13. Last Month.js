function lastMonth([day, month, year]) {
    let date = new Date(year, month - 1, 0);

    console.log(date.getDate());
}

lastMonth([13, 12, 2004]);