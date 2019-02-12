const fs = require('fs');
const path = require('path');
const Image = require('mongoose').model('Image');

module.exports = (req, res) => {
    if (req.pathname === '/search' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/results.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write('404 not found!');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            let result = '';

            Image.find().then((images) => {
                    for (let image of images) {
                        result += `<fieldset>
                        <legend>${image.title}:</legend>
                        <img src="${image.url}"/>
                        <p>${image.description}</p>
                        <button onclick='location.href="/delete?id=${image._id}"'class='deleteBtn'>Delete</button>
                        </fieldset>`;
                    }

                    let html = data.toString().replace('<div class="replaceMe"></div>', result);

                    res.write(html);
                    res.end();
                }).catch((err) => {
                    console.log(err);

                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });

                    res.write('500 Server Error!');
                    res.end();
                });
        });
    } else {
        return true;
    }
};