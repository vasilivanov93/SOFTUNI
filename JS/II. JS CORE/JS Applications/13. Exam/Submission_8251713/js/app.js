$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', getWelcomePage);
        this.get('index.html', getWelcomePage);

        this.get('#/register', (ctx) => {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    navigation: './templates/common/navigation.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/forms/register.hbs');
                }).catch(notify.handleError)
            } else {
                ctx.redirect('#/catalog');
            }
        });

        this.get('#/login', (ctx) => {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    navigation: './templates/common/navigation.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/forms/login.hbs');
                }).catch(notify.handleError)
            } else {
                ctx.redirect('#/catalog');
            }
        });

        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            if (!/^[A-Za-z]{3,}$/.test(username)) {
                notify.showError('Username must be at least 3 character only english word!')
            } else if (!/^[A-Za-z\d]{6,}$/.test(password)) {
                notify.showError('Password must be at least 6 character!')
            } else if (repeatPass !== password) {
                notify.showError('Password must match!')
            } else {
                auth.register(username, password).then(function (userData) {
                    auth.saveSession(userData);
                    notify.showInfo('User registration successful.');
                    ctx.redirect('#/catalog');
                }).catch(notify.handleError);
            }
        });

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if (!/^[A-Za-z]{3,}$/.test(username)) {
                notify.showError('Username must be at least 3 character only english word!')
            } else if (!/^[A-Za-z\d]{6,}$/.test(password)) {
                notify.showError('Password must be at least 6 character!')
            } else {
                auth.login(username, password).then(function (userData) {
                    auth.saveSession(userData);
                    notify.showInfo('Login successful.');
                    ctx.redirect('#/catalog');
                }).catch(notify.handleError);
            }
        });

        this.get('#/logout', function (ctx) {
            auth.logout().then(function (userData) {
                sessionStorage.clear();
                notify.showInfo('Logout successful.');
                ctx.redirect('#/home');
            }).catch(notify.handleError);
        });

        this.get('#/catalog', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                cars.getAllCars().then(function (cars) {
                    cars.forEach((p, i) => {
                        p.isAuthor = p._acl.creator === sessionStorage.getItem('userId');
                    });

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.cars = cars;

                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                        carList: './templates/cars/carList.hbs',
                        car: './templates/cars/car.hbs'
                    }).then(function () {
                        this.partial('./templates/cars/catalog.hbs');
                    })
                }).catch(notify.handleError);
            }
        });

        this.get('#/create/car', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');

                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs'
                }).then(function () {
                    this.partial('./templates/forms/createCar.hbs');
                })
            }
        });

        this.post('#/create/car', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let title = ctx.params.title;
            let description = ctx.params.description;
            let brand = ctx.params.brand;
            let model = ctx.params.model;
            let year = ctx.params.year;
            let imageUrl = ctx.params.imageUrl;
            let fuel = ctx.params.fuelType;
            let price = +ctx.params.price;
            let seller = sessionStorage.getItem('username');

            escapingChar(description);

            if (title.length > 34) {
                notify.showError('The title length must not exceed 33 characters!');
            } else if (description.length < 30 || description.length > 450) {
                notify.showError('The description length must not exceed 450 characters and should be at least 30!');
            } else if (brand.length > 11) {
                notify.showError('The brand length must not exceed 11 characters!');
            } else if (fuel.length > 11) {
                notify.showError('The fuel length must not exceed 11 characters!');
            } else if (model.length > 11 || model.length < 4) {
                notify.showError('The model length must not exceed 11 characters or least 4 characters!');
            } else if (!/^[0-9]{4}$/.test(year)) {
                notify.showError('The year must be only 4 chars long!');
            } else if (price > 1000000) {
                notify.showError('The maximum price is 1000000$');
            } else if (!imageUrl.startsWith('http')) {
                notify.showError('Link url should always start with “http”.');
            } else if (title === '' || description === '' || brand === '' || model === '' || year === '' || imageUrl === '' ||
                fuel === '' || price === '') {
                notify.showError('The input line is required!');
            } else {
                cars.createCar(brand, description, fuel, imageUrl, model, price, seller, title, year)
                    .then(() => {
                        notify.showInfo('Listing created.');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/edit/car/:carId', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                let carId = ctx.params.carId;

                cars.getCarById(carId).then(function (car) {
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.car = car;

                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs'
                    }).then(function () {
                        this.partial('./templates/cars/editCar.hbs');
                    })                    
                }).catch(notify.handleError);
            }
        });

        this.post('#/edit/car', function (ctx) {
            let carId = ctx.params.carId;

            let title = ctx.params.title;
            let description = ctx.params.description;
            let brand = ctx.params.brand;
            let model = ctx.params.model;
            let year = ctx.params.year;
            let imageUrl = ctx.params.imageUrl;
            let fuel = ctx.params.fuelType;
            let price = +ctx.params.price;
            let seller = sessionStorage.getItem('username');

            escapingChar(description);

            if (title.length > 34) {
                notify.showError('The title length must not exceed 33 characters!');
            } else if (description.length < 30 || description.length > 450) {
                notify.showError('The description length must not exceed 450 characters and should be at least 30!');
            } else if (brand.length > 11) {
                notify.showError('The brand length must not exceed 11 characters!');
            } else if (fuel.length > 11) {
                notify.showError('The fuel length must not exceed 11 characters!');
            } else if (model.length > 11 || model.length < 4) {
                notify.showError('The model length must not exceed 11 characters or least 4 characters!');
            } else if (!/^[0-9]{4}$/.test(year)) {
                notify.showError('The year must be only 4 chars long!');
            } else if (price > 1000000) {
                notify.showError('The maximum price is 1000000$');
            } else if (!imageUrl.startsWith('http')) {
                notify.showError('Link url should always start with “http”.');
            } else if (title === '' || description === '' || brand === '' || model === '' || year === '' || imageUrl === '' ||
                fuel === '' || price === '') {
                notify.showError('The input line is required!');
            } else {
                cars.editCar(carId, brand, description, fuel, imageUrl, model, price, seller, title, year).then(function () {
                    notify.showInfo(`Listing ${title} updated.`);
                    ctx.redirect('#/catalog');
                }).catch(notify.handleError)
            }
        });

        this.get('#/delete/car/:carId', function (ctx) {
            let carId = ctx.params.carId;
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                cars.deleteCar(carId).then(function () {
                    notify.showInfo('Listing deleted.');
                    ctx.redirect('#/catalog');
                }).catch(notify.handleError);
            }  
        });

        this.get('#/cars', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                let username = sessionStorage.getItem('username');
                cars.getMyCars(username).then(function (cars) {
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.cars = cars;

                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                        carData: './templates/cars/carData.hbs',
                        details: './templates/details/details.hbs'
                    }).then(function () {
                        this.partial('./templates/cars/myCar.hbs');
                    })
                }).catch(notify.handleError);
            }
        });

        this.get('#/details/:carId', (ctx) => {
            let carId = ctx.params.carId;

            cars.getCarById(carId).then((car) => {

                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.isAuthor = car._acl.creator === sessionStorage.getItem('userId');
                ctx.carId = carId;
                ctx.car = car;

                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                    details: './templates/details/details.hbs'
                }).then(function () {
                    this.partial('./templates/details/carDetails.hbs');
                })
            }).catch(notify.handleError);
        });

        function getWelcomePage(ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    navigation: './templates/common/navigation.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/welcome-anonymous.hbs');
                }).catch(notify.handleError)
            } else {
                ctx.redirect('#/catalog');
            }
        }

        function escapingChar(str) {
            return str.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
        }
    });

    app.run();
});