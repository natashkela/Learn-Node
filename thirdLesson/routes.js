const requestHandler = (req,res) => {
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/'){
        res.write('<html>');
        res.write('<head>First Node App</head>');
        res.write('<body><h1>Welcome to your first app! Congrats!</h1></body>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url === 'users'){
        res.write('<html>');
        res.write('<head>First Node App</head>');
        res.write('<body><ul>');
        res.write('<li>Gamarjoba!</li>');
        res.write('<li>Hi! </li>');
        res.write('<ul/></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url==='/create-user'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody;
            console.log(message);
            res.end();
        });
    }
};

module.exports = requestHandler;