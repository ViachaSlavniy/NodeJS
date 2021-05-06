const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, data) => {
    //         if(err) {
    //             throw err
    //         }

    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });
    
    //         res.end(data);

    //     });
    // }
    // if(req.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if(err) {
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });

    //         res.end(data);
    //     })
    // }

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'home.html' : req.url);
    const extFile = path.extname(filePath);
    let contentType = 'text/html'

    switch(extFile) {
        case '.css':
            contentType = 'text/css';
            break
        case '.js':
            contentType = 'text/javascript';
            break
        default:
            contentType = 'text/html';
    }

    if(!extFile) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        console.log(err);
        if(err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if(err) {
                    res.writeHead(500)
                    res.end('Error');
                } else {
                    res.writeHead(200, {
                        'Content-Type': contentType
                    })
                    res.end(data);
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content);
        }
    })
    
})

server.listen(3000, () => {
    console.log('Server has been started...');
})