const Tag = require('mongoose').model('Tag');
const formidable = require('formidable');

module.exports = (req, res) => {
    if (req.pathname === '/generateTag' && req.method === 'POST') {
        let form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {

            let newTag = {
                name: fields.tagName,
                images: []
            };

            Tag.create(newTag).then(() => {
                res.writeHead(302, {
                    'Location': '/'
                });

                res.end();
            }).catch(err => {
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
