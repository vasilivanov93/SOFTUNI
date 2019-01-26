const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');

const shortid = require('shortid');
const formidable = require('formidable');
let Meme = require('../models/MemeSchema');

module.exports = (req, res) => {
    if (req.pathname === '/viewAllMemes' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/viewAll.html'));

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

            let queryData = qs.parse(url.parse(req.url).query);

            Meme.find().then((memeSorted) => {
                if (queryData.query) {
                    memeSorted = memeSorted
                        .sort((a, b) => b.dateStamp - a.dateStamp)
                        .filter((meme) => meme.privacy === 'on');
                }

                let content = '';

                for (const meme of memeSorted) {
                    content += `<div class="meme">
          <a href="/getDetails?id=${meme.id}">
          <img class="memePoster" src="${meme.memeSrc}"/>          
 </div>`;
                }

                let html = data.toString().replace(`<div id="replaceMe">{{replaceMe}}</div>`, content);

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                res.write(html);
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
    } else if (req.pathname === '/addMeme' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/addMeme.html'));

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
            res.write(data);
            res.end();
        });
    } else if (req.pathname === '/addMeme' && req.method === 'POST') {
        let dbPath = './public/memeStorage';

        let randomFileName = shortid.generate();
        let memePath = dbPath + '/' + randomFileName + '.jpg';

        fs.access(dbPath, err => {
            if (err) {
                console.log(err);
                return;
            }

            let form = new formidable.IncomingForm();

            form.on('error', err => {
                console.log(err);
                return;
            }).on('fileBegin', (name, file) => {
                file.path = memePath;
            });

            form.parse(req, (err, fields, files) => {
                let id = shortid.generate();

                let newMeme = {
                    id: id,
                    title: fields.memeTitle,
                    memeSrc: memePath,
                    description: fields.memeDescription,
                    privacy: fields.status,
                    dateStamp: Date.now()
                };

                Meme.create(newMeme).then(() => {
                    res.writeHead(302, {
                        'Location': '/viewAllMemes'
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
        });
    } else if (req.pathname.startsWith('/getDetails') && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/details.html'));
        let memeId = qs.parse(url.parse(req.url).query).id;

        Meme.findById(memeId, (err, targetedMeme) => {
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

                let html = data.toString().replace(`<div id="replaceMe">{{replaceMe}}</div>`, `<div class="content">
    <img src="${targetedMeme.memeSrc}" alt=""/>
    <h3>Title: ${targetedMeme.title}</h3>
    <p>Description: ${targetedMeme.description}</p>
</div>`);

                res.write(html);
                res.end();
            });
        });
    } else if (req.pathname === '/status' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/status.html'));

        Meme.find().then((memes) => {
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

                let html = data.toString().replace(`<h1>{{replaceMe}}</h1>`, `<h1 class="HeaderStatus">In this database have saved: ${memes.length} meme's</h1>`);

                res.write(html);
                res.end();
            });
        }).catch(err => {
            console.log(err);

            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });

            res.write('500 Server Error!');
            res.end();
        });
    } else {
        return true
    }
};
