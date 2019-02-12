const url = require('url');
const database = require('../config/database');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname === '/viewAllMovies' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/viewAll.html'));

        let id = 0;
        let moviesSorted = database.map(m => {
            m.id = id++;
            return m;
        }).sort((a, b) => Number(b.movieYear) - Number(a.movieYear));

        let content = '';

        for (const movie of moviesSorted) {
            content += `<div class="movie">
                <a href="/movies/details/${movie.id}">
                    <img class="moviePoster" src="${decodeURIComponent(movie.moviePoster)}"/>
                </a>      
            </div>`;
        }

        fs.readFile(filePath, (err, data) => {
            if(err) {
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

            let html = data.toString().replace(`<div id="replaceMe">{{replaceMe}}</div>`, content);
            res.write(html);
            res.end();
        });
    } else if (req.pathname === '/addMovie' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/addMovie.html'));

        fs.readFile(filePath, (err, data) => {
            if(err) {
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
    } else if (req.pathname === '/addMovie' && req.method === 'POST') {
        let filePath = path.normalize(path.join(__dirname, '../views/addMovie.html'));
        let body = [];

        req.on('data', (chunk) => {
            body.push(chunk)
        }).on('end', () => {
            let movieBody = qs.parse(Buffer.concat(body).toString());

            let isValidMovieInfo = true;

            for (let prop in movieBody) {
                if (movieBody[prop] === '') {
                    isValidMovieInfo = false;
                }
            }

            if (isValidMovieInfo) {
                database.push(movieBody);

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

                    let html = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>')
                    res.write(html);
                    res.end()
                })
            } else {
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

                    let html = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>')
                    res.write(html);
                    res.end()
                })
            }
        });
    } else if (req.pathname.startsWith('/movies/details/') && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/details.html'));
        let index = req.pathname.substr(req.pathname.lastIndexOf('/') + 1);
        let movie = database[index];

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
      <img src="${decodeURIComponent(movie.moviePoster)}" alt="" />
      <h3>Title: ${movie.movieTitle}</h3>
      <h3>Year: ${movie.movieYear}</h3>
      <p> Description:${movie.movieDescription}</p>
      </div>`);

            res.write(html);
            res.end();
        });
    }else if (req.pathname === '/status' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/status.html'));

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

            let html = data.toString().replace(`<h1>{{replaceMe}}</h1>`, `<h1 class="HeaderStatus">Full: ${database.length}</h1>`);

            res.write(html);
            res.end();
        });
    } else {
        return true
    }
};