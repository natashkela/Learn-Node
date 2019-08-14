const http = require('http');

const server = http.createServer((req,res) => {
    //event driven architecture
    // console.log(req);
    //process.exit(); -> stop the event loop
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>asdasdad</title></head>');
    res.write('<body><h1>Hello from Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});
 
server.listen(3000);