const http = require('http');
const port = process.env.PORT || 5000;
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
    }).listen(port, () => console.log(`Listening on port ${port}: http://localhost:5000`));
}).catch(err => {
    throw err;
});

