const http = require('http');
const port = process.env.PORT || 2323;
const handlers = require('./handlers/handlerBlender');
const db = './config/db';

require(db).then(() => {
    console.log('Database ready!');

    http.createServer((req, res) => {
        for (let handler of handlers) {
            if (!handler(req, res)) {
                break;
            }
        }
    }).listen(port, () => console.log(`Listening on port ${port}: http://localhost:2323`));
}).catch(err => {
    throw err;
});

