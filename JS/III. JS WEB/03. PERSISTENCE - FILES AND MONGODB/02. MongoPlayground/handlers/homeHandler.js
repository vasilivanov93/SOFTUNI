let Tag = require('../models/TagSchema');
const url = require('url');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname === '/' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/index.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            let displayTags = '';

            Tag.find({}).then(tags => {
                for (let tag of tags) {
                    displayTags += `<div class='tag' id="${tag._id}">${tag.name}</div>`;
                }

                let html = data.toString().replace('<div class="replaceMe"></div>', displayTags);

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                res.write(html);
                res.end();
            });
        });
    } else {
        return true;
    }
};
