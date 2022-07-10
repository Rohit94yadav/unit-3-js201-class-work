const http = require("http");
let userData = require("./userData.json");



const server = http.createServer((req, res)=>{
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "Options, GET, POST, DELETE, PATCH",
        "Access-Control-Max-Age": 2592000
    }
    
    console.log(userData);
    let id = +req.url.split("/")[2];
    
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200);
        res.write("Welcome to Home page");
        res.end();
    }
    else if (req.url === '/users' && req.method === 'GET'){
        res.writeHead(200);
        res.write(JSON.stringify(userData));
        res.end();
    }
    else if (req.url === '/users' && req.method === 'POST'){
        req.on('data', (chunk)=>{
            res.writeHead(200, { ...headers, "Content-Type" : "application/json"});
            userData.push(JSON.parse(chunk));
            res.write(chunk.toString());
            res.end();
        })
    }
    else if (req.url === `/users/${id}` && req.method === 'PATCH'){
        req.on('data', (chunk)=>{
            res.writeHead(200, { ...headers, "Content-Type" : "application/json"});
            let newChunk = JSON.parse(chunk);
            let updatedData = userData.map(user=> user.id === id? ({...user, ...newChunk}) : user);
            userData = updatedData;
            // console.log(userData)
            res.write(chunk.toString());
            res.end();
        })
    }
    else if (req.url === `/users/${id}` && req.method === 'DELETE'){
            let updatedData = userData.filter(user=> user.id !== id);
            userData = updatedData;
            console.log(userData)
            res.writeHead(200, { ...headers, "Content-Type" : "application/json"});
            res.write("Deleted Successfully")
            res.end();
    }
})

server.listen(1234)