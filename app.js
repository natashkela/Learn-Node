const http = require('http');

const server = http.createServer((req,res) => {
    //event driven architecture
    console.log(req);
});

server.listen(3000);