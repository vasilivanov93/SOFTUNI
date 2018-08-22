$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/welcome', getWelcomePage);
        this.get('index.html', getWelcomePage);

        this.get('#/register', (ctx) => {
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/forms/register.hbs');
            }).catch(notify.handleError)
        })

        this.get('#/login', (ctx) => {
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/forms/login.hbs');
            }).catch(notify.handleError)
        })

        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.pass;
            let repeatPass = ctx.params.checkPass;

            if (!/^[A-Za-z]{5,}$/.test(username)) {
                notify.showError('A username should be a string with at least 5 characters long.')
            } else if (password === '') {
                notify.showError('Passwords input fields shouldn’t be empty')
            } else if (repeatPass !== password) {
                notify.showError('Password must match!')
            } else {
                auth.register(username, password).then(function (userData) {
                    auth.saveSession(userData);
                    notify.showInfo('User registration successful.');
                    ctx.redirect('#/home');
                }).catch(notify.handleError);
            }
        });

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.pass;

            if (!/^[A-Za-z]{5,}$/.test(username)) {
                notify.showError('A username should be a string with at least 5 characters long.')
            } else if (password === '') {
                notify.showError('Passwords input fields shouldn’t be empty')
            } else {
                auth.login(username, password).then(function (userData) {
                    auth.saveSession(userData);
                    notify.showInfo('Login successful.');
                    ctx.redirect('#/home');
                }).catch(notify.handleError);
            }
        });

        this.get('#/logout', function (ctx) {
            auth.logout().then(function (userData) {
                sessionStorage.clear();
                notify.showInfo('Logout successful.');
                ctx.redirect('#/welcome');
            }).catch(notify.handleError);
        });

        this.get('#/home', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/welcome');
            } else {
                flights.getPublishedFlights().then(function (flights) {
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.flights = flights;

                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                        flightList: './templates/flights/flightList.hbs',
                        flight: './templates/flights/flight.hbs'
                    }).then(function () {
                        notify.showInfo('All public flights.');
                        this.partial('./templates/flights/catalog.hbs');
                    })
                }).catch(notify.handleError);
            }
        });

        this.get('#/create/flight', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/welcome');
            } else {
                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');

                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs'
                }).then(function () {
                    notify.showInfo('View create form for flight.')
                    this.partial('./templates/forms/createFlight.hbs');
                })
            }
        });

        this.post('#/create/flight', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/welcome');
                return;
            }

            let destination = ctx.params.destination;
            let origin = ctx.params.origin;
            let departureDate = ctx.params.departureDate;
            let departureTime = ctx.params.departureTime;
            let seats = ctx.params.seats;
            let cost = ctx.params.cost;
            let img = ctx.params.img;
            let isPublic = ctx.params.public;

            if (isPublic) {
                isPublic = 'true';
            }

            if (destination === '') {
                notify.showError('Destination is required!');
            } else if (origin === '') {
                notify.showError('Origin is required!');
            } else if (seats < 0) {
                notify.showError('Seats should be positive numbers.');
            } else if (cost < 0) {
                notify.showError('Cost should be positive numbers.');
            } else {
                flights.createFlight(destination, origin, departureDate, departureTime, seats, cost, img, isPublic)
                    .then(() => {
                        notify.showInfo('Created flight.');
                        ctx.redirect('#/home');
                    }).catch(notify.handleError);
            }
        });

        this.get('#/details/:flightId', (ctx) => {
            let flightId = ctx.params.flightId;

            flights.getFlightById(flightId).then((flight) => {
                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.isAuthor = flight._acl.creator === sessionStorage.getItem('userId');

                ctx.img = flight.img;
                ctx.destination = flight.destination;
                ctx.origin = flight.origin;
                let date = new Date(flight.departureDate);
                let month = date.getMonth() + 1;

                if (month === 1) {
                    month = 'January'
                } else if (month === 2) {
                    month = 'February'
                } else if (month === 3) {
                    month = 'March'
                }else if (month === 4) {
                    month = 'April'
                }else if (month === 5) {
                    month = 'May'
                }else if (month === 6) {
                    month = 'June'
                }else if (month === 7) {
                    month = 'July'
                }else if (month === 8) {
                    month = 'August'
                }else if (month === 9) {
                    month = 'September'
                }else if (month === 10) {
                    month = 'October'
                }else if (month === 11) {
                    month = 'November'
                }else if (month === 12) {
                    month = 'December'
                }

                ctx.departureDate = `${date.getDate()} ${month}`;
                ctx.departureTime = flight.departureTime;
                ctx.seats = flight.seats;
                ctx.cost = flight.cost;

                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                    details: './templates/details/details.hbs',
                }).then(function () {
                    notify.showInfo('View details for flight.');
                    this.partial('./templates/details/flightDetails.hbs');
                })
            }).catch(notify.handleError);
        });

        this.get('#/flights/editFlight/:flightId', function (ctx) {

            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                let flightId = ctx.params.flightId;

                flights.getFlightById(flightId).then(function (flight) {
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.flightId = flightId;
                    ctx.flight = flight;

                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs'
                    }).then(function () {
                        notify.showInfo('View edit form for your flight.');
                        this.partial('./templates/flights/editFlight.hbs');
                    })
                }).catch(notify.handleError);
            }
        });

        this.post('#/flights/editFlight', function (ctx) {
            let flightId = ctx.params.flightId;
            let destination = ctx.params.destination;
            let origin = ctx.params.origin;
            let departureDate = ctx.params.departureDate;
            let departureTime = ctx.params.departureTime;
            let seats = ctx.params.seats;
            let cost = ctx.params.cost;
            let img = ctx.params.img;
            let isPublic = ctx.params.public;

            if (isPublic) {
                isPublic = 'true';
            }

            if (destination === '') {
                notify.showError('Destination is required!');
            } else if (origin === '') {
                notify.showError('Origin is required!');
            } else if (seats < 0) {
                notify.showError('Seats should be positive numbers.');
            } else if (cost < 0) {
                notify.showError('Cost should be positive numbers.');
            } else {
                flights.editFlight(flightId, destination, origin, departureDate, departureTime, seats, cost, img, isPublic).then(function () {
                    notify.showInfo(`Successfully edited flight.`);
                    ctx.redirect('#/home');
                }).catch(notify.handleError)
            }
        });

        this.get('#/flights', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                let userId = sessionStorage.getItem('userId');
                flights.getMyFlights(userId).then(function (flights) {
                    ctx.flights = flights;
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');

                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                        flightData: './templates/flights/flightData.hbs'
                    }).then(function () {
                        notify.showInfo('My flights.');
                        this.partial('./templates/flights/myFlight.hbs');
                    })
                }).catch(notify.handleError);
            }
        });

        this.get('#/delete/flight/:flightId', function (ctx) {
            let flightId = ctx.params.flightId;
            if (!auth.isAuth()) {
                ctx.redirect('#/welcome');
            } else {
                flights.deleteFlight(flightId).then(function () {
                    notify.showInfo('Flight deleted.');
                    ctx.redirect('#/flights');
                }).catch(notify.handleError);
            }
        });

        function getWelcomePage(ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    navigation: './templates/common/navigation.hbs',
                    footer: './templates/common/footer.hbs'
                }).then(function () {
                    this.partial('./templates/welcome-anonymous.hbs');
                })
            } else {
                ctx.redirect('#/home');
            }
        }
    });

    app.run();
});