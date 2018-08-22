$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', getWelcomePage);
        this.get('index.html', getWelcomePage);

        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.passwordCheck;

            if (!/^[A-Za-z]{5,}$/.test(username)) {
                notify.showError('A username should be a string with at least 5 characters long.')
            } else if (password === '') {
                notify.showError('Passwords input fields shouldn’t be empty.')
            } else if (repeatPass !== password) {
                notify.showError('Password must match!')
            } else {
                auth.register(username, password).then(function (userData) {
                    auth.saveSession(userData);
                    notify.showInfo('User registration successful.');
                    ctx.redirect('#/editor');
                }).catch(notify.handleError);
            }
        });

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if (!/^[A-Za-z]{5,}$/.test(username)) {
                notify.showError('A username should be a string with at least 5 characters long.')
            } else if (username === '' || password === '') {
                notify.showError('All fields should be non-empty!');
            } else {
                auth.login(username, password).then(function (userData) {
                    auth.saveSession(userData);
                    notify.showInfo('Login successful.');
                    ctx.redirect('#/editor');
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

        this.get('#/editor', async function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                try {
                    let userId = sessionStorage.getItem('userId');
                    let [receipt] = await receipts.getActiveReceipt(userId);
                    if (!receipt) {
                        receipt = await receipts.createReceipt();
                    }

                    entries.getEntriesByReceiptID(receipt._id).then((entries) => {
                        if (entries.length > 0) {
                            entries.forEach((e) => {
                                e.subtotal = (e.qty * e.price).toFixed(2)
                            });

                            ctx.productsCount = entries.length;
                            ctx.total = entries
                                .map(e => +e.subtotal)
                                .reduce((a, b) => a + b)
                                .toFixed(2);
                        } else {
                            ctx.total = 0;
                            ctx.productsCount = 0;
                        }

                        ctx.isAuth = auth.isAuth();
                        ctx.entries = entries;
                        ctx.receiptId = receipt._id;
                        ctx.username = sessionStorage.getItem('username');
                        ctx.loadPartials({
                            header: './templates/common/header.hbs',
                            footer: './templates/common/footer.hbs',
                            entry: './templates/editor/entry.hbs',
                            createEntry: './templates/forms/createEntry.hbs',
                            createReceipt: './templates/forms/createReceipt.hbs'
                        }).then(function () {
                            this.partial('./templates/editor/editorPage.hbs');
                        });
                    });
                } catch (err) {
                    notify.handleError(err);
                }
            }
        });

        this.post('#/entry/create', (ctx) => {
            let type = ctx.params.type;
            let qty = ctx.params.qty;
            let price = ctx.params.price;
            let receiptId = ctx.params.receiptId;

            if (type === '') {
                notify.showError('Product name must be a non-empty string');
            } else if (isNaN(+qty) || qty === '') {
                notify.showError('Quantity must be a number and non-empty');
            } else if (isNaN(+price) || price === '') {
                notify.showError('Price must be a number and non-empty');
            } else {
                entries.addEntry(type, qty, price, receiptId).then(() => {
                    notify.showInfo('Entry added.');
                    ctx.redirect('#/editor');
                }).catch(notify.handleError);
            }
        });

        this.post('#/checkout', (ctx) => {
            let receiptId = ctx.params.receiptId;
            let productsCount = +ctx.params.productsCount;
            let total = +ctx.params.total;

            if (productsCount === 0) {
                notify.showError('Cannot checkout without any products!');
            } else {
                receipts.commitReceipt(receiptId, productsCount, total)
                    .then(() => {
                        notify.showInfo('Receipt checked out.');
                        ctx.redirect('#/editor');
                    }).catch(notify.handleError);
            }
        });

        this.get('#/delete/entry/:entryId', function (ctx) {
            let entryId = ctx.params.entryId;
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                entries.deleteEntry(entryId).then(function () {
                    notify.showInfo('Receipt deleted.');
                    ctx.redirect('#/editor');
                }).catch(notify.handleError);
            }
        });

        this.get('#/overview', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                let username = sessionStorage.getItem('username');
                let userId = sessionStorage.getItem('userId');
                receipts.getMyReceipts(userId).then(function (receipts) {
                    receipts.forEach((p, i) => {
                        p.date = new Date(p._kmd.ect).toDateString();
                    });

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.receipts = receipts;
                    ctx.total = (receipts
                        .map(e => +e.total)
                        .reduce((a, b) => a + b)).toFixed(2);

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        receipt: './templates/receipts/receipt.hbs'
                    }).then(function () {
                        this.partial('./templates/receipts/allReceipts.hbs');
                    })
                }).catch(notify.handleError);
            }
        });

        this.get('#/receipt/details/:receiptId', (ctx) => {
            let receiptId = ctx.params.receiptId;

            receipts.receiptDetails(receiptId).then((receipts) => {
                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.receipts = receipts;

                entries.getEntriesByReceiptID(receiptId).then((entries) => {
                    entries.forEach((e) => {
                        e.subtotal = (e.qty * e.price).toFixed(2)
                    });

                    ctx.entries = entries;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        entry: './templates/editor/entry.hbs'
                    }).then(function () {
                        this.partial('./templates/details/receiptDetails.hbs');
                    })
                })
            }).catch(notify.handleError);
        });

        function getWelcomePage(ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    login: './templates/forms/login.hbs',
                    register: './templates/forms/register.hbs'
                }).then(function () {
                    this.partial('./templates/welcome-anonymous.hbs');
                }).catch(notify.handleError)
            } else {
                ctx.redirect('#/editor');
            }
        }
    });

    app.run();
});