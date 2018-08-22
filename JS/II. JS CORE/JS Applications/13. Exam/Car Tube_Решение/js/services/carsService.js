let cars = (() => {
    function getAllCars() {
        const endpoint = 'cars?query={}&sort={"_kmd.ect": -1}';

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createCar(brand, description, fuel, imageUrl, model, price, seller, title, year) {
        let data = { brand, description, fuel, imageUrl, model, price, seller, title, year };

        return remote.post('appdata', 'cars', 'kinvey', data);
    }

    function editCar(carId, brand, description, fuel, imageUrl, model, price, seller, title, year) {
        const endpoint = `cars/${carId}`;
        let data = { brand, description, fuel, imageUrl, model, price, seller, title, year };

        return remote.update('appdata', endpoint, 'kinvey', data);
    }

    function deleteCar(carId) {
        const endpoint = `cars/${carId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    function getMyCars(username) {
        const endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getCarById(carId) {
        const endpoint = `cars/${carId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    return {
        getAllCars,
        createCar,
        editCar,
        deleteCar,
        getMyCars,
        getCarById
    }
})();