const app = require('./src/app')
const http = require('http');
const connect = require('./src/config/db.config');
connect();

const server = require('http').createServer(app);


server.listen(3000, () => {
    console.log("server listening on port 3000")
});
