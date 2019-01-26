const Image = require('../models/ImageSchema');
const formidable = require('formidable');
const qs = require('querystring');
const url = require('url');

module.exports = (req, res) => {
    if (req.pathname === '/addImage' && req.method === 'POST') {
        let form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                console.log(err);
                return;
            }

            const tags = fields.tagsId.split(',').reduce((p, c) => {
                if (p.includes(c) || c.length === 0) {
                    return p;
                } else {
                    p.push(c);
                    return p;
                }
            }, []);

            let newImage = {
                url: fields.imageUrl,
                title: fields.imageTitle,
                description: fields.description,
                tags: tags
            };

            Image.create(newImage).then(() => {
                res.writeHead(302, {
                    'Location': '/'
                });

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
    } else if (req.pathname === '/delete' && req.method === 'GET') {
        let removeId = qs.parse(url.parse(req.url).query).id;

        Image.findByIdAndDelete(removeId).then(() => {
            res.writeHead(302, {
                location: '/search'
            });

            res.end();
        }).catch((err) => {
            console.log(err);

            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });

            res.write('500 Server Error!');
            res.end();
        });
    } else {
        return true;
    }
};
