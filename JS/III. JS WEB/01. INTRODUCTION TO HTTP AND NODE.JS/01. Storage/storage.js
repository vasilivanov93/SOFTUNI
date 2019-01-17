const fs = require('fs');

let storage = {};

function isString(key) {
    if (typeof key !== 'string') {
        throw new Error('The key must be a string!');
    }
}

function existingKey(key) {
    if (!storage.hasOwnProperty(key)) {
        throw new Error('The key does not exist!');
    }
}

module.exports = {
    put: (key, value) => {
        isString(key);

        if (storage.hasOwnProperty(key)) {
            throw new Error('The key already exists!');
        }

        storage[key] = value;
    },
    get: (key) => {
        isString(key);
        existingKey(key);

        return storage[key];
    },
    getAll: () => {
        let keys = Object.keys(storage);
        if (keys.length === 0) {
            return "The storage is empty!";
        }

        return storage;
    },
    update: (key, newValue) => {
        isString(key);
        existingKey(key);

        storage[key] = newValue;
    },
    delete: (key) => {
        isString(key);
        existingKey(key);

        delete storage[key];
    },
    clear: () => {
        storage = {};
    },
    saveSync: () => {
        let savedData = JSON.stringify(storage);
        fs.writeFileSync('storage.json', savedData);
    },
    loadSync: () => {
        let loadedData = fs.readFileSync('./storage.json', 'utf8');

        return JSON.parse(loadedData);
    },
    save: () => {
        let savedData = JSON.stringify(storage);

        fs.writeFile('./storage.json', savedData, (err) => {
            if (err) {
                console.log(err);

                return;
            }
        });
    },
    load: () => {
        fs.readFile('./storage.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);

                return;
            }

            storage = JSON.parse(data);
        })
    },
    saveWithPromise: () => {
        return new Promise((resolve, reject) => {
            let savedData = JSON.stringify(storage);

            fs.writeFile('./storage.json', savedData, err => {
                if (err) {
                    reject(err);
                    console.log(err);

                    return;
                }

                resolve();
            });
        });
    },
    loadWithPromise: () => {
        return new Promise((resolve, reject) => {
            fs.readFile('./storage.json', "utf8", (err, data) => {
                if (err) {
                    reject(err);
                    console.log(err);

                    return;
                }

                storage = JSON.parse(data);
                resolve();
            });
        });
    }
};