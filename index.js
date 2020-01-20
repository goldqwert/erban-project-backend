let http = require('http');
let { usersController } = require('./usersController')


let server = http.createServer((req, res) => {

    let cors = (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        res.setHeader('Access-Control-Allow-Headers', '*');
        if (req.method === 'OPTIONS') {
            res.writeHead(200);
            res.end();
            return true;
        }
        return false
    }

    if (cors(req, res)) return

    switch (req.url) {
        case '/users':
            usersController(req, res)
            break;
        case '/lessons':
            res.write(`tasks`);
            break;
        default:
            res.write('PAGE NOT FOUND');
            break;
    }
})

server.listen(7543);