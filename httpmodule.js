const http = require('http');

const server = http.createServer( (req,res) => {
    if(req.url == '/'){
    res.end('Hello World');
    }
    else if(req.url == '/about') {
    res.end('about page');
    }
    else {
     res.end('No page found');
    }

});
server.listen(3000);
